import styles from "./ChecklistCard.module.css";

const ChecklistCard = (props) => {
  return (
    <div className={styles.card}>
      <div
        className={
          props.isChecked ? styles["card-checked"] : styles["card-not-checked"]
        }
      >
        <h2 className={styles.heading2}>{props.name}</h2>
        <h3 className={styles.heading3}>{props.type}</h3>
      </div>
    </div>
  );
};

export default ChecklistCard;
