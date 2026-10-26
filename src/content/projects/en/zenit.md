---
title: Zenit
description: Training, habits and consistency; my gym routine, organized and measurable.
stack: [JavaScript, Firebase, localStorage, PWA]
demo: https://zenit-three.vercel.app
# The repo is private: uncomment this line once it is public
# repo: https://github.com/davidsnhz/Zenit
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

Zenit started from a need of my own: organizing my gym routines, knowing what I had to train each day and having something that motivated me to keep going.

## The solution

A training, habits and consistency PWA organized into four sections (Home, Routine, Goals and tasks, and Consistency) with a floating pill-shaped navigation bar.

## Key features

- **Home**: a greeting based on the time of day, week of the year, today's session, activity over the last two weeks and today's tasks.
- **Routine**: organized by days or by muscle groups, with timed sessions, total volume, a configurable rest timer and an energy log at the end.
- **Goals and tasks**: goals with a deadline and daily tasks that add to your progress.
- **Consistency**: a 25-week activity heatmap, current and longest streak, a consistency indicator, workouts per month, a muscle map, personal records and lifetime stats.
- Per exercise: max weight, **estimated 1RM** and a progress chart, plus an exercise library and custom exercises.
- Sign-in and cloud sync, a level system, streak reminders with notifications, haptic feedback, kg/lb, light and dark themes, and JSON data export and import.

## Technical decisions

- **JavaScript without frameworks**, which forced me to organize the state, the navigation between sections and the rendering of each screen myself.
- **localStorage and Firebase**: data is stored on the device and, when signed in, synced to the cloud.
- **JSON export and import**, so the data belongs to the user and they can take it with them.
- **PWA** with notifications for the streak reminder and haptic feedback, to bring the experience closer to a native app.

## Challenges

It is the project with the most moving parts: many screens and a lot of interrelated data (sessions, exercises, goals, streaks) without a framework behind it. Keeping everything consistent between local storage and Firebase sync, and calculating stats such as the estimated 1RM, the streaks or the heatmap from the history, were the most demanding parts.

## What I learned

To design an application with the data in mind: how to store it, sync it and turn it into information that motivates you, like a streak or a personal record. And that consistency can be designed too: seeing your progress is what makes you come back.
