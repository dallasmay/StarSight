import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";

import styles from "./AddNote.module.css";

const AddNote = (props) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");
  const userId = useSelector((state) => state.userId);

  const newNoteSubmitHandler = (evt) => {
    evt.preventDefault();

    const noteBody = {
      userId,
      title,
      note,
    };

    axios.post("http://localhost:4000/notes", noteBody).then((res) => {
      props.addNote(res.data[0][0]);
      evt.target.reset();
      props.toggleForm();
    }).catch((err) => console.log(err));
  };

  return (
    <div className={props.formVisibility ? styles.card : styles["not-visible"]}>
      <div className={styles["form-flex-container"]}>
        <form onSubmit={newNoteSubmitHandler}>
          <input
            type="text"
            id="body-name"
            className={styles["title-input"]}
            placeholder="Title"
            onChange={(evt) => setTitle(evt.target.value)}
          />
          <textarea
            type="text"
            className={styles["note-input"]}
            placeholder="Note"
            onChange={(evt) => setNote(evt.target.value)}
          />
          <div className="flex-container-justify-center">
            <button className={styles["submit-btn"]} type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddNote;
