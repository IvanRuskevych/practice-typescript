// src/App.jsx
import TodoList from "./TodoList";
import TodoForm from "./TodoForm.tsx";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}

export default App;
