export const languages = { es: 'Español', en: 'English' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'es';

const es = {
  'meta.title': 'David Sánchez · Desarrollador web y estudiante de Ingeniería Informática',
  'meta.description':
    'Soy David Sánchez, estudiante de 3º de Ingeniería Informática en la UEMC. Veo problemas del día a día y les hago una app: Mus Contador, Tralap y Zenit.',

  'skip': 'Saltar al contenido',
  'nav.label': 'Principal',
  'nav.home': 'David Sánchez, inicio',
  'nav.projects': 'Proyectos',
  'nav.about': 'Sobre mí',
  'nav.contact': 'Contacto',
  'nav.language': 'Idioma',
  'theme.toggle': 'Cambiar entre modo claro y oscuro',

  'id.projects': 'proyectos',
  'id.about': 'sobre-mi',
  'id.contact': 'contacto',

  'hero.role': 'Desarrollador web · Ingeniería Informática, UEMC',
  'hero.title.a': 'Veo un problema en el día a día',
  'hero.title.b': 'y acabo haciéndole una app.',
  'hero.text':
    'Estudio 3º de Ingeniería Informática y me encanta todo lo que tiene que ver con la informática y la IA. Por ahora he hecho un marcador para jugar al mus, una app para hacer la maleta sin dejarte nada y otra para llevar el gimnasio al día.',
  'hero.cta.projects': 'Ver proyectos',
  'hero.cta.contact': 'Contacto',

  'projects.eyebrow': 'Proyectos',
  'projects.title': 'Lo que he hecho',
  'projects.intro': 'Todas las he diseñado, programado y publicado yo. Puedes probarlas desde aquí mismo.',
  'projects.featured': 'Destacado',
  'projects.demo': 'Ver demo',
  'projects.code': 'Código',
  'projects.newTab': 'se abre en una pestaña nueva',
  'projects.stack': 'Tecnologías',
  'projects.wip': 'En desarrollo',

  'about.eyebrow': 'Sobre mí',
  'about.title': 'Me gusta hacer cosas que se usen.',
  'about.p1':
    'Soy David Sánchez y estudio 3º de Ingeniería Informática en la Universidad Europea Miguel de Cervantes (UEMC). Me encanta la informática y estoy muy metido en todo lo relacionado con la IA.',
  'about.p2':
    'Casi todo lo que hago sale de algo del día a día: llevar la cuenta del mus sin papelitos, no olvidarme nada al hacer la maleta o tener mis entrenos organizados. Me gusta encargarme de todo, desde pensar cómo va a funcionar hasta publicarlo para que cualquiera lo pueda abrir en el móvil.',
  'about.facts.label': 'Datos rápidos',
  'about.facts.studies': 'Estudios',
  'about.facts.studies.value': 'Ingeniería Informática, 3º',
  'about.facts.university': 'Universidad',
  'about.facts.university.value': 'UEMC',
  'about.facts.location': 'Ubicación',
  'about.facts.location.value': 'España',
  'about.facts.interests': 'Me interesa',
  'about.facts.interests.value': 'Desarrollo web e IA',
  'about.stack': 'Con lo que trabajo',

  'contact.eyebrow': 'Contacto',
  'contact.title': '¿Hablamos?',
  'contact.text': 'Si te interesa lo que hago o quieres comentarme cualquier cosa, escríbeme por donde te venga mejor.',
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',

  'project.back': 'Volver a proyectos',
  'project.eyebrow': 'Caso de estudio',
  'project.meta': 'Ficha del proyecto',
  'project.role': 'Qué hice',
  'project.role.value': 'Todo: diseño, código y despliegue',
  'project.stack': 'Stack',
  'project.demo': 'Demo',
  'project.gallery': 'Capturas',
  'project.gallery.phones': 'Capturas en el móvil, desliza para ver más',
  'project.next': 'Siguiente proyecto',

  'footer.built': 'Hecho con Astro y Tailwind',
  'footer.source': 'Código de esta web',
} as const;

export type UiKey = keyof typeof es;

// Record completo: si falta una clave en inglés, TypeScript (astro check) lo marca
const en: Record<UiKey, string> = {
  'meta.title': 'David Sánchez · Web developer and Computer Engineering student',
  'meta.description':
    "I'm David Sánchez, a third-year Computer Engineering student at UEMC, Spain. I spot everyday problems and build apps for them: Mus Contador, Tralap and Zenit.",

  'skip': 'Skip to content',
  'nav.label': 'Main',
  'nav.home': 'David Sánchez, home',
  'nav.projects': 'Projects',
  'nav.about': 'About',
  'nav.contact': 'Contact',
  'nav.language': 'Language',
  'theme.toggle': 'Toggle light and dark mode',

  'id.projects': 'projects',
  'id.about': 'about',
  'id.contact': 'contact',

  'hero.role': 'Web developer · Computer Engineering, UEMC',
  'hero.title.a': 'I spot an everyday problem',
  'hero.title.b': 'and end up building an app for it.',
  'hero.text':
    "I'm a third-year Computer Engineering student and I love anything to do with computing and AI. So far I've built a scorekeeper for playing mus (a Spanish card game), an app to pack your suitcase without forgetting anything and another one to keep my gym routine on track.",
  'hero.cta.projects': 'See projects',
  'hero.cta.contact': 'Contact',

  'projects.eyebrow': 'Projects',
  'projects.title': "What I've built",
  'projects.intro': 'I designed, coded and shipped all of them myself. You can try them right from here.',
  'projects.featured': 'Featured',
  'projects.demo': 'Live demo',
  'projects.code': 'Code',
  'projects.newTab': 'opens in a new tab',
  'projects.stack': 'Technologies',
  'projects.wip': 'In development',

  'about.eyebrow': 'About',
  'about.title': 'I like making things people actually use.',
  'about.p1':
    "I'm David Sánchez and I'm in my third year of Computer Engineering at Universidad Europea Miguel de Cervantes (UEMC), in Spain. I love computing and I'm really into everything related to AI.",
  'about.p2':
    'Most of what I build comes from everyday stuff: keeping score at mus without scraps of paper, not forgetting anything when packing, or keeping my workouts organized. I like handling all of it, from figuring out how it should work to publishing it so anyone can open it on their phone.',
  'about.facts.label': 'Quick facts',
  'about.facts.studies': 'Studies',
  'about.facts.studies.value': 'Computer Engineering, 3rd year',
  'about.facts.university': 'University',
  'about.facts.university.value': 'UEMC',
  'about.facts.location': 'Location',
  'about.facts.location.value': 'Spain',
  'about.facts.interests': 'Interested in',
  'about.facts.interests.value': 'Web development and AI',
  'about.stack': 'What I work with',

  'contact.eyebrow': 'Contact',
  'contact.title': "Let's talk",
  'contact.text': "If you like what I do or want to tell me anything, reach out wherever suits you best.",
  'contact.email': 'Email',
  'contact.github': 'GitHub',
  'contact.linkedin': 'LinkedIn',

  'project.back': 'Back to projects',
  'project.eyebrow': 'Case study',
  'project.meta': 'Project details',
  'project.role': 'What I did',
  'project.role.value': 'Everything: design, code and deployment',
  'project.stack': 'Stack',
  'project.demo': 'Demo',
  'project.gallery': 'Screenshots',
  'project.gallery.phones': 'Phone screenshots, swipe to see more',
  'project.next': 'Next project',

  'footer.built': 'Built with Astro and Tailwind',
  'footer.source': 'Source code of this site',
};

export const ui: Record<Lang, Record<UiKey, string>> = { es, en };
