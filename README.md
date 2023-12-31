# Wasp-Project

(ws-soccer-gallery)

### Developers

- AJ Wells
- David Vinson

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Installation](#installation)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [License](#license)

## Introduction

We as newer developers, wanted to strengthen our skills by trying a newer method of building a Full Stack Project using Wasp.
<br>In this project, we are hoping to be able to deploy the created database to a private server.
<br>This is a skill we haven't learned yet due the limited focus of a bootcamp we went through.

## Highlights

- Highlight 1: Wasp (https://wasp-lang.dev)
- Highlight 2: ReactJS
- Highlight 3: TypeScript
- Highlight 4: Bootstrap & Tailwind (Start with bootstrap and move to Tailwind)
- Highlight 5: Node.js / Prisma

## Getting Started

(Wasp documentation should be reviewed first, before starting)

- Startup: wasp start
- Start Database: wasp start db
- Migration (db): wasp db migrate-dev
- Database (view): wasp db studio

## App Usage

(This project is for a soccer profile / photo gallery)

- Parent(user) creates an account
- Parent adds player(s) by player_ref or a submitted form (approved by admin).
- Admin adds player(s) (player_ref will auto generate)
- Admin adds seasons by team name, year, grade, and season (Summer, Winter, Spring, Fall)
- Admin assigns players to season(s)

### Getting Started (Wasp for Dummies!!!)

(Documentation on how we started - mainly via by documentation)

1. Installed Wasp with a new project
   <br >.: wasp new wasp-project
2. Started up Wasp
   <br>.: wasp start

3. Project Structure (Using typescript)
   <br>.: Changed App.jsx to .tsx and updated main.wasp for App.tsx

4. Setup Editor

5. Setup and structure Database entities for user / player / season
6. Migrated db
   <br>.: wasp db migrate-dev

7. Started up db studio (tested with fake data to confirm relations)

8. Setup Queries inside main.wasp

9. Import Queries and tested data incoming.

10. Add styling libraries, setup visual testing structure.

11. Deployment Testing
    <br>.: (Checking documentation, noticed we needed to change the db structure from SQLite to PostgreSQL)
    <br>.: https://wasp-lang.dev/docs/data-model/backends#migrating-from-sqlite-to-postgresql

12. Setup app.deb.systems field to PostgreSQL
    <br>.: Updated main.wasp - db: { system: PostgreSQL }

13. Delete all the old migrations - rm -r migrations/

14. Attempted to run the server using wasp start
    <br>.: Found we where missing docker - Installed

15. Ran wasp start db, started the server - wasp start
    <br>.: Error displayed unable to main public.User

16. Restarted Server (Note: Server needs to be running :P)

17. Re-Migrated db - wasp db migrate-dev

### Deployment

(Fresh Day)

1. Open project in VSCode
2. Open Docker
3. Start Server - wasp start db
4. Start App - wasp start
5. Check studio - wasp db studio
   <br>.: Project is confirmed ready for a test deployment

6. Setup a free tier with Fly.io
7. Ran deploy `wasp deploy fly launch wasp-project mia`
   <br>.: This command runs several scripts
   <br>.: Log in and connect through terminal
   <br>.: Allow terminal to build project, do not close. (Will take some time, be patient)
   <br>.: Follow all instructions during build and save secret message.
   <br>.: Message will appear that your project has now deployed.

8. Future changes pushed live run `wasp deploy fly deploy`
