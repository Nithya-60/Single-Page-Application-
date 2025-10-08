import React, { useState, useEffect } from "react";

export default function ItemForm({ onSave, initial, onCancel }) {
  const [title, setTitle] = useState(initial?.title || "");
  const [description, setDescription] = useState(initial?.description || "");

  useEffect(() => {
    setTitle(initial?.title || "");
    setDescription(initial?.description || "");
  }, [initial]);

  const submit = (e) => {
    e.preventDefault();
    if (!title) return alert("Title required");
    onSave({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <form onSubmit={submit} className="space-y-2">
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
        className="w-full p-2 border rounded"
      />
      <div className="flex gap-2">
        <button className="px-3 py-1 bg-blue-600 text-white rounded">
          Save
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="px-3 py-1 border rounded"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
}
