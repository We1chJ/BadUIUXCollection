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
- **When adding a new piece, read `pieces/registry.js` first and match the exact fields and format of the existing entries.** Do not add fields that aren't already present in the file.
- **After adding a new piece, always `git add`, `git commit`, and `git push` without waiting to be asked.**

## Piece HTML Template

**Every new piece `index.html` must follow the structure in `pieces/_template/index.html`.** No exceptions. That means:

1. **Back button** (top-left, fixed) — `<a class="back" href="../../gallery.html">← Gallery</a>` with the exact CSS from the template.
2. **Body as centering container** — `body { display: flex; align-items: center; justify-content: center; min-height: 100vh; }`. No `.stage` wrapper. Drop the bad UI directly in `<body>`.
3. **Glass footer pill** (`#footer-bar`, bottom-center, fixed) — frosted-glass floating pill with piece title, separator, UX sin (italic), separator, GitHub icon link. Copy the CSS and magnet-effect JS verbatim from the template; only swap in the piece-specific strings.
4. **Title tag** — `<title>Piece Name — BAD UI UX</title>`.

Copy the template verbatim for the chrome (back button + pill CSS + pill HTML + magnet JS), place the bad UI directly in `<body>`. Do not omit or redesign any of these structural elements.

**Do not modify `pieces/_template/index.html` unless explicitly told to.**

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
