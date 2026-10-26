---
title: Mus Contador
description: El marcador de mus para llevar la partida desde el móvil, en la misma mesa.
stack: [React, Vite, Tailwind, PWA]
demo: https://mus-contador.vercel.app
repo: https://github.com/davidsnhz/Mus
cover:
  src: ../../../assets/projects/mus-mobile.png
  alt: Mus Contador en el móvil, Nosotros 13 contra Ellos 27, con los amarracos en palotes y los botones de sumar, restar y Órdago
screenshots:
  - src: ../../../assets/projects/mus-mobile.png
    alt: Mus Contador en el móvil, Nosotros 13 contra Ellos 27, con los amarracos en palotes y los botones de sumar, restar y Órdago
  - src: ../../../assets/projects/mus-desktop.png
    alt: Mus Contador en escritorio con el marcador a cero y los lances Grande, Chica, Pares, Juego y Punto
    device: browser
order: 1
featured: true
---

## El problema

En una partida de mus la cuenta se lleva con amarracos o de cabeza, y entre lance y lance es fácil perderla o acabar discutiendo cuántas piedras lleva cada pareja. Quería algo que se pudiera dejar en la mesa y que cualquiera entendiera de un vistazo.

## La solución

Mus Contador es una PWA instalable que convierte el móvil en un marcador. La pantalla se divide en dos, Nosotros contra Ellos, con un color para cada equipo (cian y rojo), números grandes y botones de sumar y restar que se pulsan sin tener que apuntar.

## Funcionalidades clave

- Marcador **Nosotros vs Ellos** con números grandes y un color por equipo.
- Botón de **Órdago** para cada pareja.
- Amarracos representados como **palotes agrupados de cinco**, igual que se apuntan a mano.
- Contador de juegos ganados por equipo y barras de progreso hacia el final de la partida.
- Acceso rápido a los lances: Grande, Chica, Pares, Juego y Punto.
- Deshacer la última acción, reiniciar la partida y ajustes.

## Decisiones técnicas

- **React y Vite** para iterar rápido sobre la interfaz y tener un build ligero.
- **Tailwind CSS** para mantener un sistema visual coherente: fondo oscuro, tipografía grande y solo dos colores con significado, uno por equipo.
- **PWA instalable**, para abrirla desde la pantalla de inicio como una app más, sin pasar por ninguna tienda.
- La terminología tradicional del mus (amarracos, órdago, lances) para que cualquier jugador se sienta en casa.

## Retos

El reto principal fue de diseño. Una interfaz que se usa en la mesa, entre jugada y jugada, tiene que leerse de un vistazo y perdonar errores: por eso los botones son grandes, cada equipo tiene su color y deshacer está siempre a mano. Mostrar los amarracos como palotes de cinco también me obligó a pensar cómo enseñar muchos puntos sin saturar la pantalla.

## Qué aprendí

Que diseñar para un contexto concreto cambia todas las decisiones: el tamaño de los controles, el contraste o cuánto texto mostrar. También aprendí a convertir una aplicación web en una PWA instalable y a cuidar los detalles que hacen que una herramienta pequeña se sienta como una app de verdad.
