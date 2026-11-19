---
title: Feed Preview
description: Para ver cómo quedan tus fotos en el feed de tu perfil antes de publicarlas.
stack: [JavaScript, Vite, IndexedDB, SortableJS]
demo: https://feed-preview-eosin.vercel.app
cover:
  src: ../../../assets/projects/feed-preview-mobile.jpg
  alt: Feed Preview con un perfil de ejemplo y doce fotos de paisajes en la cuadrícula 3:4
screenshots:
  - src: ../../../assets/projects/feed-preview-mobile.jpg
    alt: Feed Preview con un perfil de ejemplo y doce fotos de paisajes en la cuadrícula 3:4
  - src: ../../../assets/projects/feed-preview-cuadrado.jpg
    alt: Las mismas fotos en la cuadrícula 1:1 de Feed Preview
  - src: ../../../assets/projects/feed-preview-foto.jpg
    alt: Hoja para editar una foto en Feed Preview, con el encuadre y los botones Al inicio, Reemplazar y Eliminar
order: 7
---

## El problema

Antes de subir una foto es difícil saber cómo va a quedar al lado de las demás en tu perfil. Ir probando y borrando no tiene sentido, y las apps que te dejan verlo antes suelen pedirte cuenta o cobrarte por cosas básicas.

## La idea

Una web muy sencilla que imita la cuadrícula de un perfil: subes tus fotos, las mueves hasta que te guste cómo quedan y ya. Gratis, sin registro y sin que las fotos salgan de tu móvil.

## Qué hace

- Subes una o varias fotos de la galería y, en el ordenador, también puedes arrastrarlas o pegarlas.
- Para reordenarlas mantienes pulsada una foto y la arrastras a su sitio.
- Si tocas una foto puedes ajustar el encuadre, reemplazarla, llevarla al principio o borrarla.
- Cambias entre la cuadrícula 3:4, la de ahora, y la 1:1 de siempre.
- Puedes editar el perfil de muestra: foto, usuario, nombre, biografía y contadores.
- Tema claro, oscuro o automático, y opción de guardar una imagen con el feed entero.
- Se puede añadir a la pantalla de inicio del móvil.

## Cómo está hecha

- **JavaScript sin framework** y **Vite**. Es una sola pantalla y no hacía falta más.
- Las fotos se guardan en **IndexedDB**, en el propio navegador. No hay servidor ni cuentas.
- Antes de guardarlas las reduzco con un canvas a un tamaño razonable para que no ocupen de más.
- **SortableJS** para arrastrar y reordenar con el dedo.
- La imagen del feed completo se dibuja en un canvas y se descarga como JPG.

## Lo más complicado

Que arrastrar y tocar no se pisaran. En el móvil, mantener pulsado tiene que mover la foto y un toque normal abrirla, y al soltarla después de arrastrar no se puede abrir nada. También que guardar la imagen del feed no se quedara sin memoria en móviles con muchas fotos, por eso tiene un límite de filas.

## Qué aprendí

Que no todo necesita React: para algo de una sola pantalla, JavaScript a pelo y una librería pequeña van sobrados. Y que si las fotos no tienen por qué salir de tu móvil, lo mejor es que no salgan, así ni siquiera hace falta un servidor.
