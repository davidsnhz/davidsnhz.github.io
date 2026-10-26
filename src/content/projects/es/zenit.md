---
title: Zenit
description: Mi app para organizar el gimnasio, apuntar los entrenos y no perder la racha.
stack: [JavaScript, Firebase, localStorage, PWA]
demo: https://zenit-three.vercel.app
repo: https://github.com/davidsnhz/Zenit
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

Zenit la hice para mí. Quería tener las rutinas del gimnasio organizadas, saber qué me tocaba cada día y tener algo que me picara a seguir yendo.

## La idea

Una app de entrenamiento, hábitos y constancia con cuatro secciones (Inicio, Rutina, Metas y tareas, y Constancia) y una barra de navegación flotante tipo píldora para moverte entre ellas.

## Qué hace

- **Inicio**: te saluda según la hora y te enseña la semana del año, la sesión del día, lo que has hecho las últimas dos semanas y las tareas de hoy.
- **Rutina**: por días o por grupos musculares. Durante la sesión tienes cronómetro, volumen total y un temporizador de descanso que puedes ajustar, y al acabar apuntas cómo ibas de energía.
- **Metas y tareas**: metas con fecha y tareas diarias que van sumando al progreso.
- **Constancia**: heatmap de 25 semanas, racha actual y máxima, indicador de constancia, entrenos por mes, mapa muscular, récords personales y estadísticas totales.
- Por ejercicio: peso máximo, **1RM estimado** y una gráfica para ver cómo vas mejorando. Tiene biblioteca de ejercicios y puedes crear los tuyos.
- Inicio de sesión con sincronización en la nube, niveles, aviso para no perder la racha, vibración, kg o lb, tema claro y oscuro, y exportar o importar tus datos en JSON.

## Cómo está hecha

- **JavaScript a pelo**, sin frameworks. El estado, la navegación entre secciones y el pintado de cada pantalla los organizo yo.
- Los datos se guardan en **localStorage** y, si inicias sesión, se sincronizan con **Firebase**.
- **Exportar e importar en JSON**, para que tus datos sean tuyos y te los puedas llevar.
- **PWA** con notificaciones para el aviso de racha y vibración, para que se parezca lo máximo posible a una app nativa.

## Lo más complicado

Es el proyecto más grande que tengo. Hay muchas pantallas y muchos datos que dependen unos de otros (sesiones, ejercicios, metas, rachas), y sin framework todo eso lo mantienes tú. Lo que más me costó fue que los datos cuadraran entre el móvil y Firebase, además de sacar del historial cosas como el 1RM, las rachas o el heatmap.

## Qué aprendí

A pensar primero en los datos: cómo guardarlos, cómo sincronizarlos y cómo enseñarlos para que te motiven. Ver una racha o un récord personal te hace volver más que cualquier recordatorio.
