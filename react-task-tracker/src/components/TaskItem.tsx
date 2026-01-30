import type { Task } from "../types/Task";
import { useTasks } from "../context/TaskContext";

const TaskItem = ({ task }: { task: Task }) => {
  const { toggleTask, deleteTask } = useTasks();

  return (
    <li>
      <span
        onClick={() => toggleTask(task.id)}
         className={task.completed ? "completed" : ""}
      >
        {task.title}
      </span>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
};

export default TaskItem;
