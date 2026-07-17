# Architecture

## Overview

Recall follows a MERN architecture with AI-powered services.

```
+----------------------+
|     React Client     |
|   (Vite + Tailwind)  |
+----------+-----------+
           |
           | REST API
           |
+----------v-----------+
|   Express Backend    |
|    Authentication    |
|    Notes Service     |
|    Quiz Service      |
|    AI Service        |
+----------+-----------+
           |
   +-------+--------+
   |                |
   |                |
+--v----+     +-----v------+
|MongoDB|     | OpenAI API |
+-------+     +------------+
```

---

# Frontend

Framework

- React
- TypeScript
- Vite
- Tailwind CSS

Responsibilities

- User Interface
- Dashboard
- Quiz
- Knowledge Map
- Revision Plan

---

# Backend

Framework

- Node.js
- Express

Responsibilities

- Authentication
- Notes Processing
- AI Integration
- Quiz Generation
- Revision Planning
- Database

---

# Database

MongoDB Atlas

Collections

## users

- \_id
- name
- email
- password
- createdAt

---

## notes

- \_id
- title
- content
- extractedConcepts
- userId
- createdAt

---

## quizAttempts

- \_id
- noteId
- questions
- answers
- score
- mastery
- createdAt

---

## revisionPlans

- \_id
- userId
- topics
- priority
- date
- completed

---

# API Routes

POST /api/notes

Create notes

---

POST /api/notes/extract

Extract concepts using AI

---

POST /api/quiz/generate

Generate adaptive quiz

---

POST /api/quiz/submit

Evaluate answers

---

GET /api/dashboard

Dashboard statistics

---

POST /api/revision

Generate revision plan

---

# AI Flow

User Pastes Notes

↓

OpenAI extracts concepts

↓

Store concepts in MongoDB

↓

Generate quiz

↓

Evaluate answers

↓

Update mastery

↓

Generate revision plan

---

# Deployment

Frontend

Vercel

Backend

Railway

Database

MongoDB Atlas
