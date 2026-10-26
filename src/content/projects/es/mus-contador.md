---
title: Mus Contador
description: El marcador para jugar al mus con el móvil encima de la mesa, sin papelitos ni piedras.
stack: [HTML, CSS, JavaScript, PWA]
demo: https://mus-contador.vercel.app
repo: https://github.com/davidsnhz/Mus
cover:
  src: ../../../assets/projects/mus-mobile.png
  alt: Mus Contador en el móvil, Nosotros 13 contra Ellos 27, con las rayas de cada equipo y los botones de sumar, restar y Órdago
screenshots:
  - src: ../../../assets/projects/mus-mobile.png
    alt: Mus Contador en el móvil, Nosotros 13 contra Ellos 27, con las rayas de cada equipo y los botones de sumar, restar y Órdago
  - src: ../../../assets/projects/mus-desktop.png
    alt: Mus Contador en escritorio con el marcador a cero y los lances Grande, Chica, Pares, Juego y Punto
    device: browser
order: 1
featured: true
---

## El problema

Para llevar la cuenta del mus con los colegas siempre andábamos con papelitos o con piedras por la mesa. Quería algo más cómodo: abrir el móvil, dejarlo en la mesa y a jugar.

## La idea

Un marcador pensado para dejarlo encima de la mesa. La pantalla se parte en dos, Nosotros y Ellos, cada equipo con su color (cian y rojo), números bien grandes y botones de sumar y restar que se aciertan sin tener que mirar mucho.

## Qué hace

- Marcador de Nosotros contra Ellos con las rayas de toda la vida, agrupadas de cinco en cinco.
- Juegos ganados por cada equipo y una barra que va marcando lo que falta para ganar la partida.
- Botón de **órdago** para cada equipo.
- Acceso rápido a los lances: Grande, Chica, Pares, Juego y Punto.
- Si te equivocas, deshaces. También puedes reiniciar la partida y tocar los ajustes.
- Funciona **sin internet** y se instala en la pantalla de inicio como una app normal.

## Cómo está hecha

- **HTML, CSS y JavaScript a pelo**, sin frameworks ni nada que compilar. Para una app así no hacía falta más.
- Un **service worker** guarda la app la primera vez que la abres y a partir de ahí tira sin conexión. En el bar no siempre hay cobertura.
- Un **manifest** con el nombre, los iconos y los colores para poder instalarla como PWA.
- Está en **Vercel**: cada vez que subo un cambio a GitHub se actualiza sola.
- Fondo negro y solo dos colores, uno por equipo, para que se lea bien de un vistazo.

## Lo más complicado

Que se pudiera usar en plena partida. Tienes las cartas en la mano y el móvil en la mesa, así que los botones tenían que ser grandes, cada equipo se tenía que distinguir al momento y equivocarse no podía ser un drama. Por eso deshacer está siempre a mano. Meter muchas rayas sin que la pantalla se llenara también me hizo darle unas cuantas vueltas.

## Qué aprendí

Que cuando sabes exactamente dónde y cómo se va a usar algo, muchas decisiones de diseño salen casi solas: el tamaño de los botones, el contraste, cuánto texto poner. Y que no hace falta un framework para que una web se sienta como una app de verdad.
