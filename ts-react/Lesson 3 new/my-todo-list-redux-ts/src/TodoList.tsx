// src/TodoList.jsx
import { FC } from "react";
import TodoItem from "./TodoItem";
import { useSelector } from "react-redux";

import { todosSelector } from "./redux/selectors.ts";

const TodoList: FC = () => {
  const todos = useSelector(todosSelector);

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
