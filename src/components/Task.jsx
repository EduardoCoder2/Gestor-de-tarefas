import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

function Task(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const queryParams = new URLSearchParams();
    navigate(`/task?title=${task.title}&description=${task.description}`);
    queryParams.set("title", task.title);
    queryParams.set("description", task.description);
    navigate(`/task?${queryParams.toString()}`);
  }

  return (
    <ul className="space-y-2 bg-slate-950 p-4 rounded-md ">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-1">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={
              "bg-slate-800 cursor-pointer w-full text-white p-2 rounded-md text-left gap-2 flex " +
              (task.completed ? "line-through" : "")
            }
          >
            {task.completed ? (
              <FontAwesomeIcon icon={["fas", "square-check"]} size="xl" />
            ) : (
              <FontAwesomeIcon icon={["far", "square"]} size="xl" />
            )}

            {task.title}
            {/* {task.completed ? "✅" : "❌"} */}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-slate-800 text-white p-2 rounded-md cursor-pointer"
          >
            <FontAwesomeIcon icon={["fas", "arrow-right"]} size="xl" />
          </button>
          <button
            onClick={() => props.deleteTask(task.id)}
            className="bg-slate-800 text-white p-2 rounded-md cursor-pointer"
          >
            <FontAwesomeIcon icon={["fas", "trash"]} size="lg" />
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Task;
