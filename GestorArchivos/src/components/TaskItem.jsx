import "bootstrap/dist/css/bootstrap.min.css";

const TaskItem = ({ task, deleteTask }) => {
  return (
    <li className="mt-3 text-center">
      {task.text} <button className="btn btn-dark ms-4" onClick={deleteTask}>Eliminar</button>
    </li>
  );
};

export default TaskItem;
