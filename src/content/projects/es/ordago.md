---
title: Órdago
description: Un roguelike de mus para el móvil en el que no gana quien lleva mejores cartas, sino quien hace creer que las lleva.
stack: [React, TypeScript, Vite, Motion, Vitest]
demo: https://ordago-game.vercel.app
repo: https://github.com/davidsnhz/Ordago
cover:
  src: ../../../assets/projects/ordago-mobile.jpg
  alt: Portada de Órdago, una mesa de taberna con cartas de la baraja española y Salamanca por la ventana, con los botones Empezar la gira y Duelo suelto
screenshots:
  - src: ../../../assets/projects/ordago-mobile.jpg
    alt: Portada de Órdago, una mesa de taberna con cartas de la baraja española y Salamanca por la ventana, con los botones Empezar la gira y Duelo suelto
  - src: ../../../assets/projects/ordago-mesa.jpg
    alt: Duelo contra Chema en Órdago, con el marcador, la barra de Tu Cara, el rival dibujado, los lances en el tapete y tus cuatro cartas
  - src: ../../../assets/projects/ordago-mapa.jpg
    alt: Mapa de la gira en Órdago, la facultad con Miguel, Dani, Rubén y Chema, el jefe, y el bar como siguiente arena
order: 5
status: beta
---

## La idea

El mus de toda la vida, uno contra uno y en el móvil, pero convertido en un roguelike. Eres un forastero que se va jugando el mus por Castilla: empiezas en la cafetería de la facultad y de ahí pasas al bar, a una casa de pueblo en la Montaña Palentina y, más adelante, a las fiestas del pueblo y al casino de la capital.

Lo que más me gusta del mus son cuatro momentos: que te entre una buena mano, envidar y que te lo quieran, tirar un órdago y que te cuele un farol. El juego está pensado para que pasen a menudo.

## Cómo se juega

- Duelos uno contra uno con la baraja española de 40 cartas y a 8 reyes: mus, Grande, Chica, Pares, Juego o Punto y recuento.
- Pasas, envidas, quieres, subes o tiras un **órdago**, que hay que mantener pulsado un segundo para no tirarlo sin querer. Las cartas no se ven hasta el recuento, así que ahí es donde vive el farol.
- Cada rival juega a su manera y tiene sus **tics**, que dan pistas sobre sus cartas pero no aciertan siempre. Lo que vas viendo se apunta solo en la **Libreta**.
- **Tu Cara** es lo que te creen en la mesa. Si te cuelan los faroles, te temen; si te pillan, te lo quieren todo.
- En **la gira** eliges compañero, subes por el mapa contra secuaces y jefes, paras en la taberna entre duelo y duelo y tienes tres de Honra. Hay compañeros que se desbloquean jugando.
- También hay **duelos sueltos** contra el rival que quieras, sin gira.

## Cómo está hecho

- **TypeScript**, **React** y **Vite**, con **Motion** para las animaciones de la mesa.
- Toda la lógica del mus y la IA de los rivales va aparte de la interfaz, así que se puede probar sin pantalla. Tiene pruebas con **Vitest** de las reglas, las apuestas, la IA y la mesa.
- Simulaciones de cientos de duelos contra cada rival para ajustar los números, que ninguno sea imposible ni regalado.
- Los dibujos de los personajes pasan por un script que los adapta al estilo de la mesa.
- Un documento de diseño con la gira, los rivales, la dirección de arte y las decisiones que voy tomando.

## En qué punto está

Ya se pueden jugar las tres primeras arenas de la gira: la facultad, el bar y la Montaña Palentina. Lo siguiente es jugarlo mucho, ajustar números y pulir dibujos, animaciones y sonido. Las fiestas del pueblo y el casino están pensados, pero todavía no están en el juego.

## Lo más complicado

Que el farol funcione contra una máquina. La IA tiene que jugar bien, pero también tener personalidad y dejar pistas que se puedan leer sin que sean siempre verdad. Cada rival tiene sus números y sus manías (Toño corta siempre, Manolo se achispa a partir de la tercera mano) y equilibrarlos a mano era imposible, por eso las simulaciones.

## Qué estoy aprendiendo

A separar la lógica de un juego de cómo se ve y a probarla a fondo. Y a diseñar con números: un pequeño cambio en cuánto farolea un rival cambia muchísimo lo divertido que es jugar contra él.
