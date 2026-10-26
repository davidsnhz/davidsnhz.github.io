import { defaultLang, ui, type Lang, type UiKey } from './ui';

export function toLang(locale: string | undefined): Lang {
  return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  // El español está completo y hace de respaldo
  return (key: UiKey): string => ui[lang][key] ?? ui.es[key];
}

export function homePath(lang: Lang): string {
  return lang === defaultLang ? '/' : `/${lang}/`;
}

/** Español en /proyectos/<slug>/, inglés en /en/projects/<slug>/ */
export function projectPath(slug: string, lang: Lang): string {
  return lang === 'es' ? `/proyectos/${slug}/` : `/en/projects/${slug}/`;
}
