import styles from "./DeleteTaskButton.module.css";
import unionImage from "@assets/img/union.svg";

export const DeleteTaskButton = () => {
  return (
    <button className={styles.delete__task__button}>
      <img src={unionImage} alt="Удалить" />
    </button>
  );
};
