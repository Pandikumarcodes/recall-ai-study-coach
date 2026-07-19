import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ErrorBoundary } from "./components/feedback/ErrorBoundary";
import { PageLoader } from "./components/feedback/PageLoader";
import { AppLayout } from "./components/layout/AppLayout";

const LandingPage = lazy(() => import("./pages/landing/LandingPage").then(({ LandingPage: Page }) => ({ default: Page })));
const DashboardPage = lazy(() => import("./pages/dashboard/DashboardPage").then(({ DashboardPage: Page }) => ({ default: Page })));
const NotesPage = lazy(() => import("./pages/dashboard/NotesPage").then(({ NotesPage: Page }) => ({ default: Page })));
const ProcessingPage = lazy(() => import("./pages/dashboard/ProcessingPage").then(({ ProcessingPage: Page }) => ({ default: Page })));
const AITutorPage = lazy(() => import("./pages/dashboard/AITutorPage").then(({ AITutorPage: Page }) => ({ default: Page })));
const StudyPage = lazy(() => import("./pages/dashboard/StudyPage").then(({ StudyPage: Page }) => ({ default: Page })));
const RevisionPlanPage = lazy(() => import("./pages/dashboard/RevisionPlanPage").then(({ RevisionPlanPage: Page }) => ({ default: Page })));
const KnowledgeMapPage = lazy(() => import("./pages/dashboard/KnowledgeMapPage").then(({ KnowledgeMapPage: Page }) => ({ default: Page })));
const ProfilePage = lazy(() => import("./pages/dashboard/ProfilePage").then(({ ProfilePage: Page }) => ({ default: Page })));
const SettingsPage = lazy(() => import("./pages/dashboard/SettingsPage").then(({ SettingsPage: Page }) => ({ default: Page })));
const QuizPage = lazy(() => import("./pages/dashboard/QuizPage").then(({ QuizPage: Page }) => ({ default: Page })));

export default function App() {
  return <ErrorBoundary><Suspense fallback={<PageLoader />}><Routes><Route element={<LandingPage />} path="/" /><Route element={<AppLayout />} path="/app"><Route index element={<Navigate replace to="dashboard" />} /><Route element={<DashboardPage />} path="dashboard" /><Route element={<NotesPage />} path="notes" /><Route element={<ProcessingPage />} path="processing" /><Route element={<AITutorPage />} path="ai-tutor" /><Route element={<StudyPage />} path="study" /><Route element={<QuizPage />} path="quiz" /><Route element={<KnowledgeMapPage />} path="knowledge-map" /><Route element={<RevisionPlanPage />} path="revision-plan" /><Route element={<ProfilePage />} path="profile" /><Route element={<SettingsPage />} path="settings" /></Route><Route element={<Navigate replace to="/app/dashboard" />} path="/dashboard" /><Route element={<Navigate replace to="/app/notes" />} path="/upload" /><Route element={<Navigate replace to="/app/study" />} path="/summary" /><Route element={<Navigate replace to="/app/study" />} path="/flashcards" /><Route element={<Navigate replace to="/app/quiz" />} path="/quiz" /><Route element={<Navigate replace to="/app/knowledge-map" />} path="/knowledge-map" /><Route element={<Navigate replace to="/app/revision-plan" />} path="/revision-plan" /><Route element={<Navigate replace to="/app/ai-tutor" />} path="/tutor" /><Route element={<Navigate replace to="/app/settings" />} path="/settings" /><Route element={<Navigate replace to="/" />} path="*" /></Routes></Suspense></ErrorBoundary>;
}
