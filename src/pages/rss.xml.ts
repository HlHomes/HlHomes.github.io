import rss from '@astrojs/rss';
import type { APIContext } from 'astro';

import { SITE } from '../config';
import { postPath } from '../i18n/utils';
import { getPosts } from '../lib/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts('zh');

  return rss({
    title: `${SITE.name.zh} · Blog`,
    description: SITE.description.zh,
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: postPath(post.id, 'zh'),
    })),
  });
}
