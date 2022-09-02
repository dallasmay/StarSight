import { useState } from "react";

import ChecklistCard from "../../components/Checklist Components/ChecklistCard/ChecklistCard";
import AddChecklistCard from "../../components/Checklist Components/AddChecklistCard/AddChecklistCard";

import styles from "./ChecklistPage.module.css";

const ChecklistPage = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);

  const addBtnClickHandler = () => {
    if (formIsVisible) {
      setFormIsVisible(false);
    } else {
      setFormIsVisible(true);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles["checklist-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles["header-container"]}>
            <h1 className={styles.heading1}>Checklist</h1>
            <div>
              <button className={styles["add-btn"]} onClick={addBtnClickHandler} >&#43;</button>
            </div>
          </div>
          <AddChecklistCard isVisible={formIsVisible}/>
          <ChecklistCard />
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;
