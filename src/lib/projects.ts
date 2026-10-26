import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** "es/mus-contador" -> "mus-contador" */
export function slugOf(project: Project): string {
  return project.id.split('/').slice(1).join('/');
}

export async function getProjects(lang: Lang) {
  const all = await getCollection('projects', (p) => p.id.startsWith(`${lang}/`));
  all.sort((a, b) => a.data.order - b.data.order);
  return {
    live: all.filter((p) => p.data.status === 'live'),
    wip: all.filter((p) => p.data.status === 'wip'),
  };
}
