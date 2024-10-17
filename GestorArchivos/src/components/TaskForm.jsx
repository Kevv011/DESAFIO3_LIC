import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskForm = ({ addTask }) => {
  const [taskText, setTaskText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim()) {
      addTask({ text: taskText, completed: false });
      setTaskText("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex flex-column justify-content-center">
      <input
        className="form-control text-center mt-3"
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Nueva tarea..."/>
      <button type="submit" className="btn btn-danger mt-3">Agregar</button>
    </form>
  );
};

export default TaskForm;
