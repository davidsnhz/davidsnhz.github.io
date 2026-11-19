---
title: Tralap
description: Pack your suitcase without forgetting anything. It builds the list from your trip and how many days you're going.
stack: [React, TypeScript, Vite, Tailwind, PWA]
demo: https://tralap.vercel.app
repo: https://github.com/davidsnhz/Tralap
cover:
  src: ../../../assets/projects/tralap-mobile.png
  alt: Tralap's My trips screen with three trips, Picos de Europa, Santander and Madrid, and how far along each suitcase is
screenshots:
  - src: ../../../assets/projects/tralap-mobile.png
    alt: Tralap's My trips screen with three trips, Picos de Europa, Santander and Madrid, and how far along each suitcase is
  - src: ../../../assets/projects/tralap-outfits.png
    alt: Trip to Santander in Tralap, Outfits tab, with clothing quantities calculated for 5 days
  - src: ../../../assets/projects/tralap-esenciales.png
    alt: Essentials for the trip to Santander in Tralap, with an icon showing whether each item is a beach suggestion, comes from the water activity or from your template
  - src: ../../../assets/projects/tralap-oscuro.png
    alt: Tralap's My trips screen in dark mode
order: 3
featured: true
---

## The problem

Packing always ends the same way: you make the list in your head, it falls short and you forget something, whether it's the charger, your toothbrush or your swimsuit. And on the way back it happens again, just the other way around: something stays behind at the hotel.

## The idea

Let the list make itself. You create a trip with the destination, the type of trip, your activities and the number of days, and Tralap puts the list together for you. All you do is tick off what's already in the suitcase.

## What it does

- Builds the list based on the type of trip. If it's a beach trip, for example, it adds the swimsuit and the towel.
- Works out how many clothes to bring based on how many days you're going.
- Splits the list into **Outfits** and **Essentials**, and you can add your own items.
- Each trip shows its progress with a ring and percentage bars.
- **My template**: the things you always bring, ready to add to any trip with one tap.
- **Return mode**: a checklist to go over the place you stayed before you leave.
- Swipe a card to rename or delete it, with animations, and if you delete something by mistake you can undo it.
- **Backup** of your data to save it or restore it without duplicating or deleting anything.
- Dark mode, which follows your phone's setting unless you pick one in Settings.
- Installs on your phone and works offline.

## How it's built

- **React with TypeScript** in strict mode, and **Vite**.
- **Tailwind CSS**. The interface is almost all white, black and greys, and brown is only used for what you tap or have selected. The colours live in a single file shared by Tailwind, the CSS and the manifest.
- **No backend**: everything is stored in localStorage with a schema version, so I can change how data is saved without breaking the trips you already had. Anything that can't be read is set aside instead of lost.
- **vite-plugin-pwa** for the service worker and the manifest.
- Tests with **Vitest**, ESLint and GitHub Actions to check everything on every change.
- Respects *prefers-reduced-motion*: if you've reduced animations on your phone, the app reduces them too.

## The hardest part

Making the list useful without overwhelming you. It pulls items from several places (the basics, the trip type suggestions, your activities and your template) and couldn't repeat anything, so every item has an icon showing where it came from. Then fine-tuning the swipe gestures so they felt natural under your thumb.

## What I learned

To think about the whole trip and not just the main screen: the app sticks with you on the way back too. And small animations, when they're done right, completely change how an app feels to use.
