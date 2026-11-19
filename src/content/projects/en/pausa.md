---
title: Pausa
description: A journal to take a short break every day, with a check-in, mood tracking, guided breathing and sounds.
stack: [React, Vite, Tailwind, Firebase, PWA]
demo: https://pausa-chi.vercel.app
repo: https://github.com/davidsnhz/Pausa
cover:
  src: ../../../assets/projects/pausa-mobile.png
  alt: Pausa's home screen with the greeting, a 3-day streak, the current week and the daily check-in card
screenshots:
  - src: ../../../assets/projects/pausa-mobile.png
    alt: Pausa's home screen with the greeting, a 3-day streak, the current week and the daily check-in card
  - src: ../../../assets/projects/pausa-respiracion.png
    alt: Guided breathing in Pausa, with the mascot setting the pace and the Breathe in prompt
  - src: ../../../assets/projects/pausa-stats.png
    alt: Pausa's stats with today's mood picker and the November calendar with the logged days
order: 6
---

## The problem

Some days you're running around nonstop and don't stop for a minute to think about how you're doing. And a lot of wellbeing apps go the opposite way: notifications all day long and tricks to keep you inside the app as long as possible.

## The idea

An "emotional first aid kit": a calm app you open for a little while, do your daily check-in, breathe for a bit and get on with your day. No pushy notifications or anything designed to hook you, and making it clear that it isn't a medical service.

## What it does

- **Daily check-in** in a reflection chat, with past conversations saved by day.
- **Mood tracking** with five faces and a monthly calendar to see how you've been, plus a summary for each month.
- **Streak** of consecutive days and the current week on the home screen.
- **Relax**: guided breathing following the mascot, exercises like 5-4-3-2-1 or box breathing, and background sounds like brown or white noise, with a timer so they switch off on their own.
- Email and password accounts, password recovery, legal texts with consent, and options to export your data or delete your account.

## How it's built

- **React** with **Vite** and **Tailwind CSS**, and **Motion** for the animations.
- **Firebase**: Authentication with email and password and **Firestore**, with security rules so each person can only read and write their own data.
- The chat is ready to talk to an AI model through its own backend, so the API key is never in the frontend. Without it, it replies with messages that take into account the tone of what you write.
- Firebase emulators with test data to work without touching real data, and **Vitest** tests for the streak, date and summary logic.
- A **PWA** you can install on your phone that opens full screen.

## The hardest part

The tone. In an app like this any text can sound cold or come on too strong, and the chat replies had to fit what you write: you can't answer good news with comforting words. And then everything that comes with storing other people's data: accounts, consent, legal texts and being able to take it all with you or delete it.

## What I learned

That when an app stores personal data, the legal side and security matter as much as the screens. And how to work with emulators and test data instead of trying things against the real database.
