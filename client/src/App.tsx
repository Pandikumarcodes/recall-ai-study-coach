import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { LandingPage } from "./pages/landing/LandingPage";
import { DashboardPage } from "./pages/dashboard/DashboardPage";
import { NotesPage } from "./pages/dashboard/NotesPage";
import { AITutorPage } from "./pages/dashboard/AITutorPage";
import { StudyPage } from "./pages/dashboard/StudyPage";
import { RevisionPlanPage } from "./pages/dashboard/RevisionPlanPage";
import { KnowledgeMapPage } from "./pages/dashboard/KnowledgeMapPage";
import { ProfilePage } from "./pages/dashboard/ProfilePage";
import { SettingsPage } from "./pages/dashboard/SettingsPage";
import { QuizPage } from "./pages/dashboard/QuizPage";

export default function App() {
  return (
    <Routes>
      <Route element={<LandingPage />} path="/" />
      <Route element={<AppLayout />} path="/app">
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route element={<DashboardPage />} path="dashboard" />
        <Route element={<NotesPage />} path="notes" />
        <Route element={<AITutorPage />} path="ai-tutor" />
        <Route element={<StudyPage />} path="study" />
        <Route element={<QuizPage />} path="quiz" />
        <Route element={<KnowledgeMapPage />} path="knowledge-map" />
        <Route element={<RevisionPlanPage />} path="revision-plan" />
        <Route element={<ProfilePage />} path="profile" />
        <Route element={<SettingsPage />} path="settings" />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
