// src/App.jsx
import { useState } from "react";

import { Todo } from "./types";
import TodoList from "./TodoList";
import TodoForm from "./TodoForm.tsx";
import "./App.css";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = (task: string): void => {
    if (task) {
      // Check if the task is not empty
      const newTodo: Todo = { id: Date.now(), text: task };
      setTodos([...todos, newTodo]);
    }
  };

  const handleDeleteTodo = (id: number): void => {
    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm onAdd={handleAddTodo} />
      <TodoList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
}

export default App;
