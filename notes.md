# 🚀 React Notes & Engineering Handbook

> Goal: By the end of React, I should be able to build projects independently without watching tutorials.

---

# 🧠 React Philosophy

I am not learning React.

I am learning how to think like a software engineer.

React is just a tool.

Whenever I learn a new React feature, I will ask:

Problem
↓

Why does this problem exist?

↓

How does React solve it?

↓

When should I use it?

↓

When should I NOT use it?

↓

How did I use it in a real project?

---

# 🏛 Engineering Mindset

Before writing a single line of code, I should answer:

1. What problem am I solving?
2. Who is the user?
3. What pages are required?
4. What UI repeats?
5. What should become a reusable component?
6. What data do I need?
7. Where will the data come from?
8. Who needs this data?
9. Where should the state live?
10. Can this design scale?
11. Does every component have only one responsibility?

---

# 📚 Engineering Rules

## Rule #1

### Problem

Many UI elements have the same design but different content.

### Solution

Create one reusable component and pass different data to it.

### Example

Instead of

- HeadphoneCard
- LaptopCard
- WatchCard

Create

- ProductCard

and pass

- title
- image
- price
- rating

through props.

---

## Rule #2

### Problem

A component tries to perform multiple tasks.

### Solution

Every component should have only one responsibility.

### Example

Navbar

↓

Only Navigation

ProductCard

↓

Only Display Product

Products Page

↓

Fetch Products & Display List

---

## Rule #3

### Problem

Developers think API decides the UI.

### Solution

API only returns data.

React decides how to display it.

Example

API

↓

Products

↓

React

↓

Featured Products

↓

Categories

↓

Product Cards

---

## Rule #4

### Problem

Need to display multiple similar items.

### Solution

Whenever I see an array, I should think

Array

↓

Repeated UI

↓

map()

---

## Rule #5

### Problem

Fetching the same data repeatedly.

### Solution

Don't fetch data you already have.

---

## Rule #6

### Problem

Multiple components require the same data.

### Solution

Move the shared state to the nearest common parent.

---

## Rule #7

Always ask

WHY

before asking

HOW.

---

# 📖 React Concepts

## Components

### Problem

UI gets repeated.

### Solution

Reusable Components.

### Example

Navbar

Footer

Hero

ProductCard

Button

Loader

---

## Pages

A page represents a complete screen.

Examples

Home

Products

Product Details

Cart

About

Contact

Usually connected with routes.

---

## Components vs Pages

Pages

↓

Complete Screens

Components

↓

Reusable UI

---

## Features

Features are things users can do.

Examples

Search

Filter

Wishlist

Login

Add To Cart

Features are NOT pages.

---

## Categories

Categories are data.

Not pages.

Wrong Thinking

Electronics.jsx

Fashion.jsx

Beauty.jsx

Correct Thinking

Products.jsx

↓

Filter Products

↓

Electronics

Fashion

Beauty

---

## Data vs UI

UI

Image

Title

Price

Button

Data

title

price

image

category

React combines

UI

+

Data

=

Final Screen

---

## API Thinking

API's responsibility

↓

Return Data

Application's responsibility

↓

Display Data

Filter Data

Group Data

Search Data

Sort Data

---

## State Thinking

Before deciding where state should live ask

1. Who needs this data?

2. How many components need it?

3. What is the nearest common parent?

---

# 📂 Folder Structure

Small React App

src

├── assets

├── components

├── App.jsx

└── main.jsx

Large React Project

src

├── assets

├── components

├── pages

├── layouts

├── hooks

├── services

├── context

├── utils

├── App.jsx

└── main.jsx

---

# 🏗 Project Thinking

Whenever I build a project I will first answer

Problem

↓

Users

↓

Pages

↓

Components

↓

Features

↓

Data

↓

State

↓

Folder Structure

↓

Code

---

# 🚀 ShopSphere

## Goal

Build an e-commerce website completely from scratch.

Not by following tutorials.

But by understanding why every React concept exists.

---

## Version 1 Pages

- Home
- Products
- Product Details
- Cart
- About
- Contact
- 404

---

## Home Page

Navbar

↓

Hero Banner

↓

Categories

↓

Featured Products

↓

Deals

↓

Footer

---

## Components

Navbar

Footer

Hero

ProductCard

CategoryCard

SearchBar

Loader

---

## Features

Search

Category Filter

Sorting

Product Details

Add To Cart

Responsive Design

---

## Data Source

Fake Store API

Products

Categories

Images

---

# ❌ Common Mistakes

❌ Creating

HeadphoneCard

LaptopCard

WatchCard

✅ ProductCard

---

❌ Fetching data inside every ProductCard

✅ Fetch once

↓

Distribute data

---

❌ Mixing UI & Business Logic

✅ One Component

↓

One Responsibility

---

# 💼 Interview Notes

(To be filled later)

---

# 📅 Daily Learning Journal

## Day 0

### Topics Learnt

- Thinking like a Software Engineer
- Components vs Pages
- Features vs Pages
- Data vs UI
- API Thinking
- State Thinking
- Project Architecture
- Folder Structure

---

### Biggest Realization

React is not the first thing.

Problem Solving is.

---

### Mistakes I Used To Make

I used to think

↓

React Component

↓

Code

Now I think

Problem

↓

Design

↓

Components

↓

State

↓

React

---

### Confidence

8/10

---

### Things To Remember

Always ask

What problem am I solving?

Never

Which React hook should I use?

---

# 🌟 My React Philosophy

I don't want to become someone who knows React.

I want to become someone who can design software.

Whenever I build something I will think

Problem

↓

Users

↓

Pages

↓

Components

↓

Features

↓

Data

↓

State

↓

Folder Structure

↓

React

React is only a tool.

Engineering comes first.