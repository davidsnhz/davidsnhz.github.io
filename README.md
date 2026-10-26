# davidsnhz.github.io

Portafolio personal de David, estudiante de 3º de Ingeniería Informática en la UEMC.
Publicado en **https://davidsnhz.github.io** (español) y **https://davidsnhz.github.io/en/** (inglés).

## Stack

- [Astro 7](https://astro.build) con generación estática
- [Tailwind CSS 4](https://tailwindcss.com) (plugin de Vite)
- i18n nativo de Astro: español por defecto en `/`, inglés en `/en/`
- Content Collections para los proyectos (Markdown con frontmatter tipado)
- Imágenes optimizadas con `astro:assets` y fuentes autoalojadas (Space Grotesk e Inter) con la API de fuentes de Astro
- Sitemap, Open Graph, `robots.txt` y modo claro/oscuro sin dependencias extra

## Desarrollo

Requiere Node 22.23 o superior.

```bash
npm install
npm run dev      # http://localhost:4321
npm run check    # comprobación de tipos (astro check)
npm run build    # genera dist/
npm run preview  # sirve dist/ en local
```

## Estructura

```
src/
├── assets/projects/        Capturas de los proyectos (se optimizan en el build)
├── components/             Header, Hero, tarjetas, marcos de teléfono y navegador…
├── config/site.ts          Datos personales: email, GitHub, LinkedIn, stack
├── content/projects/
│   ├── es/<slug>.md        Proyecto en español (frontmatter + caso de estudio)
│   └── en/<slug>.md        El mismo proyecto en inglés
├── content.config.ts       Esquema del frontmatter de los proyectos
├── i18n/ui.ts              Todos los textos de la interfaz en los dos idiomas
├── layouts/BaseLayout.astro  <head>, SEO, tema y animaciones de scroll
└── pages/
    ├── index.astro, en/index.astro               Home
    └── proyectos/[slug].astro, en/projects/[slug].astro   Casos de estudio
```

## Añadir un proyecto

Sin tocar ningún componente:

1. Copia las capturas a `src/assets/projects/`.
2. Crea `src/content/projects/es/<slug>.md` y `src/content/projects/en/<slug>.md` con el mismo `<slug>`:

```md
---
title: Nombre del proyecto
description: Una línea que lo explique.
stack: [React, Vite, Tailwind]
demo: https://...            # opcional
repo: https://github.com/... # opcional; sin repo no se muestra el botón "Código"
cover:                       # captura de móvil de la tarjeta
  src: ../../../assets/projects/nombre-mobile.png
  alt: Descripción de la captura
screenshots:                 # galería de la página de detalle
  - src: ../../../assets/projects/nombre-mobile.png
    alt: ...
  - src: ../../../assets/projects/nombre-desktop.png
    alt: ...
    device: browser          # phone (por defecto) o browser
order: 4                     # posición en la home
featured: true
status: live                 # live, o wip para "En desarrollo" (sin enlaces ni detalle)
---

## El problema
...
```

El cuerpo del Markdown es el caso de estudio. Cada `##` se convierte en una sección numerada.
El proyecto con `order` más bajo aparece como tarjeta destacada.

## Despliegue

Cada push a `main` ejecuta `.github/workflows/deploy.yml`: comprueba los tipos, compila con la
[acción oficial de Astro](https://github.com/withastro/action) y publica en GitHub Pages.
En **Settings → Pages**, la opción *Source* tiene que estar en **GitHub Actions**.

## Pendiente

- Rellenar `email` y `linkedin` en `src/config/site.ts`. Mientras estén vacíos, no aparecen en la sección de contacto.
- Cuando el repo de Zenit sea público, descomentar la línea `repo:` en `src/content/projects/{es,en}/zenit.md`.
