import { ChangeEvent, FC, FormEvent, useState } from "react";

interface AddTodoProps {
  onAdd: (task: string) => void;
}

const TodoForm: FC<AddTodoProps> = ({ onAdd }) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTask);
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
