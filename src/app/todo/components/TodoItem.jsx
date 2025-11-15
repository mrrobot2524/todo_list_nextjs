"use client";

import { useState } from "react";
import Button from "./UI/Button";

export default function TodoItem({ todo, index, onToggle, onDelete, onEdit }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(todo.text);

    const save = () => {
        const t = value.trim();
        if (!t) return;
        onEdit(t);
        setIsEditing(false);
    };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
        <span className="bg-sky-600 p-2 rounded-full text-white">{index + 1}</span>
      <input type="checkbox" checked={todo.completed} onChange={onToggle} />
      {!isEditing ? (
        <>
          <span className="text" onDoubleClick={() => setIsEditing(true)}>{todo.text}</span>
          <div className="flex-wrap justify-end actions">
            <Button variant="primary" sizeBtn="md" onClick={() => setIsEditing(true)}>
                Edit
            </Button>
            <Button variant="danger" sizeBtn="md" onClick={onDelete}>
                Delete
            </Button>
          </div>
        </>
      ) : (
        <>
          <input className="edit-input" value={value} onChange={(e) => setValue(e.target.value)} />
          <div className="actions">
            <Button variant="primary" sizeBtn="sm" onClick={save}>
                Save
            </Button>
            <Button variant="danger" sizeBtn="sm" onClick={() => { setIsEditing(false); setValue(todo.text); }}>
                Cancel
            </Button>
          </div>
        </>
      )}
    </li>
  );
}
