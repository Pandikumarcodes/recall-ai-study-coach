# Code Standards

## General Principles

- Write clean, readable code.
- Prefer composition over duplication.
- Keep components focused on a single responsibility.
- Avoid premature optimization.

---

# TypeScript

- Never use `any`.
- Define interfaces/types for API responses.
- Enable strict mode.
- Prefer type inference when it keeps code readable.

---

# React

- Use functional components only.
- One component per file.
- Keep components under ~200 lines where practical.
- Extract reusable logic into custom hooks.

---

# Folder Structure

client/

components/
pages/
hooks/
services/
types/
utils/

server/

controllers/
routes/
models/
middleware/
services/
utils/

---

# Naming

Components

PascalCase

Example

QuizCard.tsx

Hooks

camelCase

Example

useQuiz.ts

API

REST naming

POST /api/quiz/generate

---

# API Rules

Every endpoint should:

- Validate input
- Return consistent JSON
- Handle errors gracefully
- Never expose stack traces

Example response

{
"success": true,
"data": {}
}

---

# Error Handling

Use try/catch.

Return meaningful messages.

Never crash the application.

---

# Logging

Development

Console logging is acceptable.

Production

Avoid unnecessary logs.

---

# Styling

Use reusable UI components.

Avoid inline styles.

Follow ui-tokens.md.

---

# State Management

Keep state local unless shared.

Avoid unnecessary global state.

---

# AI Integration

Keep prompts in a separate folder.

prompts/

concept-extraction.md

quiz-generation.md

answer-feedback.md

revision-plan.md

Never hardcode prompts inside components.

---

# Git

Commit after every completed feature.

Example

feat: notes input

feat: adaptive quiz

fix: quiz scoring

refactor: dashboard cards
