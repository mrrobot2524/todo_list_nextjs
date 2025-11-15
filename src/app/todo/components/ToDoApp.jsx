"use client";

import { useEffect, useState, useMemo } from "react";
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";
import Filter from "./Filter";
import Input from "./UI/Input";

const LOCAL_KEY = "next_todo_v1";

export default function ToDoApp() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [query, setQuery] = useState("");

  useEffect(() => {
    const raw = localStorage.getItem(LOCAL_KEY);
    if (raw) {
      try {
        setTodos(JSON.parse(raw));
      } catch (e) {
        console.error("parse error", e);
      }
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (text) => {
    const t = text.trim();
    if (!t) return;
    const newTodo = { id: Date.now(), text: t, completed: false };
    setTodos(prev => [newTodo, ...prev]);
  };

  const toggleTodo = (id) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(t => t.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(prev => prev.map(t => t.id === id ? { ...t, text: newText } : t));
  };

    //   Filter
    const filteredTodos = useMemo(() => {
        let list = todos;
        if (filter === "active") list = list.filter((t) => !t.completed);
        else if (filter === "completed") list = list.filter((t) => t.completed);

        if (query.trim()) {
            const q = query.trim().toLowerCase();
            list = list.filter((t) => t.text.toLowerCase().includes(q));
        }
        return list;
    }, [todos, filter, query]);
// style={{display:"flex", justifyContent: "space-between", alignItems: "center", gap:12, marginBottom:12}
  return (
    <div>
      <AddTodo onAdd={addTodo} />
      <div className="flex sm:flex-row flex-col flex-wrap lg:flex-nowrap justify-between sm:justify-center items-center gap-12 sm:gap-2 mb-6">
        <Filter value={filter} onChange={setFilter}/>
        <Input placeholder="Поиск..." value={query} onChange={(e) => setQuery(e.target.value)} className="w-full"/>
      </div>
      <TodoList todos={filteredTodos} onToggle={toggleTodo} onDelete={deleteTodo} onEdit={editTodo} />
      <footer className="footer">
        Всего: {todos.length} — Выполнено: {todos.filter(t => t.completed).length}
      </footer>
    </div>
  );
}
