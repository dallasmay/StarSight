import { useState } from "react";
import { useSelector } from "react-redux";

import axios from "axios";

import styles from "./AddChecklistCard.module.css";

const AddChecklistCard = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [isChecked, setIsChecked] = useState(null);
  const userId = useSelector((state) => state.userId);

  const addChecklistCardHandler = (evt) => {
    evt.preventDefault();
    let checklistBody = {
      userId,
      name,
      type,
      ischecked: isChecked,
    };
    axios.post("http://localhost:4000/checklist", checklistBody).then((res) => {
      props.setItemsArr(res.data[0][0]);
      evt.target.reset();
    });
    props.setFormVisibility(false);
  };

  return (
    <div className={props.isVisible ? styles.card : styles["not-visible"]}>
      <div className={styles["form-flex-container"]}>
        <form onSubmit={addChecklistCardHandler}>
          <input
            type="text"
            id="body-name"
            className={styles["name-input"]}
            placeholder="Name"
            onChange={(evt) => setName(evt.target.value)}
          />
          <div className="flex-container-justify-center">
            <label htmlFor="body-type" className={styles.label}>
              Type:
            </label>
            <select
              name=""
              id="body-type"
              onChange={(evt) => evt.target.value === "null" ? setType(null) : setType(evt.target.value)}
            >
              <option value="null">Select</option>
              <option value="Planet">Planet</option>
              <option value="Star">Star</option>
              <option value="Galaxy">Galaxy</option>
              <option value="Comet">Comet</option>
              <option value="Solar">Solar</option>
              <option value="Lunar">Lunar</option>
            </select>
          </div>
          <p className={styles["seen-q"]}>Have you seen this yet?</p>
          <div className="flex-container-justify-center">
            <label htmlFor="radio-yes" className={styles["radio-label"]}>
              Yes
            </label>
            <input
              type="radio"
              id="radio-yes"
              name="seen"
              className={styles.radio}
              onChange={(evt) => {
                if (evt.target.id === "radio-yes") {
                  setIsChecked(true);
                }
              }}
            />
            <label htmlFor="radio-no" className={styles["radio-label"]}>
              No
            </label>
            <input
              type="radio"
              id="radio-no"
              name="seen"
              className={styles.radio}
              onChange={(evt) => {
                if (evt.target.id === "radio-no") {
                  setIsChecked(false);
                }
              }}
            />
          </div>
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

export default AddChecklistCard;
