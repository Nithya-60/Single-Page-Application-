import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!name || !email) return alert("Enter name and email");
    onLogin(name, email);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md card">
        <h2 className="text-2xl font-semibold mb-4 text-center text-blue-700">
          Sign In
        </h2>
        <form onSubmit={submit} className="space-y-3">
          <div>
            <label className="block text-sm text-gray-600">Name</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full p-2 border rounded"
            />
          </div>
          <button className="w-full py-2 bg-blue-600 text-white rounded">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
