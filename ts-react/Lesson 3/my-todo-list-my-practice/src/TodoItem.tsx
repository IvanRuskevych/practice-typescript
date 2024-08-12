// src/TodoItem.jsx

import { FC } from "react";
// import { Task } from "./App.tsx";
import { Task } from "./redux/todoSlice.ts";

interface TodoItemProps {
  todo: Task;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <p>{todo.text}</p>
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
