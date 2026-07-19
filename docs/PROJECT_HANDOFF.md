# Recall AI Study Coach – Project Handoff

## Project Status

Frontend: ✅ Complete
Backend: ⏳ Not Started

Project Phase:
Frontend Freeze → Backend Development

---

# Project Overview

Recall is an AI-powered study assistant.

Users can upload study materials (PDF/DOCX), and AI generates:

- Summary
- Flashcards
- Quiz
- Knowledge Map
- Revision Plan
- AI Tutor

---

# Tech Stack

## Frontend

- React 19
- Vite
- TypeScript
- Tailwind CSS v4
- Framer Motion
- React Flow

## Backend

- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- Multer
- Zod
- Helmet
- Morgan
- CORS
- OpenAI Responses API

---

# Frontend Status

Completed:

- Landing Page
- Dashboard
- Notes Upload
- AI Processing
- Study Workspace
- Flashcards
- Quiz
- Knowledge Map
- AI Tutor
- Revision Plan
- Notification Center
- Student Workspace
- Settings
- Responsive Design
- Animations
- Mock Data
- Local Storage Settings
- Final UI Polish

Frontend is frozen.

Only bug fixes are allowed.

---

# Routing

/

Landing Page

/app/dashboard

/app/notes

/app/processing

/app/study

/app/quiz

/app/knowledge-map

/app/revision-plan

/app/ai-tutor

/app/profile

/app/settings

---

# Backend Goals

Phase 1

- Express Setup
- TypeScript
- MongoDB Connection
- Folder Structure
- Health API

Phase 2

- File Upload
- Multer
- PDF Validation

Phase 3

- Text Extraction

Phase 4

OpenAI Responses API

Generate:

- Summary
- Flashcards
- Quiz
- Knowledge Map
- Revision Plan

Phase 5

AI Tutor

Phase 6

Connect Frontend

---

# Folder Structure

backend/

src/

config/

controllers/

middleware/

models/

routes/

services/

utils/

types/

app.ts

server.ts

---

# Development Rules

- Build one phase at a time.
- Never generate the whole backend at once.
- Explain architecture before coding.
- Verify every phase.
- Commit after every phase.
- Use clean architecture.
- Use reusable services.
- Keep APIs RESTful.
- Write production-quality TypeScript.

---

# Git Workflow

Feature Branch

↓

Develop

↓

Test

↓

Commit

↓

Merge

---

# Current Task

Start Backend Phase 1.

Do not continue until Phase 1 is complete and verified.
