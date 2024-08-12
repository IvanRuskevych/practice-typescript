// src/TodoList.jsx
import { FC } from "react";
import { Todo } from "./types";
import TodoItem from "./TodoItem";

interface TodoListProps {
  todos: Todo[];
  onDelete: (id: number) => void;
}

const TodoList: FC<TodoListProps> = ({ todos, onDelete }) => {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
      ))}
    </ul>
  );
};

export default TodoList;
