import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import AddNote from "../../components/Notes Components/AddNote/AddNote";
import NoteCard from "../../components/Notes Components/NoteCard/NoteCard";

import styles from "./NotesPage.module.css";

const NotesPage = () => {

  const tempCard = [
    {
      title: "Title",
      note: "This a note that i'm writing so I have copy in my card lorem ipsum bippity boppity tripsum blipsum missum sans e plurbus unum",
      date: "2022-08-09",
    },
    {
      title: "Title",
      note: "This a note that i'm writing so I have copy in my card lorem ipsum bippity boppity tripsum blipsum missum sans e plurbus unum",
      date: "2022-08-09",
    },
  ];

  const [formVisibility, setFormVisibility] = useState(false);
  const [notesList, setNotesList] = useState(tempCard);
  const userId = useSelector((state) => state.userId);

  const toggleFormHandler = () => {
    setFormVisibility((prevState) => {
      return !prevState;
    });
  };

  useEffect(() => {
    const getItemsBody = {
      userId,
    };

    // axios
    //   .post("http://localhost:4000/notes-items", getItemsBody)
    //   .then((res) => {
    //     setNotesList(res.data[0]);
    //   });
  }, []);

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
          <AddNote
            formVisibility={formVisibility}
            toggleForm={toggleFormHandler}
          />
          {notesList.map((ele) => {
            return <NoteCard key={ele.id} noteId={ele.id} title={ele.title} note={ele.note} date={ele.date} />
          })}
        </div>
      </div>
    </div>
  );
};

export default NotesPage;
