import { TaskCardButton } from "../TaskCardButton/TaskCardButton";
import styles from "./TaskCardButton.module.css";
import shareImage from "@assets/img/share.svg";
import informationImage from "@assets/img/information.svg";
import editImage from "@assets/img/edit.svg";

export const TaskCardButtonsHolder = () => {
  return (
    <div className={styles.task__card__buttons_container}>
      <TaskCardButton
        image={shareImage}
        image_alt="Поделиться"
      ></TaskCardButton>
      <TaskCardButton
        image={informationImage}
        image_alt="Информация о задаче"
      ></TaskCardButton>
      <TaskCardButton
        image={editImage}
        image_alt="Изменить задачу"
      ></TaskCardButton>
    </div>
  );
};
