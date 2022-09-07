import styles from "./AddNote.module.css";

const AddNote = (props) => {
    return (
      <div
        className={props.formVisibility ? styles.card : styles["not-visible"]}
      >
        <div className={styles["form-flex-container"]}>
          <form>
            <input
              type="text"
              id="body-name"
              className={styles["title-input"]}
              placeholder="Title"
            />
            <textarea type="text" className={styles["note-input"]} placeholder="Note" />
            <div className="flex-container-justify-center">
              <button className={styles["submit-btn"]} type="submit">
                Add
              </button>
            </div>
          </form>
        </div>
      </div>
    );
}

export default AddNote;