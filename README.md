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
- Migration (db): wasp db migrate-dev
- Database (view): wasp db studio

## App Usage

(This project is for a soccer profile / photo gallery)

- Parent(user) creates an account
- Parent adds player(s) by player_ref or a submitted form (approved by admin).
- Admin adds player(s) (player_ref will auto generate)
- Admin adds seasons by team name, year, grade, and season (Summer, Winter, Spring, Fall)
- Admin assigns players to season(s)
