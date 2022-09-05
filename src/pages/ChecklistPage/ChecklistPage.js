import { useState } from "react";

import ChecklistCard from "../../components/Checklist Components/ChecklistCard/ChecklistCard";
import AddChecklistCard from "../../components/Checklist Components/AddChecklistCard/AddChecklistCard";

import styles from "./ChecklistPage.module.css";

const ChecklistPage = () => {
  const [formIsVisible, setFormIsVisible] = useState(false);
  const [checklistItems, setChecklistItems] = useState([
    { name: "Andromeda", type: "Galaxy", isChecked: true },
    { name: "Orion", type: "Star", isChecked: false },
    { name: "Sirius", type: "Star", isChecked: true },
  ]);

  const addBtnClickHandler = () => {
    if (formIsVisible) {
      setFormIsVisible(false);
    } else {
      setFormIsVisible(true);
    }
  };

  const setItemsArr = (newItem) => {
    setChecklistItems((prevState) => {
      return [...prevState, newItem];
    });
  };

  const setFormVisibility = (bool) => {
    setFormIsVisible(bool);
  }

  return (
    <div className={styles.container}>
      <div className={styles["checklist-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles["header-container"]}>
            <h1 className={styles.heading1}>Checklist</h1>
            <div>
              <button
                className={styles["add-btn"]}
                onClick={addBtnClickHandler}
              >
                &#43;
              </button>
            </div>
          </div>
          <AddChecklistCard
            isVisible={formIsVisible}
            setItemsArr={setItemsArr}
            setFormVisibility={setFormVisibility}
          />
          {checklistItems.map((ele) => {
            return (
              <ChecklistCard
                name={ele.name}
                type={ele.type}
                isChecked={ele.isChecked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;
