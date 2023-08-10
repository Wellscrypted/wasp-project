# Wasp-Project
(ws-wellstruck-soccer-gallery)

### Developers
AJ Wells
David Vinson

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
(We) wanted to strengthen our skills as newer developers by trying a newer method of building a Full Stack Project using Wasp. In this project, we are hoping to be able to deploy the created database to a private server. As newer developers, we have not yet learned this skill due to the educational bootcamp we went through. Hopefully other bootcamp developers will also find this as useful tool. Tailwind is also new to us, so we added bootstrap to start and then possibly move to tailwind.

## Highlights

- Highlight 1: Wasp (https://wasp-lang.dev)
- Highlight 2: ReactJS
- Highlight 3: TypeScript
- Highlight 4: Bootstrap & Tailwind (Start with bootstrap and move to Tailwind)
- Highlight 5: Node.js / Prisma

## Getting Started
(Wasp documentation should be reviewed first, before starting)
+Startup: wasp start
+Migration (db): wasp db migrate-dev
+Database (view): wasp db studio

## Usage
This project as it is, is for a soccer gallery.
-Parent(user) creates an account
-Parent adds players(many) by player_ref or a submitted form approved by admin
-Admin adds players(many - player_ref will auto generate)
-Admin adds seasons by team name, year, grade, and season (Summer, Winter, Spring, Fall)
-Admin assigns players to seasons(many)