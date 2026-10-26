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

// Record completo: si falta una clave en inglés, TypeScript (astro check) lo marca
const en: Record<UiKey, string> = {
  'meta.title': 'David · Web developer and Computer Engineering student',
  'meta.description':
    'Portfolio of David, a third-year Computer Engineering student at UEMC, Spain. Complete web products, from design to deployment: Mus Contador, Tralap and Zenit.',

  'skip': 'Skip to content',
  'nav.label': 'Main',
  'nav.home': 'David, home',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.switchLang': 'Leer en español',
  'theme.toggle': 'Toggle light and dark mode',

  'id.projects': 'projects',
  'id.about': 'about',
  'id.contact': 'contact',

  'hero.role': 'Web developer · Computer Engineering, UEMC',
  'hero.title.a': 'I build complete web products,',
  'hero.title.b': 'from design to deployment.',
  'hero.text':
    "I'm a third-year Computer Engineering student, passionate about computing and AI. My projects include a scorekeeper for mus, the Spanish card game, an app to pack your suitcase and another one to train consistently.",
  'hero.cta.projects': 'See projects',
  'hero.cta.contact': 'Contact',

  'projects.eyebrow': 'Projects',
  'projects.title': 'Featured projects',
  'projects.intro': 'Web apps I designed, built and deployed end to end.',
  'projects.featured': 'Featured',
  'projects.demo': 'Live demo',
  'projects.code': 'Code',
  'projects.newTab': 'opens in a new tab',
  'projects.stack': 'Technologies',
  'projects.wip': 'In development',

  'about.eyebrow': 'About',
  'about.title': 'I like taking ideas from start to finish.',
  'about.p1':
    "I'm David, a third-year Computer Engineering student at Universidad Europea Miguel de Cervantes (UEMC), in Spain. I'm passionate about computing and artificial intelligence.",
  'about.p2':
    'What I enjoy most is building complete products: thinking about the problem they solve, designing the interface, coding them and deploying them so anyone can use them from their phone. My projects come from everyday situations, like keeping score in a game of mus, not forgetting anything when packing or organizing my workouts.',
  'about.facts.label': 'Quick facts',
  'about.facts.studies': 'Studies',
  'about.facts.studies.value': 'Computer Engineering, 3rd year',
  'about.facts.university': 'University',
  'about.facts.university.value': 'UEMC',
  'about.facts.location': 'Location',
  'about.facts.location.value': 'Spain',
  'about.facts.interests': 'Interests',
  'about.facts.interests.value': 'Computing and AI',
  'about.stack': 'Tech stack',

  'contact.eyebrow': 'Contact',
  'contact.title': "Let's talk",
  'contact.text': "If my work interests you or you'd like to tell me something, reach out through any of these channels.",
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',

  'project.back': 'Back to projects',
  'project.eyebrow': 'Case study',
  'project.meta': 'Project details',
  'project.role': 'Role',
  'project.role.value': 'Design, development and deployment',
  'project.stack': 'Stack',
  'project.demo': 'Demo',
  'project.gallery': 'Screenshots',
  'project.gallery.phones': 'Phone screenshots, scroll to see more',
  'project.next': 'Next project',

  'footer.built': 'Built with Astro and Tailwind',
  'footer.source': 'Source code of this site',
};

export const ui: Record<Lang, Record<UiKey, string>> = { es, en };
