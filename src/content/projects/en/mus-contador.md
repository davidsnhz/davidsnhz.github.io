---
title: Mus Contador
description: A scorekeeper for mus, the Spanish card game. Your phone sits on the table, no scraps of paper needed.
stack: [HTML, CSS, JavaScript, PWA]
demo: https://mus-contador.vercel.app
repo: https://github.com/davidsnhz/Mus
cover:
  src: ../../../assets/projects/mus-mobile.png
  alt: Mus Contador on a phone, Nosotros 13 against Ellos 27, with each team's tally marks and the add, subtract and Órdago buttons
screenshots:
  - src: ../../../assets/projects/mus-mobile.png
    alt: Mus Contador on a phone, Nosotros 13 against Ellos 27, with each team's tally marks and the add, subtract and Órdago buttons
  - src: ../../../assets/projects/mus-desktop.png
    alt: Mus Contador on desktop with the score at zero and the Grande, Chica, Pares, Juego and Punto rounds
    device: browser
order: 1
featured: true
---

## The problem

Whenever I played mus with my friends, we kept score with scraps of paper or little stones on the table. I wanted something easier: open your phone, leave it on the table and play.

## The idea

A scoreboard designed to sit on the table. The screen is split in two, Nosotros (us) and Ellos (them), each team with its own color (cyan and red), really big numbers and add and subtract buttons you can hit without looking too closely.

## What it does

- Nosotros vs Ellos scoreboard with old-school tally marks, grouped in fives.
- Games won by each team and a bar showing how much is left to win the match.
- An **órdago** (all-in bet) button for each team.
- Quick access to the rounds: Grande, Chica, Pares, Juego and Punto.
- Made a mistake? Undo it. You can also restart the match and change the settings.
- Works **offline** and installs on your home screen like a regular app.

## How it's built

- **Plain HTML, CSS and JavaScript**, no frameworks and nothing to compile. An app like this didn't need more.
- A **service worker** saves the app the first time you open it, and from then on it works without a connection. Bars don't always have good signal.
- A **manifest** with the name, icons and colors so it can be installed as a PWA.
- It's on **Vercel**: every time I push a change to GitHub, it updates by itself.
- Black background and just two colors, one per team, so it's easy to read at a glance.

## The hardest part

Making it usable mid-game. You've got your cards in one hand and the phone on the table, so the buttons had to be big, each team had to stand out instantly and making a mistake couldn't be a big deal. That's why undo is always within reach. Fitting lots of tally marks without filling up the screen also took me a few tries.

## What I took away

When you know exactly where and how something is going to be used, a lot of design decisions make themselves: button size, contrast, how much text to show. And you don't need a framework to make a website feel like a real app.
