import styles from "./NoteCard.module.css";

const NoteCard = (props) => {
    return (
      <div className={styles.card}>
        <div className={styles["card-checked"]}>
          <div className={styles.flexTest}>
            <h3 className={styles.heading3}>{props.date}</h3>
            <h2 className={styles.heading2}>{props.title}</h2>
            <span className={styles["delete-btn"]}>&times;</span>
          </div>
          <p className={styles["note-text"]}>{props.note}</p>
        </div>
      </div>
    );
}

export default NoteCard;