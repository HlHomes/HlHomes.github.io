import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../config';

/** Posts for one language, newest first. Drafts stay visible in `astro dev` only. */
export async function getPosts(lang: Lang): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection(
    'blog',
    ({ data }) => data.lang === lang && (import.meta.env.DEV || !data.draft),
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
