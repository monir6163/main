import { useEffect, useState } from "react";
import {
  Route,
  BrowserRouter as Router,
  Routes,
  useLocation,
} from "react-router-dom";
import AnimatedCursor from "./components/AnimatedCursor";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import ProjectDetail from "./pages/ProjectDetail";

function AppContent() {
  const location = useLocation();
  const [darkMode, setDarkMode] = useState(true);
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      <AnimatedCursor />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
        <Route path="/project/:id" element={<ProjectDetail />} />
      </Routes>
      {/* <AppStore isOpen={isStoreOpen} setIsOpen={setIsStoreOpen} /> */}
    </div>
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.documentElement.classList.add("dark");
    const timer = setTimeout(() => {
      setLoading(false);
    }, 800);
    return () => clearTimeout(timer);
  }, []);

  return <Router>{loading ? <SplashScreen /> : <AppContent />}</Router>;
}
