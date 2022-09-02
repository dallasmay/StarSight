import Button from "../../Button/Button";

import styles from "./AddChecklistCard.module.css";

const AddChecklistCard = () => {
  return (
    <div className={styles.card}>
      <div className={styles["form-flex-container"]}>
        <form>
          <input
            type="text"
            id="body-name"
            className={styles["name-input"]}
            placeholder="Name"
          />
          <div className="flex-container-justify-center">
            <label htmlFor="body-type" className={styles.label}>
              Type:
            </label>
            <select name="" id="body-type">
              <option value="planet">Planet</option>
              <option value="planet">Star</option>
              <option value="planet">Galaxy</option>
              <option value="planet">Comet</option>
              <option value="planet">Solar</option>
              <option value="planet">Lunar</option>
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
            />
            <label htmlFor="radio-no" className={styles["radio-label"]}>
              No
            </label>
            <input
              type="radio"
              id="radio-no"
              name="seen"
              className={styles.radio}
            />
          </div>
          <div className="flex-container-justify-center">
            <button className={styles["submit-btn"]} type="submit">
              Add
            </button>
            {/* <Button>Add</Button> */}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddChecklistCard;
