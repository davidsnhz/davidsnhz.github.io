---
title: Tralap
description: Para hacer la maleta sin dejarte nada. Te prepara la lista según el viaje y los días.
stack: [React, TypeScript, Vite, Tailwind, PWA]
demo: https://tralap.vercel.app
repo: https://github.com/davidsnhz/Tralap
cover:
  src: ../../../assets/projects/tralap-mobile.png
  alt: Pantalla Mis viajes de Tralap con tres viajes, Portugal, Santander y Madrid, y lo que lleva preparado cada maleta
screenshots:
  - src: ../../../assets/projects/tralap-mobile.png
    alt: Pantalla Mis viajes de Tralap con tres viajes, Portugal, Santander y Madrid, y lo que lleva preparado cada maleta
  - src: ../../../assets/projects/tralap-outfits.png
    alt: Viaje a Santander en Tralap, pestaña Outfits, con las cantidades de ropa calculadas para 5 días
  - src: ../../../assets/projects/tralap-esenciales.png
    alt: Viaje a Santander en Tralap, pestaña Esenciales, con sugerencias para playa
order: 2
featured: true
---

## El problema

Hacer la maleta siempre acaba igual: te haces la lista de cabeza, se queda corta y te dejas algo, ya sea el cargador, el cepillo de dientes o el bañador. Y a la vuelta pasa lo mismo pero al revés, algo se queda en el alojamiento.

## La idea

Que la lista se haga sola. Creas el viaje con el destino, el tipo de viaje, las actividades y los días, y Tralap te la prepara. Tú solo vas marcando lo que ya está en la maleta.

## Qué hace

- Te genera la lista según el tipo de viaje. Si es de playa, por ejemplo, te mete el bañador y la toalla.
- Calcula cuánta ropa llevar según los días que vas.
- Separa la lista en **Outfits** y **Esenciales**, y puedes añadir tus propias cosas.
- Cada viaje tiene su progreso, con un anillo y barras de porcentaje.
- **Mi plantilla**: lo que llevas siempre, para meterlo en cualquier viaje con un toque.
- **Modo vuelta**: un checklist para repasar el alojamiento antes de irte.
- Deslizas una tarjeta para renombrarla o borrarla, con sus animaciones.
- Se instala en el móvil y funciona sin conexión.

## Cómo está hecha

- **React con TypeScript** en modo estricto y **Vite**.
- **Tailwind CSS**, con la paleta de la app (blanco, gris, negro y marrón claro) como tokens.
- **Sin backend**: todo se guarda en localStorage con una versión de esquema, así puedo cambiar cómo se guardan los datos sin romper los viajes que ya tenías.
- **vite-plugin-pwa** para el service worker y el manifest.
- Respeta *prefers-reduced-motion*: si tienes las animaciones reducidas en el móvil, la app también las reduce.

## Lo más complicado

Que la lista fuera útil sin agobiar. Junta cosas de varios sitios (lo básico, las sugerencias del tipo de viaje, lo de las actividades y tu plantilla) y no podía repetir nada, así que cada cosa lleva un icono según de dónde sale. Y luego afinar los gestos de deslizar para que se sintieran naturales con el dedo.

## Qué me llevo

A pensar en todo el viaje y no solo en la pantalla principal: la app también te acompaña a la vuelta. Y que las animaciones pequeñas, si están bien hechas, cambian muchísimo la sensación al usar una app.
