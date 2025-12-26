import ConfirmButtons from "@components/ConfirmButtons";
import AddTaskForm from "@components/AddTaskForm";
import Task from "@entities/task";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks.length === 0) return;

    const tasksArray = JSON.parse(savedTasks);
    const taskInstances = tasksArray.map((item) => Task.objectToTask(item));
    setTasks(taskInstances);
    if (tasksArray.length > 0) {
      const maxId = Math.max(...tasksArray.map((task) => task.id));
      Task.setNextId(maxId);
    }
  }, []);

  useEffect(() => {
    if (tasks.length === 0) return;
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  const handleDeleteTask = (taskToBeDeleted) => {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToBeDeleted.id)
    );
  };

  return (
    <main>
      <TaskList tasks={tasks} onDeleteTask={handleDeleteTask} />
      <AddTaskForm onAddTask={handleAddTask} />
    </main>
  );
}

export default App;
