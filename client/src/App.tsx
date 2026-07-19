import { Routes, Route, Navigate } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import { DashboardHome } from "./pages/DashboardHome";
import { Features } from "./components/landing/Features";
import { Footer } from "./components/landing/Footer";
import { Hero } from "./components/landing/Hero";
import { HowItWorks } from "./components/landing/HowItWorks";
import { Navbar } from "./components/landing/Navbar";
import { NotesPage } from "./pages/NotesPage";
import { ProcessingPage } from "./pages/ProcessingPage";
import { StudyPage } from "./pages/StudyPage";
import { RevisionPlanPage } from "./pages/RevisionPlanPage";
import { KnowledgeMapPage } from "./pages/KnowledgeMapPage";
import { QuizPanel } from "./components/study/QuizPanel";

export default function App() {
  return (
    <Routes>
      <Route
        element={
          <>
            <Navbar />
            <main>
              <Hero />
              <Features />
              <HowItWorks />
            </main>
            <Footer />
          </>
        }
        path="/"
      />
      <Route element={<AppLayout />} path="/app">
        <Route index element={<Navigate replace to="dashboard" />} />
        <Route element={<DashboardHome />} path="dashboard" />
        <Route element={<NotesPage />} path="notes" />
        <Route element={<ProcessingPage />} path="processing" />
        <Route element={<StudyPage />} path="study" />
        <Route element={<QuizPanel />} path="quiz" />
        <Route element={<KnowledgeMapPage />} path="knowledge-map" />
        <Route element={<RevisionPlanPage />} path="revision-plan" />
        <Route element={<DashboardHome />} path="settings" />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
