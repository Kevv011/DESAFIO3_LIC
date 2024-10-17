import TaskItem from "./TaskItem";
import "bootstrap/dist/css/bootstrap.min.css";

const TaskList = ({ tasks, deleteTask }) => {
  return (
    <ul className="list-unstyled">
      {tasks.map((task, index) => (
        <TaskItem key={index} task={task} deleteTask={() => deleteTask(index)} />
      ))}
    </ul>
  );
};

export default TaskList;
