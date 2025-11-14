import styles from "./ConfirmButtons.module.css";

export const ConfirmButtons = ({
  onCancel,
  onConfirm,
  cancelText = "Отменить",
  confirmText = "Сохранить",
}) => {
  return (
    <div className={styles.modal__button_container}>
      <button onClick={onCancel} сlassName={styles.modal__button}>
        {cancelText}
      </button>
      <button onClick={onConfirm} className={styles.modal__button}>
        {confirmText}
      </button>
    </div>
  );
};
