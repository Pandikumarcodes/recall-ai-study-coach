# Recall — AI Study Coach 🧠

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-8-646CFF?logo=vite&logoColor=white)](https://vite.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)

Recall is a polished frontend prototype for an AI-powered study coach. It turns the study journey into a focused workspace: upload notes, simulate AI processing, review a generated summary, practise with flashcards and quizzes, explore connected concepts, plan revisions, and ask an AI tutor for help.

Built for a hackathon demo, Recall runs entirely in the browser with realistic typed mock data—no backend, API keys, or network calls required.

## ✨ Project overview

Students often have material to read but no clear way to turn it into effective revision. Recall presents a guided, connected learning experience that helps students move from raw notes to structured study activities.

The current application is a frontend-only simulation of that experience. Upload and AI actions are deliberately mocked so the complete product journey remains reliable in a live demo.

## 🎯 Problem statement

Study notes are difficult to revisit efficiently. Learners need help answering practical questions:

- What should I study next?
- Which concepts need more attention?
- How can I turn passive reading into active recall?

Recall addresses this by organizing study materials, practice, concept exploration, revision planning, and tutor guidance in one responsive workspace.

## ✅ Implemented features

- Responsive application shell with desktop sidebar and mobile navigation drawer
- Dashboard with study overview, recent materials, quick actions, and learning insights
- Notes upload with drag-and-drop support, file validation, mock upload progress, status cards, and empty state
- Mock AI processing route with animated progress steps and automatic hand-off to the study workspace
- Study workspace with summary, flashcard, quiz, and knowledge-map tabs
- Interactive flashcards with flip and next/previous controls
- Multiple-choice quiz with answer feedback, score calculation, completion state, and restart flow
- Responsive React Flow knowledge map with controls, minimap, fitting, and concept detail sidebar
- Revision planner with mock schedule, calendar, progress, achievements, and completion interactions
- AI Tutor chat with suggested prompts, typing indicator, mock responses, recent chats, and auto-scroll
- Notification drawer, profile menu, settings, and profile views
- Reusable loading skeletons, empty states, upload/error feedback, and an application-level error boundary
- Semantic design tokens, keyboard focus states, ARIA labels, reduced-motion support, and subtle Framer Motion transitions
- Lazy-loaded routes for a faster initial bundle

## 🧰 Tech stack

| Area        | Technology                                 |
| ----------- | ------------------------------------------ |
| Framework   | React 19                                   |
| Language    | TypeScript                                 |
| Build tool  | Vite                                       |
| Styling     | Tailwind CSS 4 with semantic design tokens |
| Routing     | React Router DOM                           |
| Animation   | Framer Motion                              |
| Icons       | Lucide React                               |
| Concept map | React Flow                                 |
| Data        | Local TypeScript mock modules              |

## 🏗️ Architecture

Recall is a client-only application. Routes are grouped beneath `/app`, where a shared application layout provides the sidebar, top navigation, notifications, and animated page outlet. Feature pages consume local mock modules from `client/src/mocks`, keeping the UI deterministic and independent of external services.

```text
BrowserRouter
├── /
│   └── Landing page
└── /app
    ├── AppLayout (sidebar + top navigation)
    ├── Dashboard
    ├── Notes → Processing → Study workspace
    ├── Quiz
    ├── Knowledge map
    ├── Revision plan
    ├── AI Tutor
    ├── Profile
    └── Settings
```

## 📁 Folder structure

```text
recall-ai-study-coach/
├── client/
│   ├── src/
│   │   ├── components/       # Reusable UI and feature components
│   │   ├── data/             # UI-ready data adapters
│   │   ├── mocks/            # Typed frontend-only study data
│   │   ├── pages/
│   │   │   ├── dashboard/    # Authenticated workspace pages
│   │   │   └── landing/      # Public landing page
│   │   ├── types/            # Shared TypeScript types
│   │   ├── App.tsx           # Lazy-loaded route definitions
│   │   └── index.css         # Global tokens and accessibility defaults
│   └── package.json
├── context/                  # Product, architecture, UI, and progress notes
└── README.md
```

## 🚀 Getting started

### Prerequisites

- Node.js 20+ recommended
- npm 10+ recommended

### Installation

```bash
git clone <your-repository-url>
cd recall-ai-study-coach/client
npm install
```

### Local development

```bash
npm run dev
```

Vite will print the local URL in your terminal (usually `http://localhost:5173`).

### Quality checks

```bash
npm run lint
npm run build
```

### Production build

```bash
npm run build
npm run preview
```

The static production files are generated in `client/dist/`.

## 🌐 Deployment

This is a static Vite application and can be deployed to Vercel, Netlify, Cloudflare Pages, or GitHub Pages.

For Vercel

1. Import this repository.
2. Set the root directory to `client`.
3. Use `npm run build` as the build command.
4. Publish the `dist` directory.
5. Configure SPA rewrites so routes such as `/app/dashboard` resolve to `index.html`.

No environment variables or backend services are required for the current demo.

## 🧭 Demo user flow

```text
Landing page
  → Try Recall
  → Dashboard
  → Upload Notes
  → AI Processing (mocked)
  → Study Workspace
  → Summary / Flashcards / Quiz / Knowledge Map
  → Revision Plan
  → AI Tutor
```

All generated content, responses, progress, and study data are served from local mock files.

## 🎨 Design decisions

- **Calm SaaS visual language:** semantic tokens, restrained gradients, rounded surfaces, and soft shadows keep the interface focused.
- **Reusable foundations:** shared layout, button, feedback, card, and feature components reduce inconsistency.
- **Accessibility first:** semantic controls, labelled inputs, focus-visible styles, ARIA feedback, and reduced-motion support are built into the UI.
- **Subtle motion:** Framer Motion is used for fast page, card, drawer, processing, and chat transitions without distracting from learning.
- **Mock-first demo:** local TypeScript data makes every interaction repeatable and reliable for judges.

## 🧩 Challenges solved

- Keeping the React Flow graph contained and centered across screen sizes
- Preserving a coherent mobile experience with a responsive sidebar and dense study interfaces
- Simulating AI/upload latency with progress, typing, success, and loading states—without network dependencies
- Connecting dashboard, study, quiz, map, revision, and tutor views to a single mock-data-driven experience
- Reducing initial load cost through route-level code splitting

## 🛣️ Future roadmap

- Persist notes, learning progress, and user preferences
- Connect real document parsing and AI study-material generation
- Add adaptive quiz difficulty and spaced-repetition scheduling
- Enable search across materials and conversations
- Add authentication and multi-device sync
- Expand analytics, export options, and collaborative study spaces

## 🎬 Demo

**Live demo: https://www.loom.com/share/bff2aaab56504bbf9bc346ba100e3584 **

## 🐙 GitHub

For hackathon collaboration:

- Use issues to track polish items and follow-up ideas.
- Open focused pull requests with screenshots for UI changes.
- Run `npm run lint` and `npm run build` before opening a pull request.

## 📄 License

No license file is currently included in this repository. Add a `LICENSE` file (for example, MIT) before distributing or open-sourcing the project.

---

Made with care for a more focused way to learn. ✨
