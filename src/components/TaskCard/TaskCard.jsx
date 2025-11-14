import styles from "./TaskCard.module.css";
import TaskCardInformation from "../TaskCardInformation";
import DeleteTaskButton from "@components/DeleteTaskButton";
import TaskCardButtonsHolder from "../TaskCardButtonsHolder";
export const TaskCard = (task) => {
  return (
    <div>
      <div className={styles.task_card_container}>
        <div className={styles.task__card}>
          <TaskCardInformation task={task}></TaskCardInformation>
          <DeleteTaskButton taskID={task.id}></DeleteTaskButton>
        </div>
      </div>
      <TaskCardButtonsHolder></TaskCardButtonsHolder>
    </div>
  );
};
