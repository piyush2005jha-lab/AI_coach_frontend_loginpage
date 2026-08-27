import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/login/Login";
import Dashboard from "./pages/dashboard/Dashboard";
import Interview from "./pages/interview/Interview";
import Analytics from "./pages/analytics/Analytics";
import MockHistory from "./pages/MockHistory/MockHistory";
import AIInsights from "./pages/AIInsights/AIInsights";
import Resources from "./pages/Resources/Resources";
import Settings from "./pages/Settings/Settings";
import Achievements from "./pages/Achievements/Achievements";


function ProtectedRoute({ children }) {
  const isLoggedIn =
    localStorage.getItem("isLoggedIn") === "true";

  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/login" replace />
  );
}


export default function App() {
  return (
    <Routes>

      {/* =========================
          DEFAULT
      ========================= */}

      <Route
        path="/"
        element={<Navigate to="/login" replace />}
      />


      {/* =========================
          LOGIN
      ========================= */}

      <Route
        path="/login"
        element={<Login />}
      />


      {/* =========================
          DASHBOARD
      ========================= */}

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />


      {/* =========================
          INTERVIEW
      ========================= */}

      <Route
        path="/interview"
        element={
          <ProtectedRoute>
            <Interview />
          </ProtectedRoute>
        }
      />


      {/* =========================
          ANALYTICS
      ========================= */}

      <Route
        path="/analytics"
        element={
          <ProtectedRoute>
            <Analytics />
          </ProtectedRoute>
        }
      />


      {/* =========================
          MOCK HISTORY
      ========================= */}

      <Route
        path="/mock-history"
        element={
          <ProtectedRoute>
            <MockHistory />
          </ProtectedRoute>
        }
      />


      {/* =========================
          AI INSIGHTS
      ========================= */}

      <Route
        path="/ai-insights"
        element={
          <ProtectedRoute>
            <AIInsights />
          </ProtectedRoute>
        }
      />


      {/* =========================
          RESOURCES
      ========================= */}

      <Route
        path="/resources"
        element={
          <ProtectedRoute>
            <Resources />
          </ProtectedRoute>
        }
      />


      {/* =========================
          SETTINGS
      ========================= */}

      <Route
        path="/settings"
        element={
          <ProtectedRoute>
            <Settings />
          </ProtectedRoute>
        }
      />


      {/* =========================
          ACHIEVEMENTS
      ========================= */}

      <Route
        path="/achievements"
        element={
          <ProtectedRoute>
            <Achievements />
          </ProtectedRoute>
        }
      />


      {/* =========================
          FALLBACK
      ========================= */}

      <Route
        path="*"
        element={<Navigate to="/login" replace />}
      />

    </Routes>
  );
}