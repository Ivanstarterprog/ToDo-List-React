import TaskCardButton from "@components/TaskCardButton";
import styles from "./TaskCardButtonsHolder.module.css";
import shareImage from "@assets/img/share.svg";
import informationImage from "@assets/img/information.svg";
import editImage from "@assets/img/edit.svg";

export const TaskCardButtonsHolder = ({ isVisible }) => {
  return (
    <div
      className={`${styles.task__card__buttons_container} ${
        isVisible ? styles.visible : ""
      }`}
    >
      <div>
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
    </div>
  );
};
