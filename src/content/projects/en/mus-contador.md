---
title: Mus Contador
description: A scoreboard for mus, the Spanish card game, to keep track of the game from your phone, right at the table.
stack: [React, Vite, Tailwind, PWA]
demo: https://mus-contador.vercel.app
repo: https://github.com/davidsnhz/Mus
cover:
  src: ../../../assets/projects/mus-mobile.png
  alt: Mus Contador on a phone, Nosotros 13 against Ellos 27, with the score shown as tally marks and the add, subtract and Órdago buttons
screenshots:
  - src: ../../../assets/projects/mus-mobile.png
    alt: Mus Contador on a phone, Nosotros 13 against Ellos 27, with the score shown as tally marks and the add, subtract and Órdago buttons
  - src: ../../../assets/projects/mus-desktop.png
    alt: Mus Contador on desktop with the score at zero and the Grande, Chica, Pares, Juego and Punto rounds
    device: browser
order: 1
featured: true
---

## The problem

In a game of mus, the traditional Spanish card game, the score is kept with *amarracos* (scoring tokens) or by memory, and between rounds it is easy to lose count or end up arguing about how many points each pair has. I wanted something you could leave on the table that anyone could understand at a glance.

## The solution

Mus Contador is an installable PWA that turns your phone into a scoreboard. The screen is split in two, Nosotros (us) against Ellos (them), with one color per team (cyan and red), large numbers and add and subtract buttons you can tap without aiming.

## Key features

- **Nosotros vs Ellos** scoreboard with large numbers and one color per team.
- An **Órdago** (all-in bet) button for each pair.
- Amarracos shown as **tally marks grouped in fives**, just like when you keep score by hand.
- Games won per team and progress bars towards the end of the match.
- Quick access to the rounds of the game: Grande, Chica, Pares, Juego and Punto.
- Undo the last action, restart the match and settings.

## Technical decisions

- **React and Vite** to iterate quickly on the interface and keep the build lightweight.
- **Tailwind CSS** to keep a consistent visual system: dark background, large type and only two meaningful colors, one per team.
- **Installable PWA**, so it opens from the home screen like any other app, without going through an app store.
- Traditional mus terminology (amarracos, órdago, lances) so any player feels at home.

## Challenges

The main challenge was design. An interface used at the table, between plays, has to be readable at a glance and forgiving of mistakes: that is why the buttons are large, each team has its own color and undo is always at hand. Showing the amarracos as tally marks in fives also made me think about how to display many points without cluttering the screen.

## What I learned

That designing for a specific context changes every decision: the size of the controls, the contrast or how much text to show. I also learned how to turn a web app into an installable PWA and how to take care of the details that make a small tool feel like a real app.
