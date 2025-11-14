import styles from "./AddTaskButton.module.css";
import unionImage from "@assets/img/union.svg";

export const DeleteTaskButton = ({ taskID }) => {
  return (
    <button className={styles.delete__task__button}>
      <img img src={unionImage} alt="Удалить" />
    </button>
  );
};
