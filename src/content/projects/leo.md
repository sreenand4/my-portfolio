---
title: "Leo - AI Expense Assistant for Slack"
description: "A Slack-based AI assistant that lets freelancers log expenses on the go. Text Leo a photo of a receipt or a quick note, and it parses the message, categorizes the expense, and saves it to a Google Sheet organized by photoshoot."
image: "../../assets/leo.jpeg"
startDate: "2026-06-01"
skills: ["AI Agents", "Tool Calling", "Slack API", "Google Sheets API", "Conversational UX", "Receipt OCR"]
demoLink: "https://lnkd.in/eXD2QVSh"
---

## The Problem

My photography teacher Tony is a freelancer, and after every photoshoot he was buried in spreadsheets — manually logging cab rides, gear rentals, and meals, each with receipt evidence so he could get reimbursed. It's tedious, uncreative admin work that no one wants to do, so I asked if I could try building something to help.

## Meet Leo

Leo is a Slack-based AI assistant that helps Tony **L**og **E**xpenses **O**n-the-go (hence the name). By simply texting a photo of a receipt or a quick note, Leo:

- **Parses** the incoming message
- **Categorizes** the expense
- **Saves** it automatically into a Google Sheet, organized by photoshoot

## How It Works

Building Leo gave me first-hand exposure to how modern AI is built. I designed it around an **agentic tool-calling loop**, which means Leo actually reasons through the task: it interprets Tony's intent, maintains a rolling memory, scans its "toolbox," and autonomously decides the best next step until the task is complete.

This design pattern fascinates me — I can talk about it forever.

## Designing for Slack

Beyond the code, building inside Slack forced me to think differently about UX. Without traditional buttons or interfaces, most of the experience had to come through **conversational design**.

## Why It Matters

This project reminded me exactly why I chose to pursue CS. As I get closer to 20, being able to solve small but real problems like this feels like the ideal way to kick off my next decade of building.
