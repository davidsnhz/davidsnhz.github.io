---
title: Órdago
description: A mus roguelike for your phone where the winner isn't who has the best cards, but who makes the other one believe they do.
stack: [React, TypeScript, Vite, Motion, Vitest]
demo: https://ordago-game.vercel.app
repo: https://github.com/davidsnhz/Ordago
cover:
  src: ../../../assets/projects/ordago-mobile.jpg
  alt: Órdago's title screen, a tavern table with Spanish playing cards and Salamanca through the window, with the Start the tour and Single duel buttons
screenshots:
  - src: ../../../assets/projects/ordago-mobile.jpg
    alt: Órdago's title screen, a tavern table with Spanish playing cards and Salamanca through the window, with the Start the tour and Single duel buttons
  - src: ../../../assets/projects/ordago-mesa.jpg
    alt: A duel against Chema in Órdago, with the scoreboard, the Your Face bar, the illustrated opponent, the rounds on the table and your four cards
  - src: ../../../assets/projects/ordago-mapa.jpg
    alt: The tour map in Órdago, the university with Miguel, Dani, Rubén and the boss Chema, and the bar as the next arena
order: 5
status: beta
---

## The idea

Mus, the classic Spanish card game, played one-on-one on your phone but turned into a roguelike. You're an outsider playing mus across Castile: you start in the university cafeteria and move on to the bar, a village house in the Palencia mountains and, later on, the village festival and the casino in the capital.

What I love most about mus are four moments: getting dealt a great hand, raising and having it accepted, going all in with an órdago and pulling off a bluff. The game is designed so they happen often.

## How it plays

- One-on-one duels with the 40-card Spanish deck and 8 kings: mus, Grande, Chica, Pares, Juego or Punto, then the count.
- You pass, raise, accept, re-raise or go all in with an **órdago**, which you have to hold down for a second so you don't throw it by accident. Cards aren't revealed until the count, and that's where bluffing lives.
- Every opponent plays their own way and has **tells** that hint at their cards but aren't always right. What you notice gets written down automatically in the **Notebook**.
- **Your Face** is how much the table believes you. If your bluffs work, they fear you; if you get caught, they'll accept everything.
- On **the tour** you pick a partner, climb the map against henchmen and bosses, stop at the tavern between duels and have three points of Honour. Some partners unlock as you play.
- There are also **single duels** against whoever you want, outside the tour.

## How it's built

- **TypeScript**, **React** and **Vite**, with **Motion** for the table animations.
- All the mus logic and the opponents' AI live apart from the interface, so they can be tested without a screen. There are **Vitest** tests for the rules, the betting, the AI and the table.
- Simulations of hundreds of duels against each opponent to tune the numbers, so none of them is impossible or a pushover.
- The character drawings go through a script that adapts them to the style of the table.
- A design document with the tour, the opponents, the art direction and the decisions I make along the way.

## Where it's at

The first three arenas of the tour are already playable: the university, the bar and the Palencia mountains. Next up is playing it a lot, tuning numbers and polishing drawings, animations and sound. The village festival and the casino are planned, but they're not in the game yet.

## The hardest part

Making bluffing work against a machine. The AI has to play well, but it also needs personality and has to give away tells you can read without them always being true. Each opponent has their own numbers and quirks (Toño always cuts, Manolo gets tipsy from the third hand on) and balancing them by hand was impossible, hence the simulations.

## What I'm learning

How to keep a game's logic apart from how it looks and how to test it properly. And how to design with numbers: a small change in how often an opponent bluffs makes a huge difference to how fun they are to play against.
