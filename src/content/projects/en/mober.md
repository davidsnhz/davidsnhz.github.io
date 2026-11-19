---
title: Mober
description: To keep track of who owes you money and let the app do the remembering for you.
stack: [React Native, Expo, TypeScript, SQLite, Zustand]
demo: https://mober-beta.vercel.app
repo: https://github.com/davidsnhz/mober
cover:
  src: ../../../assets/projects/mober-mobile.png
  alt: Mober's home screen with €147.50 owed by five people, from the oldest debt to the most recent
screenshots:
  - src: ../../../assets/projects/mober-mobile.png
    alt: Mober's home screen with €147.50 owed by five people, from the oldest debt to the most recent
  - src: ../../../assets/projects/mober-persona.png
    alt: Marta Ruiz's page in Mober, who owes €60 across three debts, with the Remind on WhatsApp and Mark all as paid buttons
  - src: ../../../assets/projects/mober-nueva-deuda.png
    alt: Mober's New debt screen with €24.50 from Pedro Martín for Friday's dinner and the app's own number pad
  - src: ../../../assets/projects/mober-oscuro.png
    alt: Mober's home screen in dark mode
order: 2
---

## The problem

You pay for a dinner, a ticket or a taxi, the other person says "I'll send it to you" and in the end you both forget. They're small amounts that don't deserve a spreadsheet, but they add up. And having to remind people all the time is pretty awkward.

## The idea

Logging it should take less than five seconds (the amount, the name and, if you want, what it was for), and from then on the app does the remembering. No accounts and no server: your data stays on your phone.

## What it does

- **Owed to me**: the total in big numbers and one row per person, oldest debts first. If one is more than a month old, it gets a "+30 days" tag.
- **New debt**: its own number pad and name autocomplete that ignores case and accents, so "Pedro" and "pedro" don't end up as two different people.
- **Person page**: swipe a debt to the right to mark it as paid, with a few seconds to undo it, and below that the history of what you've already been paid back.
- **Remind on WhatsApp**: opens the chat with the message already written in the tone you pick (friendly, direct, funny or your own template). It never sends on its own, you always check it first.
- **Notifications** scheduled on the phone itself: a summary every so often and reminders at 7 and 30 days, at most one a day, with buttons to mark it as paid or send a reminder without opening the app.
- **Settings** for how often and when you get reminders, hiding amounts, light or dark theme and exporting a JSON backup.

## How it's built

- **React Native with Expo** and strict **TypeScript**: one codebase for iOS, Android and the web.
- **SQLite** behind a repository with a single interface. In the browser, if SQLite isn't available, it falls back to localStorage without the rest of the app noticing.
- **Zustand** for state and **Expo Router** for navigation.
- Amounts are always stored as whole cents and only turned into euros when they're shown, so there are no rounding errors along the way.
- Gestures use **Reanimated** and **Gesture Handler**, and there are tests with **Jest**, plus ESLint and Prettier.
- The web version is on **Vercel** so you can try it from a link. It doesn't have notifications or contacts, those are only in the iOS and Android app.

## The hardest part

Notifications. They're what makes the app useful and a website can't schedule reliable reminders, which is why I built it as a native app with Expo instead of just another web app. Then I had to get them right: reminding you without being annoying, at most one a day, and letting you mark something as paid straight from the notification without opening the app.

## What I learned

How to build a real native app and not just websites, and how to keep the data properly separated from the interface: with the repository in between, using localStorage in the browser instead of SQLite was almost free. Also how to say no: I left out things like splitting bills, partial payments or cloud accounts so that logging a debt would still take just a few seconds.
