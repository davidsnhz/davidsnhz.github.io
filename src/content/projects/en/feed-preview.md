---
title: Feed Preview
description: To see how your photos will look on your profile feed before you post them.
stack: [JavaScript, Vite, IndexedDB, SortableJS]
demo: https://feed-preview-eosin.vercel.app
repo: https://github.com/davidsnhz/feed-preview
cover:
  src: ../../../assets/projects/feed-preview-mobile.jpg
  alt: Feed Preview with a sample profile and twelve landscape pictures in the 3:4 grid
screenshots:
  - src: ../../../assets/projects/feed-preview-mobile.jpg
    alt: Feed Preview with a sample profile and twelve landscape pictures in the 3:4 grid
  - src: ../../../assets/projects/feed-preview-cuadrado.jpg
    alt: The same pictures in Feed Preview's 1:1 grid
  - src: ../../../assets/projects/feed-preview-foto.jpg
    alt: The photo editing sheet in Feed Preview, with the crop and the Move to start, Replace and Delete buttons
order: 7
---

## The problem

Before posting a photo it's hard to know how it'll look next to the others on your profile. Posting and deleting until it looks right makes no sense, and the apps that let you preview it usually ask for an account or charge you for basic stuff.

## The idea

A really simple website that mimics a profile grid: you upload your photos, move them around until you like how they look, and that's it. Free, no sign-up and your photos never leave your phone.

## What it does

- Upload one or several photos from your gallery and, on a computer, you can also drag or paste them.
- To reorder them, press and hold a photo and drag it into place.
- Tap a photo to adjust the crop, replace it, move it to the start or delete it.
- Switch between the 3:4 grid, the current one, and the classic 1:1.
- Edit the sample profile: picture, username, name, bio and counters.
- Light, dark or automatic theme, and an option to save an image of the whole feed.
- It can be added to your phone's home screen.

## How it's built

- **Plain JavaScript**, no framework, and **Vite**. It's a single screen and didn't need more.
- Photos are stored in **IndexedDB**, in the browser itself. No server and no accounts.
- Before saving them I scale them down with a canvas to a sensible size so they don't take up more space than needed.
- **SortableJS** for dragging and reordering with your finger.
- The image of the whole feed is drawn on a canvas and downloaded as a JPG.

## The hardest part

Keeping dragging and tapping from getting in each other's way. On a phone, press and hold has to move the photo and a normal tap has to open it, and letting go after a drag can't open anything. Also making sure saving the feed image didn't run out of memory on phones with lots of photos, which is why it has a row limit.

## What I learned

That not everything needs React: for a single-screen app, plain JavaScript and a small library are more than enough. And that if your photos don't need to leave your phone, it's best that they don't, so you don't even need a server.
