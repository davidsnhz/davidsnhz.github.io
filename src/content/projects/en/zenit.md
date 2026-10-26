---
title: Zenit
description: My app to organize my gym routine, log my workouts and keep the streak alive.
stack: [JavaScript, Firebase, localStorage, PWA]
demo: https://zenit-three.vercel.app
repo: https://github.com/davidsnhz/Zenit
cover:
  src: ../../../assets/projects/zenit-mobile.png
  alt: Zenit's home screen on a phone with the greeting, the completed chest and triceps session, activity over the last two weeks and today's tasks
screenshots:
  - src: ../../../assets/projects/zenit-mobile.png
    alt: Zenit's home screen on a phone with the greeting, the completed chest and triceps session, activity over the last two weeks and today's tasks
  - src: ../../../assets/projects/zenit-constancia.png
    alt: Zenit's Consistency section with the 25-week heatmap, current streak, consistency indicator and workouts over the last months
  - src: ../../../assets/projects/zenit-desktop.png
    alt: Zenit's home screen on desktop with the rest day card and the calendar for the last two weeks
    device: browser
order: 3
featured: true
---

## The problem

I built Zenit for myself. I wanted my gym routines organized, to know what I had to train each day and to have something that pushed me to keep going.

## The idea

A training, habits and consistency app with four sections (Home, Routine, Goals and tasks, and Consistency) and a floating pill-shaped nav bar to move between them.

## What it does

- **Home**: greets you based on the time of day and shows the week of the year, today's session, what you've done over the last two weeks and today's tasks.
- **Routine**: by days or by muscle groups. During a session you get a stopwatch, total volume and an adjustable rest timer, and when you finish you log how your energy was.
- **Goals and tasks**: goals with a deadline and daily tasks that add to your progress.
- **Consistency**: a 25-week heatmap, current and longest streak, a consistency indicator, workouts per month, a muscle map, personal records and all-time stats.
- Per exercise: max weight, **estimated 1RM** and a chart to see how you're improving. There's an exercise library and you can create your own.
- Sign-in with cloud sync, levels, a reminder so you don't lose your streak, vibration, kg or lb, light and dark themes, and JSON export and import for your data.

## How it's built

- **Plain JavaScript**, no frameworks. I handle the state, the navigation between sections and the rendering of each screen myself.
- Data is saved in **localStorage** and, if you sign in, synced with **Firebase**.
- **JSON export and import**, so your data is yours and you can take it with you.
- **PWA** with notifications for the streak reminder and vibration, to make it feel as close as possible to a native app.

## The hardest part

It's the biggest project I've built. There are lots of screens and lots of data that depend on each other (sessions, exercises, goals, streaks), and without a framework you're the one keeping all of it together. What took me the most work was keeping the data in sync between the phone and Firebase, and calculating things like the 1RM, the streaks or the heatmap from the history.

## What I took away

To think about the data first: how to store it, how to sync it and how to show it so it motivates you. Seeing a streak or a personal record brings you back more than any reminder.
