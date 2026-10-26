---
title: Zenit
description: Entrenamiento, hábitos y constancia; mi rutina de gimnasio, organizada y medible.
stack: [JavaScript, Firebase, localStorage, PWA]
demo: https://zenit-three.vercel.app
# El repo es privado: descomenta esta línea cuando lo hagas público
# repo: https://github.com/davidsnhz/Zenit
cover:
  src: ../../../assets/projects/zenit-mobile.png
  alt: Inicio de Zenit en el móvil con el saludo, la sesión de pecho y tríceps completada, la actividad de las últimas dos semanas y las tareas de hoy
screenshots:
  - src: ../../../assets/projects/zenit-mobile.png
    alt: Inicio de Zenit en el móvil con el saludo, la sesión de pecho y tríceps completada, la actividad de las últimas dos semanas y las tareas de hoy
  - src: ../../../assets/projects/zenit-constancia.png
    alt: Sección Constancia de Zenit con el heatmap de 25 semanas, la racha actual, el indicador de constancia y los entrenamientos de los últimos meses
  - src: ../../../assets/projects/zenit-desktop.png
    alt: Inicio de Zenit en escritorio con la tarjeta de descanso y el calendario de las últimas dos semanas
    device: browser
order: 3
featured: true
---

## El problema

Zenit nació de una necesidad propia: organizar mis rutinas de gimnasio, saber qué me tocaba entrenar cada día y tener algo que me motivara a seguir yendo.

## La solución

Una PWA de entrenamiento, hábitos y constancia organizada en cuatro secciones (Inicio, Rutina, Metas y tareas, y Constancia) con una barra de navegación flotante tipo píldora.

## Funcionalidades clave

- **Inicio**: saludo según la hora, semana del año, sesión del día, actividad de las últimas dos semanas y tareas de hoy.
- **Rutina**: organizada por días o por grupos musculares, con sesiones con cronómetro, volumen total, temporizador de descanso configurable y registro de energía al terminar.
- **Metas y tareas**: metas con fecha y tareas diarias que suman al progreso.
- **Constancia**: heatmap de actividad de 25 semanas, racha actual y máxima, indicador de constancia, entrenamientos por mes, mapa muscular, récords personales y estadísticas de por vida.
- Por ejercicio: peso máximo, **1RM estimado** y gráfica de evolución, además de una biblioteca de ejercicios y ejercicios personalizados.
- Inicio de sesión y sincronización en la nube, sistema de niveles, recordatorio de racha con notificaciones, vibración háptica, kg/lb, tema claro y oscuro, y exportación e importación de datos en JSON.

## Decisiones técnicas

- **JavaScript sin frameworks**, lo que me obligó a organizar yo mismo el estado, la navegación entre secciones y el renderizado de cada pantalla.
- **localStorage y Firebase**: los datos se guardan en el dispositivo y, con la sesión iniciada, se sincronizan en la nube.
- **Exportar e importar en JSON**, para que los datos sean del usuario y pueda llevárselos.
- **PWA** con notificaciones para el recordatorio de racha y vibración háptica, para acercar la experiencia a la de una app nativa.

## Retos

Es el proyecto con más piezas: muchas pantallas y muchos datos relacionados entre sí (sesiones, ejercicios, metas, rachas) sin un framework detrás. Mantener todo coherente entre el almacenamiento local y la sincronización con Firebase, y calcular a partir del historial estadísticas como el 1RM estimado, las rachas o el heatmap, fueron las partes más exigentes.

## Qué aprendí

A diseñar una aplicación pensando en los datos: cómo guardarlos, sincronizarlos y convertirlos en información que motive, como una racha o un récord personal. Y que la constancia también se diseña: ver el progreso es lo que hace que vuelvas.
