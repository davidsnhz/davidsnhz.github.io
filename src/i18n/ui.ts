export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const es = {
  'meta.title': 'David · Desarrollador web y estudiante de Ingeniería Informática',
  'meta.description':
    'Portafolio de David, estudiante de 3º de Ingeniería Informática en la UEMC. Productos web completos, del diseño al despliegue: Mus Contador, Tralap y Zenit.',

  'skip': 'Saltar al contenido',
  'nav.label': 'Principal',
  'nav.home': 'David, inicio',
  'nav.projects': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'nav.switchLang': 'Read in English',
  'theme.toggle': 'Cambiar entre modo claro y oscuro',

  'id.projects': 'proyectos',
  'id.about': 'sobre-mi',
  'id.contact': 'contacto',

  'hero.role': 'Desarrollador web · Ingeniería Informática, UEMC',
  'hero.title.a': 'Construyo productos web completos,',
  'hero.title.b': 'del diseño al despliegue.',
  'hero.text':
    'Estudio 3º de Ingeniería Informática y me apasionan la informática y la IA. Entre mis proyectos hay un marcador para la mesa de mus, una app para hacer la maleta y otra para entrenar con constancia.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.contact': 'Contacto',

  'projects.eyebrow': 'Proyectos',
  'projects.title': 'Proyectos destacados',
  'projects.intro': 'Aplicaciones web que he diseñado, programado y desplegado de principio a fin.',
  'projects.featured': 'Destacado',
  'projects.demo': 'Ver demo',
  'projects.code': 'Código',
  'projects.newTab': 'se abre en una pestaña nueva',
  'projects.stack': 'Tecnologías',
  'projects.wip': 'En desarrollo',

  'about.eyebrow': 'Sobre mí',
  'about.title': 'Me gusta llevar las ideas de principio a fin.',
  'about.p1':
    'Soy David y estudio 3º de Ingeniería Informática en la Universidad Europea Miguel de Cervantes (UEMC), en España. Me apasionan la informática y la inteligencia artificial.',
  'about.p2':
    'Lo que más disfruto es construir productos completos: pensar qué problema resuelven, diseñar la interfaz, programarlos y desplegarlos para que cualquiera pueda usarlos desde el móvil. Mis proyectos salen de situaciones cotidianas, como llevar la cuenta en una partida de mus, no olvidarme nada al hacer la maleta u organizar mis entrenamientos.',
  'about.facts.label': 'Datos rápidos',
  'about.facts.studies': 'Estudios',
  'about.facts.studies.value': 'Ingeniería Informática, 3º',
  'about.facts.university': 'Universidad',
  'about.facts.university.value': 'UEMC',
  'about.facts.location': 'Ubicación',
  'about.facts.location.value': 'España',
  'about.facts.interests': 'Intereses',
  'about.facts.interests.value': 'Informática e IA',
  'about.stack': 'Stack que domino',

  'contact.eyebrow': 'Contacto',
  'contact.title': '¿Hablamos?',
  'contact.text': 'Si te interesa mi trabajo o quieres comentarme algo, escríbeme por cualquiera de estas vías.',
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',

  'project.back': 'Volver a proyectos',
  'project.eyebrow': 'Caso de estudio',
  'project.meta': 'Ficha del proyecto',
  'project.role': 'Rol',
  'project.role.value': 'Diseño, desarrollo y despliegue',
  'project.stack': 'Stack',
  'project.demo': 'Demo',
  'project.gallery': 'Capturas',
  'project.gallery.phones': 'Capturas en el móvil, desplázate para ver más',
  'project.next': 'Siguiente proyecto',

  'footer.built': 'Hecho con Astro y Tailwind',
  'footer.source': 'Código de esta web',
} as const;

export type UiKey = keyof typeof es;

export const ui: { es: Record<UiKey, string>; en: Partial<Record<UiKey, string>> } = {
  es,
  en: {},
};
