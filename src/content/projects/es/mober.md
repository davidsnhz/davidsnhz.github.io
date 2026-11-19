---
title: Mober
description: Para apuntar quién te debe dinero y que sea la app la que se acuerde por ti.
stack: [React Native, Expo, TypeScript, SQLite, Zustand]
demo: https://mober-beta.vercel.app
repo: https://github.com/davidsnhz/mober
cover:
  src: ../../../assets/projects/mober-mobile.png
  alt: Inicio de Mober con 147,50 € pendientes entre cinco personas, de la deuda más antigua a la más reciente
screenshots:
  - src: ../../../assets/projects/mober-mobile.png
    alt: Inicio de Mober con 147,50 € pendientes entre cinco personas, de la deuda más antigua a la más reciente
  - src: ../../../assets/projects/mober-persona.png
    alt: Detalle de Marta Ruiz en Mober, que debe 60 € en tres deudas, con los botones Recordar por WhatsApp y Marcar todo como pagado
  - src: ../../../assets/projects/mober-nueva-deuda.png
    alt: Pantalla Nueva deuda de Mober con 24,50 € a Pedro Martín por la cena del viernes y el teclado numérico de la app
  - src: ../../../assets/projects/mober-oscuro.png
    alt: Inicio de Mober en modo oscuro
order: 2
---

## El problema

Pagas una cena, una entrada o un taxi, el otro te dice "ya te lo paso" y al final se os olvida a los dos. Son cantidades pequeñas que no merecen una hoja de cálculo, pero sumadas se notan. Y estar recordándoselo tú cada dos por tres da bastante palo.

## La idea

Que apuntarlo cueste menos de cinco segundos (la cantidad, el nombre y, si quieres, el concepto) y que a partir de ahí sea la app la que se acuerde. Sin cuentas ni servidor: los datos se quedan en tu móvil.

## Qué hace

- **Me deben**: el total en grande y una fila por persona, con las deudas más antiguas primero. Si una pasa del mes, lleva la etiqueta "+30 días".
- **Nueva deuda**: teclado numérico propio y autocompletado de nombres que no distingue mayúsculas ni tildes, para que "Pedro" y "pedro" no acaben siendo dos personas.
- **Detalle de persona**: deslizas una deuda a la derecha para marcarla como pagada, con unos segundos para deshacerlo, y debajo tienes el historial de lo que ya has cobrado.
- **Recordar por WhatsApp**: abre el chat con el mensaje ya escrito en el tono que elijas (amable, directo, con humor o tu propia plantilla). Nunca se envía solo, siempre lo revisas tú.
- **Notificaciones** programadas en el propio móvil: un resumen cada cierto tiempo y avisos a los 7 y a los 30 días, como mucho uno al día, con botones para marcar como pagado o recordárselo sin abrir la app.
- **Ajustes** para la frecuencia y la hora de los avisos, ocultar las cantidades, tema claro u oscuro y exportar una copia en JSON.

## Cómo está hecha

- **React Native con Expo** y **TypeScript** en modo estricto: una sola base de código para iOS, Android y web.
- **SQLite** detrás de un repositorio con una única interfaz. En el navegador, si no se puede usar SQLite, tira de localStorage sin que el resto de la app note la diferencia.
- **Zustand** para el estado y **Expo Router** para la navegación.
- Las cantidades se guardan siempre en céntimos enteros y solo se pasan a euros al enseñarlas, para no arrastrar errores con los decimales.
- Los gestos van con **Reanimated** y **Gesture Handler**, y tiene tests con **Jest**, además de ESLint y Prettier.
- La versión web está en **Vercel** para poder probarla desde un enlace. Ahí no hay notificaciones ni contactos, eso es solo de la app de iOS y Android.

## Lo más complicado

Las notificaciones. Son lo que hace útil a la app y una web no puede programar avisos fiables, por eso la hice nativa con Expo en vez de como una web más. Luego había que dejarlas en su punto: que avisen sin agobiar, como mucho una al día, y que desde la propia notificación puedas marcar algo como pagado sin abrir la app.

## Qué aprendí

A hacer una app nativa de verdad y no solo webs, y a separar bien los datos de la interfaz: con el repositorio en medio, usar localStorage en el navegador en vez de SQLite fue casi gratis. También a decir que no: dejé fuera cosas como dividir gastos, pagos parciales o cuentas en la nube para que apuntar algo siguiera siendo cuestión de segundos.
