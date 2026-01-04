import AddTaskForm from "@components/AddTaskForm";
import useConfirmModal from "@hooks/useConfirmModal";
import Task from "@entities/task";
import { useEffect, useState } from "react";
import TaskList from "./components/TaskList";
function App() {
  const [tasks, setTasks] = useState([]);
  const { confirm, ConfirmModal } = useConfirmModal();

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

  const handleDeleteTask = async (taskToBeDeleted) => {
    const confirmed = await confirm();
    if (!confirmed) {
      return;
    }

    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== taskToBeDeleted.id)
    );
  };

  const handleEditTask = async (taskToBeChanged) => {
    const updatedTaskData = await confirm(
      "editModal",
      "",
      taskToBeChanged,
      "Отменить",
      "Сохранить"
    );
    console.log(taskToBeChanged);
    console.log(updatedTaskData);
    if (!updatedTaskData) {
      return;
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskToBeChanged.id ? updatedTaskData : task
      )
    );
  };

  return (
    <main>
      <ConfirmModal />
      <TaskList
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onEditTask={handleEditTask}
      />
      <AddTaskForm onAddTask={handleAddTask} />
    </main>
  );
}

export default App;
