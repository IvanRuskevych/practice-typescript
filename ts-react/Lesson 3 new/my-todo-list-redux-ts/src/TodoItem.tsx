// src/TodoItem.jsx
import { FC } from "react";
import { useDispatch } from "react-redux";

import { Todo } from "./types";
import { deleteTodo } from "./redux/todoSlice.ts";

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch();

  const handleDelete = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <li>
      {todo.text}
      <button onClick={() => handleDelete(todo.id)}>Delete</button>
    </li>
  );
};

export default TodoItem;
