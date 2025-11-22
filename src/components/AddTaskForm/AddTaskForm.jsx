import { useState } from "react";
import AddTaskButton from "@components/AddTaskButton";
import Task from "@entities/task";
import styles from "./AddTaskForm.module.css";
import calendarImage from "@assets/img/calendar.svg";

export const AddTaskForm = ({ onAddTask }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [deadline, setDeadline] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title.trim()) return;

    const newTask = new Task(title.trim(), description.trim());

    if (deadline) {
      newTask.setDeadLineEnd(deadline);
    }
    onAddTask(newTask);
    setTitle("");
    setDescription("");
  };

  return (
    <form className={styles.add__task} onSubmit={handleSubmit}>
      <div className={styles.add__task__data}>
        <div className={styles.add__task__top_row}>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Заголовок..."
            required
          />
          <button className={styles.add__deadline__button}>
            <img src={calendarImage} alt="" />
          </button>
        </div>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Краткое описание..."
        />
      </div>
      <AddTaskButton></AddTaskButton>
    </form>
  );
};
