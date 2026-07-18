import { Routes, Route, Navigate } from "react-router-dom";
// import { LandingPage } from "./pages/LandingPage";
import { AppLayout } from "./components/layout/AppLayout";
import { DashboardHome } from "./pages/DashboardHome";
import { NotesPage } from "./pages/NotesPage";

export default function App() {
  return (
    <Routes>
      {/* Public */}
      {/* <Route path="/" element={<LandingPage />} /> */}

      {/* Authenticated App */}
      <Route element={<AppLayout />}>
        <Route path="/dashboard" element={<DashboardHome />} />
        <Route path="/notes" element={<NotesPage />} />
      </Route>

      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
