import { useState } from "react";
import { v4 as uuidv4 } from 'uuid'; // Import uuidv4 from uuid library

const NewTask = ({ tasks, setTasks }) => {
  const [task, setTask] = useState('');
  console.log('Rendering NewTask component');

  const handleSubmit = (event) => {
    event.preventDefault();
    const newTask = { id: uuidv4(), task, completed: false };
    setTasks([...tasks, newTask]);
    setTask('');
  };

  return (
    <>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>
         {/* Task */}
          <input required value={task} onChange={(event) => setTask(event.target.value)} />
        </label>
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};

export default NewTask;
