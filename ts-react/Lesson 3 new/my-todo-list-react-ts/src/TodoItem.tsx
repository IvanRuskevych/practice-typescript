// src/TodoItem.jsx
import { FC } from "react";
import { Todo } from "./types";

interface TodoItemProps {
  todo: Todo;
  onDelete: (id: number) => void;
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      {todo.text}
      <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
