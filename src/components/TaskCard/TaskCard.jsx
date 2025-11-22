import styles from "./TaskCard.module.css";
import TaskCardInformation from "@components/TaskCardInformation";
import DeleteTaskButton from "@components/DeleteTaskButton";
import TaskCardButtonsHolder from "@components/TaskCardButtonsHolder";
import { useState, useRef, useEffect } from "react";
export const TaskCard = ({ task }) => {
  const [isButtonsVisible, setIsButtonsVisible] = useState(false);
  const cardRef = useRef(null);

  const handleCardClick = () => {
    setIsButtonsVisible(!isButtonsVisible);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (cardRef.current && !cardRef.current.contains(event.target)) {
        setIsButtonsVisible(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={cardRef}>
      <div className={styles.task_card_container} onClick={handleCardClick}>
        <div className={styles.task__card}>
          <TaskCardInformation task={task}></TaskCardInformation>
          <DeleteTaskButton
            onClick={(e) => e.stopPropagation()}
          ></DeleteTaskButton>
        </div>
      </div>
      <TaskCardButtonsHolder
        isVisible={isButtonsVisible}
      ></TaskCardButtonsHolder>
    </div>
  );
};
