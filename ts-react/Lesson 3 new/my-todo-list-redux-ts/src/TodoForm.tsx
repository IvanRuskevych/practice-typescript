import { ChangeEvent, FC, FormEvent, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./redux/todoSlice.ts";

const TodoForm: FC = () => {
  const dispatch = useDispatch();

  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(addTodo(newTask));
    setNewTask("");
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.stopPropagation();
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        onChange={handleOnChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
