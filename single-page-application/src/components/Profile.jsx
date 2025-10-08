import React from "react";

export default function Profile({ user, onLogout }) {
  return (
    <div className="card">
      <h2 className="text-xl font-semibold">Profile</h2>
      <p className="mt-2">
        Name: <strong>{user?.name}</strong>
      </p>
      <p>Email: <strong>{user?.email}</strong></p>
      <button
        onClick={onLogout}
        className="mt-4 px-3 py-1 bg-red-500 text-white rounded"
      >
        Logout
      </button>
    </div>
  );
}
