import React, { useState } from "react";
import ItemForm from "./ItemForm";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const [editing, setEditing] = useState(null);

  const add = (data) =>
    setItems((prev) => [{ id: Date.now(), ...data }, ...prev]);
  const update = (id, data) =>
    setItems((prev) => prev.map((it) => (it.id === id ? { ...it, ...data } : it)));
  const remove = (id) => setItems((prev) => prev.filter((it) => it.id !== id));

  return (
    <div>
      <ItemForm onSave={add} />
      <ul className="mt-4 space-y-3">
        {items.map((it) => (
          <li
            key={it.id}
            className="p-3 border rounded flex justify-between items-start bg-white"
          >
            <div>
              <div className="font-semibold">{it.title}</div>
              <div className="text-sm text-gray-600">{it.description}</div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setEditing(it)}
                className="px-2 py-1 border rounded"
              >
                Edit
              </button>
              <button
                onClick={() => remove(it.id)}
                className="px-2 py-1 border rounded text-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {editing && (
        <div className="mt-4 card">
          <h4 className="font-semibold mb-2">Edit Record</h4>
          <ItemForm
            initial={editing}
            onSave={(p) => {
              update(editing.id, p);
              setEditing(null);
            }}
            onCancel={() => setEditing(null)}
          />
        </div>
      )}
    </div>
  );
}
