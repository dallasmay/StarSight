import styles from "./ChecklistCard.module.css";

const ChecklistCard = () => {
  return (
    <>
      <div className={styles["card-checked"]}>
        <h2 className={styles.heading2}>Andromeda</h2>
        <h3 className={styles.heading3}>Galaxy</h3>
      </div>
      <div className={styles["card-not-checked"]}>
        <h2 className={styles.heading2}>Andromeda</h2>
        <h3 className={styles.heading3}>Galaxy</h3>
      </div>
    </>
  );
};

export default ChecklistCard;
