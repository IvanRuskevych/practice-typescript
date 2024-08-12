import { ChangeEvent, FC, FormEvent, useState } from "react";

interface AddTodoFormProps {
  onAdd: (text: string) => void;
}

const AddTodoForm: FC<AddTodoFormProps> = ({ onAdd }) => {
  const [newTask, setNewTask] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    onAdd(newTask);
    setNewTask("");
  };

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTask}
        // onChange={(e: ChangeEvent<HTMLInputElement>) =>
        //   setNewTask(e.target.value)
        // }
        onChange={handleOnChange}
        placeholder="Add a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default AddTodoForm;
