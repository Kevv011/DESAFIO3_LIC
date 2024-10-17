import { useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [sessionTaskCount, setSessionTaskCount] = useState(0);

  // Carga de las tareas
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    setTasks(savedTasks);

    // Uso de AJAX para cargar tareas
    fetch("/tasks.json")
      .then((response) => response.json())
      .then((data) => {
        setTasks((prevTasks) => [...prevTasks, ...data.tasks]);
      });

    // cCONTADOR DE TAREAS EN SESIÓN
    const sessionCount = sessionStorage.getItem("taskCount") || 0;
    setSessionTaskCount(parseInt(sessionCount));
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, task];
    setTasks(newTasks);

    // Actualizar LocalStorage  
    localStorage.setItem("tasks", JSON.stringify(newTasks));

    // Actualizar SessionStorage
    const newSessionTaskCount = sessionTaskCount + 1;
    setSessionTaskCount(newSessionTaskCount);
    sessionStorage.setItem("taskCount", newSessionTaskCount);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className="border rounded p-5 bg-white">
      <h1 className="fs-1">Gestión de Tareas</h1>
      <TaskForm addTask={addTask} />
      <TaskList tasks={tasks} deleteTask={deleteTask} />
      <div className="text-center pt-2">
        <hr></hr>
        <p>Total tareas (sesión): {sessionTaskCount}</p>
        <p>Total tareas (local): {tasks.length}</p>
      </div>
    </div>
  );
};

export default App;
