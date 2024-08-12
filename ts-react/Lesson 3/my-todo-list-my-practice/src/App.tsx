// src/App.jsx
// import { useState } from "react";
// import { RootState } from "./redux/store.ts";
import TodoItem from "./TodoItem.tsx";
import AddTodoForm from "./AddTodoForm.tsx";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { todosSelector } from "./redux/selectors.ts";
import { addTodo, deleteTodo } from "./redux/todoSlice.ts";

// export interface Task {
//   id: number;
//   text: string;
// }

function App() {
  // const [todos, setTodos] = useState<Task[]>([]);

  // const handleAddTodo = (text: string) => {
  //   const newTodo = { id: Date.now(), text };
  //   setTodos([...todos, newTodo]);
  // };
  //
  // const handleDeleteTodo = (id: number) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  // };

  // const todos = useSelector((state: RootState) => state.todos);
  const todos = useSelector(todosSelector);
  const dispatch = useDispatch();

  const handleAddTodo = (text: string) => {
    dispatch(addTodo(text));
  };

  const handleDeleteTodo = (id: number) => {
    dispatch(deleteTodo(id));
  };

  return (
    <div className="App">
      <h1>Todo List</h1>
      <AddTodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
