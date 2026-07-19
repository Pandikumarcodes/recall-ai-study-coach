import { AnimatePresence, motion } from "framer-motion";
import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { Sidebar } from "./Sidebar";
import { TopNavigation } from "./TopNavigation";

export function AppLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  const closeSidebar = () => setIsSidebarOpen(false);
  const toggleSidebar = () => setIsSidebarOpen((currentValue) => !currentValue);

  return (
    <div className="min-h-screen bg-background text-text-primary">
      <div className="fixed inset-y-0 left-0 z-20 hidden w-64 lg:block">
        <Sidebar />
      </div>

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.button
              aria-label="Close navigation"
              className="fixed inset-0 z-20 bg-text-primary/30 lg:hidden"
              initial={{ opacity: 0 }}
              onClick={closeSidebar}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              type="button"
            />
            <motion.div
              className="fixed inset-y-0 left-0 z-30 w-72 lg:hidden"
              id="mobile-sidebar"
              initial={{ x: -288 }}
              animate={{ x: 0 }}
              exit={{ x: -288 }}
              transition={{ duration: 0.2 }}
            >
              <Sidebar onNavigate={closeSidebar} />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <div className="min-h-screen lg:pl-64">
        <TopNavigation
          isSidebarOpen={isSidebarOpen}
          onSidebarToggle={toggleSidebar}
        />
        <main id="main-content" tabIndex={-1}>
          <AnimatePresence mode="wait">
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              key={location.pathname}
              transition={{ duration: 0.18 }}
            >
              <Outlet />
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
