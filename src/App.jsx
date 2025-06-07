import { useEffect, useState } from "react";
import AddTask from "./components/AddTask";
import Task from "./components/Task";

function App() {
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem("tasks")) || []
  );

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask(title, description) {
    const newTask = {
      id: tasks.length + 1,
      title: title,
      description: description,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  }

  function deleteTask(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(newTasks);
  }

  return (
    <div className="w-screen h-screen bg-slate-900 flex justify-center p-6">
      <div className="w-[600px] space-y-4">
        <h1 className="text-3xl text-slate-100 font-bold text-center">
          Gestor de tarefas
        </h1>
        <AddTask addTask={addTask} />
        <Task tasks={tasks} onTaskClick={onTaskClick} deleteTask={deleteTask} />
      </div>
    </div>
  );
}

export default App;
