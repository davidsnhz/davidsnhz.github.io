---
title: Pausa
description: Un diario para parar un rato al día, con check-in, registro de ánimo, respiración guiada y sonidos.
stack: [React, Vite, Tailwind, Firebase, PWA]
demo: https://pausa-chi.vercel.app
repo: https://github.com/davidsnhz/Pausa
cover:
  src: ../../../assets/projects/pausa-mobile.png
  alt: Inicio de Pausa con el saludo, una racha de 3 días, la semana actual y la tarjeta del check-in diario
screenshots:
  - src: ../../../assets/projects/pausa-mobile.png
    alt: Inicio de Pausa con el saludo, una racha de 3 días, la semana actual y la tarjeta del check-in diario
  - src: ../../../assets/projects/pausa-respiracion.png
    alt: Respiración guiada en Pausa, con la mascota marcando el ritmo y la indicación Inhala
  - src: ../../../assets/projects/pausa-stats.png
    alt: Estadísticas de Pausa con el selector de ánimo de hoy y el calendario de noviembre con los días registrados
order: 6
---

## El problema

Hay días en los que vas a mil y no te paras ni un minuto a pensar cómo estás. Y muchas apps de bienestar van justo al revés: notificaciones a todas horas y trucos para que pases el máximo tiempo dentro.

## La idea

Un "botiquín de primeros auxilios emocionales": una app tranquila en la que entras un rato, haces tu check-in del día, respiras un poco y sigues con lo tuyo. Sin notificaciones agresivas ni nada pensado para engancharte, y dejando claro que no es un servicio médico.

## Qué hace

- **Check-in diario** en un chat de reflexión, con las conversaciones anteriores guardadas por día.
- **Registro de ánimo** con cinco caras y un calendario mensual para ver cómo has ido, con un resumen de cada mes.
- **Racha** de días seguidos y la semana actual en la pantalla de inicio.
- **Relax**: respiración guiada siguiendo a la mascota, ejercicios como el 5-4-3-2-1 o la respiración en caja y sonidos de fondo como el ruido marrón o el blanco, con temporizador para que se apaguen solos.
- Cuenta con correo y contraseña, recuperar la contraseña, textos legales con consentimiento y opciones para exportar tus datos o borrar la cuenta.

## Cómo está hecha

- **React** con **Vite** y **Tailwind CSS**, y **Motion** para las animaciones.
- **Firebase**: Authentication con correo y contraseña y **Firestore**, con reglas de seguridad para que cada persona solo pueda leer y escribir lo suyo.
- El chat está preparado para hablar con un modelo de IA a través de un backend propio, así la clave nunca está en el frontend. Sin eso, contesta con frases que tienen en cuenta el tono de lo que escribes.
- Emuladores de Firebase con datos de prueba para trabajar sin tocar los datos reales, y pruebas con **Vitest** de la lógica de rachas, fechas y resúmenes.
- **PWA** que se instala en el móvil y se abre a pantalla completa.

## Lo más complicado

El tono. En una app así cualquier texto puede sonar frío o pasarse de intenso, y las respuestas del chat tenían que encajar con lo que escribes: a una buena noticia no le puedes contestar con frases de consuelo. Y luego todo lo que viene con guardar datos de otras personas: cuentas, consentimiento, textos legales y poder llevártelo todo o borrarlo.

## Qué aprendí

Que cuando una app guarda datos personales, la parte legal y la seguridad importan tanto como las pantallas. Y a trabajar con emuladores y datos de prueba en vez de probar las cosas contra la base de datos de verdad.
