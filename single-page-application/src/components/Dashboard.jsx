import React from "react";
import Sidebar from "./Sidebar";
import ItemList from "./ItemList";

export default function Dashboard({ user, onLogout }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar user={user} onLogout={onLogout} />
      <main className="flex-1 p-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 card">
            <h2 className="text-xl font-semibold mb-4">Dashboard</h2>
            <ItemList />
          </div>
          <aside className="card">
            <h3 className="font-semibold">Summary</h3>
            <p className="text-sm text-gray-600 mt-2">
              This summary area matches your document layout.
            </p>
          </aside>
        </div>
      </main>
    </div>
  );
}
