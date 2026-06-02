# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This is a collection of intentionally terrible UI/UX designs — bad on purpose, for fun. Examples might include: invisible buttons, text that's impossible to read, broken layouts, confusing flows, dark patterns, gratuitous animations, and other design nightmares. The goal is to be creatively, skillfully bad.

## Design Philosophy

Bad design here is **intentional and crafted**. When building a piece:

- Commit to the bit — half-hearted bad design is just bad design.
- Document *why* each piece is bad (the specific UX/UI sin being committed).
- Be creative. There's a difference between lazy and deliberately awful.

## Gallery Rules

- **Only add a piece to `pieces/registry.js` when `pieces/{id}/index.html` actually exists.** No placeholders or coming-soon entries.
- The gallery renders every entry in the registry — keep the registry honest.

## Tech Stack & Structure

No stack is prescribed — each piece can be standalone HTML/CSS/JS, a React component, a Svelte app, etc. Organize by directory, one subdirectory per piece. Each should be self-contained and openable in a browser or run locally without setup.

Suggested structure per piece:
```
/piece-name/
  index.html   (or App.jsx, etc.)
  README.md    (describe the UX crime being committed)
```

## Coding Guidelines

These guidelines help reduce common LLM coding mistakes.

### Think Before Coding

- State assumptions explicitly. If uncertain, ask.
- If multiple interpretations exist, present them — don't pick silently.
- If a simpler approach exists, say so.

### Simplicity First

- Minimum code that solves the problem. Nothing speculative.
- No abstractions for single-use code.
- No features beyond what was asked.

### Surgical Changes

- Touch only what you must.
- Don't refactor things that aren't broken.
- Match existing style, even if you'd do it differently.

## Communication Style

Never open responses with filler phrases. Start every response with the actual answer. Match response length to task complexity.

Before any significant task, show 2-3 approaches and wait for a choice before proceeding.

Before making any change that significantly alters existing content: stop, describe exactly what will change and why, then wait for confirmation.

## Destructive & Irreversible Actions

All of the following require explicit in-session confirmation before proceeding:

- Deleting files or removing dependencies
- Overwriting existing code or content
- Deploying or pushing to any environment
- Sending external API calls or anything with irreversible side effects

## Code Task Completion

After any coding task, end with: **Files changed** (list every file touched) / **What was modified** (one line per file) / **Files intentionally not touched** / **Follow-up needed**.
