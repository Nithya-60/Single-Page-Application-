import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import Settings from "./components/Settings";

function App() {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("spa_user"));
    } catch {
      return null;
    }
  });
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) navigate("/login");
  }, []);

  const handleLogin = (name, email) => {
    const u = { name, email };
    localStorage.setItem("spa_user", JSON.stringify(u));
    setUser(u);
    navigate("/");
  };

  const handleLogout = () => {
    localStorage.removeItem("spa_user");
    setUser(null);
    navigate("/login");
  };

  return (
    <Routes>
      <Route path="/login" element={<Login onLogin={handleLogin} />} />
      <Route path="/" element={<Dashboard user={user} onLogout={handleLogout} />} />
      <Route path="/profile" element={<Profile user={user} onLogout={handleLogout} />} />
      <Route path="/settings" element={<Settings />} />
    </Routes>
  );
}

export default App;
