import NoTasksCard from "@components/NoTasksCard";
import TaskCard from "@components/TaskCard";
import styles from "./TaskList.module.css";

export const TaskList = ({ tasks, onDeleteTask }) => {
  if (!tasks || tasks.length === 0) {
    return <NoTasksCard />;
  }
  if (tasks)
    return (
      <div className={styles.tasks}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} onDeleteTask={onDeleteTask} />
        ))}
      </div>
    );
};
