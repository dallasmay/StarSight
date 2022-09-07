import { useState } from "react";

import AddNote from "../../components/Notes Components/AddNote/AddNote";
import NoteCard from "../../components/Notes Components/NoteCard/NoteCard";

import styles from "./NotesPage.module.css";

const NotesPage = () => {
  const [formVisibility, setFormVisibility] = useState(false);
  const [testText, setTestText] = useState(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            explicabo amet tempore, cumque neque.`)
  const [testText1, setTestText1] =
    useState(`Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            explicabo amet tempore, cumque neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            explicabo amet tempore, cumque neque.Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
            explicabo amet tempore, cumque neque.`);

  const toggleFormHandler = () => {
    setFormVisibility((prevState) => {
      return !prevState;
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles["checklist-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles["header-container"]}>
            <h1 className={styles.heading1}>Notes</h1>
            <div>
              <button className={styles["add-btn"]} onClick={toggleFormHandler}>
                &#43;
              </button>
            </div>
          </div>
          <AddNote formVisibility={formVisibility} />
          <NoteCard text={testText}/>
          <NoteCard text1={testText1}/>
          <NoteCard />
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
