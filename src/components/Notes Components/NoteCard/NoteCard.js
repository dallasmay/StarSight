import styles from "./NoteCard.module.css";

const NoteCard = (props) => {
    return (
      <div className={styles.card}>
        <div className={styles["card-checked"]}>
          <div className={styles.flexTest}>
            <h3 className={styles.heading3}>9/7/2022</h3>
            <h2 className={styles.heading2}>Title</h2>
            <button>Delete</button>
          </div>
          <p className={styles["note-text"]}>{props.text}</p>
          <p className={styles["note-text"]}>{props.text1}</p>
        </div>
      </div>
    );
}

export default NoteCard;