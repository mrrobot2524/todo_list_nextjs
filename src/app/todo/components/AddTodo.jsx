"use client";

import { useState } from "react";
import Button from "./UI/Button";
import Input from "./UI/Input";

export default function AddTodo({ onAdd }) {
  const [text, setText] = useState("");

  const submit = (e) => {
    e.preventDefault();
    onAdd(text);
    setText("");
  };

  return (
    <form onSubmit={submit} className="add-form">
        <Input placeholder="Добавить задачу..." value={text} onChange={(e) => setText(e.target.value)} className="w-full"/>
        <Button type="submit" variant="primary" sizeBtn="md">
                Добавить
        </Button>
    </form>
  );
}
