---
title: Tralap
description: Pack your suitcase without forgetting anything; the list is generated from the destination and the length of the trip.
stack: [React, Vite, Tailwind, PWA]
demo: https://tralap.vercel.app
repo: https://github.com/davidsnhz/Tralap
cover:
  src: ../../../assets/projects/tralap-mobile.png
  alt: Tralap's My trips screen with three trips, Portugal, Santander and Madrid, and the packing progress of each one
screenshots:
  - src: ../../../assets/projects/tralap-mobile.png
    alt: Tralap's My trips screen with three trips, Portugal, Santander and Madrid, and the packing progress of each one
  - src: ../../../assets/projects/tralap-outfits.png
    alt: Trip to Santander in Tralap, Outfits tab, with clothing quantities calculated for 5 days
  - src: ../../../assets/projects/tralap-esenciales.png
    alt: Trip to Santander in Tralap, Essentials tab, with suggestions for a beach trip
order: 2
featured: true
---

## The problem

Packing usually ends the same way: the mental list falls short and something gets left behind, whether it is the charger, the toothbrush or the swimsuit. And on the way back the same thing happens, just the other way around.

## The solution

Tralap generates the packing list automatically from two pieces of information: the type of destination and the length of the trip. From there, all that is left is ticking off what is already in the suitcase and, on the way back, checking that nothing is left behind.

## Key features

- Each trip has a **destination type and a duration**, and the list is generated automatically.
- **Destination-based suggestions** (for example, a beach trip adds a swimsuit and a towel) and **clothing quantities calculated** from the number of days.
- Separate **Outfits** and **Essentials** lists, with the option to add your own items.
- Progress for each trip with a ring and percentage bars.
- **My template**: the things I always bring, reusable on any trip.
- **Return mode**: a checklist so I do not leave anything behind on the way back.
- Swipe gestures to rename or delete, with micro-interactions and animations.

## Technical decisions

- **React, Vite and Tailwind** as the foundation, to focus on the product rather than the setup.
- The list is calculated from the destination and the days instead of starting from scratch, so every trip starts with something useful from the first moment.
- Splitting **Outfits** and **Essentials** turns a long list into two blocks that are easy to go through.
- **PWA**, because you pack with your phone in your hand.
- A design in white, grey and black with light brown accents, so the app feels calm and tidy.

## Challenges

The trickiest part was making the generated list useful without being overwhelming: calculating sensible quantities based on the days and adding destination suggestions without filling the screen. Also fine-tuning the swipe gestures and animations so everything felt natural on a phone.

## What I learned

To think about the whole journey of real use, from departure to return, and not just the main screen. And that well-made micro-interactions make a big difference in how an app is perceived.
