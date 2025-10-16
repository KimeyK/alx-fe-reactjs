import { useState } from "react";
import AddTodoForm from "./AddTodoForm";

export default function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Write tests", completed: true },
  ]);

  const addTodo = (text) =>
    setTodos((prev) => [...prev, { id: Date.now(), text, completed: false }]);

  const toggleTodo = (id) =>
    setTodos((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  return (
    <div>
      <h1>Todo List</h1>
      <AddTodoForm onAdd={addTodo} />
      <ul>
        {todos.map((t) => (
          <li key={t.id}>
            <span
              role="button"
              aria-label={`todo-${t.id}`}
              onClick={() => toggleTodo(t.id)}
              style={{
                cursor: "pointer",
                textDecoration: t.completed ? "line-through" : "none",
              }}
            >
              {t.text}
            </span>
            <button aria-label={`delete-${t.id}`} onClick={() => deleteTodo(t.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
