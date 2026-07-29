import type { Lang, Localized } from '../config';
import { defaultLang, ui, type UIKey } from './ui';

export const htmlLang: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en',
};

const intlLocale: Record<Lang, string> = {
  zh: 'zh-CN',
  en: 'en-US',
};

const dateFormat: Record<Lang, Intl.DateTimeFormatOptions> = {
  zh: { year: 'numeric', month: 'long', day: 'numeric' },
  en: { year: 'numeric', month: 'short', day: 'numeric' },
};

export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key];
  };
}

/** Turns a canonical path into a localized one: ('/blog', 'en') -> '/en/blog'. */
export function localePath(path: string, lang: Lang): string {
  const clean = `/${path.replace(/^\/+/, '')}`;
  if (lang === defaultLang) return clean;
  return clean === '/' ? `/${lang}/` : `/${lang}${clean}`;
}

/** Removes a leading locale segment so a path can be re-localized. */
export function stripLangPrefix(pathname: string): string {
  const match = pathname.match(/^\/(zh|en)(?=\/|$)/);
  if (!match) return pathname;
  return pathname.slice(match[0].length) || '/';
}

export function pickLocalized<T>(value: Localized<T>, lang: Lang): T {
  return value[lang];
}

export function formatDate(date: Date, lang: Lang): string {
  return new Intl.DateTimeFormat(intlLocale[lang], dateFormat[lang]).format(date);
}

/** Path of a blog entry, derived from its collection id (e.g. 'zh/hello' -> '/blog/hello'). */
export function postPath(id: string, lang: Lang): string {
  const slug = id.replace(/^(zh|en)\//, '');
  return localePath(`/blog/${slug}`, lang);
}

/** '2024-09' + '2027-06' -> '2024-09 – 2027-06'. An empty end reads as "present". */
export function formatRange(start: string, end: string, lang: Lang): string {
  return `${start} – ${end || ui[lang]['meta.present']}`;
}
