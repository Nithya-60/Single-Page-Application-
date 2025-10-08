import React from "react";
import { NavLink } from "react-router-dom";

export default function Sidebar({ user, onLogout }) {
  const links = [
    { to: "/", label: "Dashboard" },
    { to: "/profile", label: "Profile" },
    { to: "/settings", label: "Settings" },
  ];

  return (
    <aside className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white flex flex-col sidebar-scroll p-4">
      <div className="mb-6">
        <div className="text-lg font-bold">Single Page App</div>
        <div className="text-sm opacity-90 mt-1">
          Welcome, {user?.name || "Guest"}
        </div>
      </div>
      <nav className="flex-1">
        {links.map((l) => (
          <NavLink
            key={l.to}
            to={l.to}
            end
            className={({ isActive }) =>
              `block py-2 px-3 rounded mb-1 ${
                isActive ? "bg-white/20" : "hover:bg-white/10"
              }`
            }
          >
            {l.label}
          </NavLink>
        ))}
      </nav>
      <button
        onClick={onLogout}
        className="mt-4 w-full py-2 bg-white text-blue-700 rounded"
      >
        Logout
      </button>
    </aside>
  );
}
