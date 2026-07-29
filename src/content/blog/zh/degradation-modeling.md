---
title: 图像修复里的退化建模：从单一退化到复合退化
description: 梳理经典退化模型的形式、真实场景下复合退化的构造方式，以及为什么 all-in-one 修复会走向 MoE。
pubDate: 2026-07-20
lang: zh
tags:
  - Image Restoration
  - Low-Level Vision
  - Mixture-of-Experts
---

监督式图像修复的训练数据基本靠合成——先假设一个退化过程，再用它把清晰图退化成观测图。这个假设有多贴近真实世界，直接决定了模型在实拍数据上还剩多少性能。

## 经典退化模型

超分辨率领域用得最久的是这个形式：清晰图 $x$ 先与模糊核 $k$ 卷积，再以因子 $s$ 降采样，最后叠加噪声 $n$，得到观测图 $y$。

$$
y = (x \otimes k) \downarrow_s + \, n
$$

其中噪声通常假设为加性高斯白噪声 $n \sim \mathcal{N}(0, \sigma^2 I)$。这个模型的好处是可微、可控、便于分析；问题是它太干净了——真实退化里模糊核未知且空间变化，噪声与信号相关，还额外叠着压缩伪影。

在这个假设下训练出来的模型，一旦测试时的退化和训练时不一致，性能就会显著下降。这就是所谓的**退化不匹配**（degradation mismatch）。

## 真实退化：把退化过程随机化

BSRGAN 和 Real-ESRGAN 给出的思路很直接：既然不知道真实退化长什么样，那就把各种退化算子随机排列组合，用足够宽的退化分布把真实情况覆盖进去。

```python
import random

import torch
import torch.nn.functional as F


def random_degradation(x: torch.Tensor, scale: int = 4) -> torch.Tensor:
    """把模糊、降采样、噪声、压缩四类算子随机洗牌后依次施加。"""
    ops = [blur, partial_resize(scale), add_noise, jpeg_compress]
    random.shuffle(ops)

    for op in ops:
        x = op(x)
    return x


def add_noise(x: torch.Tensor) -> torch.Tensor:
    # 真实传感器噪声与信号强度相关，纯高斯噪声会低估暗区噪声
    sigma = random.uniform(1, 25) / 255.0
    if random.random() < 0.5:
        return x + torch.randn_like(x) * sigma
    return x + torch.randn_like(x) * sigma * x.sqrt().clamp(min=1e-4)
```

关键在最后那个分支：**泊松噪声（信号相关）比高斯噪声更贴近真实传感器**。只用高斯噪声训练的模型，在暗部区域往往会把噪声当成纹理保留下来。

> 退化分布的宽度是把双刃剑。覆盖得越宽，泛化越好，但单一退化上的峰值指标一定会掉——因为模型的容量被摊薄到了整个分布上。

## 多退化：为什么走向 MoE

当一个模型要同时处理去噪、去模糊、去雨、去雾时，容量摊薄的问题会变得更严重。混合专家（MoE）的思路是让不同专家分工，由路由网络按输入的退化类型稀疏地激活其中几个：

$$
\mathbf{y}=\sum_{i=1}^{N} g_i(\mathbf{x})\, E_i(\mathbf{x}),
\qquad
g(\mathbf{x})=\operatorname{TopK}\big(\operatorname{softmax}(\mathbf{W}_g \mathbf{x}),\, k\big)
$$

只有 $g_i(\mathbf{x}) \neq 0$ 的专家参与计算，所以总参数量可以远大于单次前向的计算量。对 all-in-one 修复来说，这正好对上需求：**总容量要大到能容纳多种退化的先验，单次推理成本又不能随退化种类线性增长**。

实际训练时，负载均衡损失几乎是必需的，否则路由会塌缩到少数几个专家上：

$$
\mathcal{L}_{\text{balance}} = N \sum_{i=1}^{N} f_i \cdot P_i
$$

其中 $f_i$ 是分配给专家 $i$ 的样本比例，$P_i$ 是路由给它的平均概率。

## 几类退化的对比

| 退化类型 | 空间变化 | 与信号相关 | 常用假设 |
| --- | --- | --- | --- |
| 高斯噪声 | 否 | 否 | $n \sim \mathcal{N}(0, \sigma^2)$ |
| 泊松噪声 | 否 | 是 | 与像素强度成正比 |
| 运动模糊 | 是 | 否 | 空间变化核 |
| JPEG 伪影 | 是 | 是 | 块状 DCT 量化 |
| 雨、雾 | 是 | 是 | 大气散射模型 |

表格从上到下，建模难度递增，而恰好越往下越接近真实拍摄条件——这也是 Low-Level Vision 里合成数据与真实数据之间那道鸿沟的来源。
