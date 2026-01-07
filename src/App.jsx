import { useState, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Others from "./pages/Others";

import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  useEffect(() => {
    document.body.style.backgroundColor = darkMode ? "#121212" : "#ffffff";
    document.body.style.color = darkMode ? "white" : "black";
  }, [darkMode]);

  return (
    <>
      <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />

      <AnimatePresence mode="wait">
       <Routes location={location} key={location.pathname}>
        <Route path="/" element={<About darkMode={darkMode} />} />
        <Route path="/profile" element={<Profile darkMode={darkMode} />} />
        <Route path="/others" element={<Others darkMode={darkMode} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
       </Routes>
      </AnimatePresence>

      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;
