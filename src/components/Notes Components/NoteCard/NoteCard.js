import styles from "./NoteCard.module.css";

const NoteCard = (props) => {
    return (
      <div className={styles.card}>
        <div className={styles["card-checked"]}>
          <h3 className={styles.date}>{props.date}</h3>
          <button className={styles["delete-btn"]}>&times;</button>
          <div className={styles.flexTest}>
            <h2 className={styles.heading2}>{props.title}</h2>
          </div>
          <p className={styles["note-text"]}>{props.note}</p>
        </div>
      </div>
    );
}

export default NoteCard;