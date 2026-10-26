---
title: Tralap
description: Prepara la maleta sin olvidar nada; la lista se genera según el destino y los días.
stack: [React, Vite, Tailwind, PWA]
demo: https://tralap.vercel.app
repo: https://github.com/davidsnhz/Tralap
cover:
  src: ../../../assets/projects/tralap-mobile.png
  alt: Pantalla Mis viajes de Tralap con tres viajes, Portugal, Santander y Madrid, y el progreso de cada maleta
screenshots:
  - src: ../../../assets/projects/tralap-mobile.png
    alt: Pantalla Mis viajes de Tralap con tres viajes, Portugal, Santander y Madrid, y el progreso de cada maleta
  - src: ../../../assets/projects/tralap-outfits.png
    alt: Viaje a Santander en Tralap, pestaña Outfits, con las cantidades de ropa calculadas para 5 días
  - src: ../../../assets/projects/tralap-esenciales.png
    alt: Viaje a Santander en Tralap, pestaña Esenciales, con sugerencias para playa
order: 2
featured: true
---

## El problema

Hacer la maleta suele acabar igual: la lista mental se queda corta y algo se olvida, ya sea el cargador, el cepillo de dientes o el bañador. Y a la vuelta pasa lo mismo, pero al revés.

## La solución

Tralap genera la lista de equipaje automáticamente a partir de dos datos: el tipo de destino y la duración del viaje. A partir de ahí solo queda ir marcando lo que ya está en la maleta, y al volver, repasar que no se quede nada atrás.

## Funcionalidades clave

- Cada viaje tiene **tipo de destino y duración**, y la lista se genera sola.
- **Sugerencias según el destino** (por ejemplo, playa añade bañador y toalla) y **cantidades de ropa calculadas** según los días.
- Listas separadas en **Outfits** y **Esenciales**, con la opción de añadir ítems propios.
- Progreso de cada viaje con un anillo y barras de porcentaje.
- **Mi plantilla**: las cosas que siempre llevo, reutilizables en cualquier viaje.
- **Modo vuelta**: un checklist para no dejarme nada al volver.
- Gestos de deslizar para renombrar o eliminar, con microinteracciones y animaciones.

## Decisiones técnicas

- **React, Vite y Tailwind** como base, para centrarme en el producto y no en la configuración.
- La lista se calcula a partir del destino y los días en lugar de partir de cero, así cada viaje empieza con algo útil desde el primer momento.
- Separar **Outfits** y **Esenciales** divide una lista larga en dos bloques fáciles de recorrer.
- **PWA**, porque la maleta se hace con el móvil en la mano.
- Un diseño en blanco, gris y negro con acentos en marrón claro, para que la app se sienta tranquila y ordenada.

## Retos

Lo más delicado fue que la lista generada resultara útil sin ser abrumadora: calcular cantidades razonables según los días y añadir las sugerencias del destino sin llenar la pantalla. También ajustar los gestos de deslizar y las animaciones para que todo se sintiera natural en el móvil.

## Qué aprendí

A pensar en el recorrido completo de un uso real, de la ida a la vuelta, y no solo en la pantalla principal. Y que las microinteracciones bien hechas cambian mucho cómo se percibe una aplicación.
