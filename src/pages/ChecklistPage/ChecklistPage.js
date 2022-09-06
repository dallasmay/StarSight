import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

import ChecklistCard from "../../components/Checklist Components/ChecklistCard/ChecklistCard";
import AddChecklistCard from "../../components/Checklist Components/AddChecklistCard/AddChecklistCard";

import styles from "./ChecklistPage.module.css";

const ChecklistPage = () => {
  const userId = useSelector((state) => state.userId);

  const [formIsVisible, setFormIsVisible] = useState(false);
  const [checklistItems, setChecklistItems] = useState([]);

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

  useEffect(() => {
    let userIdBody = {
      userId,
    };
    axios
      .post("http://localhost:4000/checklist-items", userIdBody)
      .then((res) => {
        setChecklistItems(res.data[0]);
      });
  }, []);

  const setFormVisibility = (bool) => {
    setFormIsVisible(bool);
  };

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
                isChecked={ele.ischecked}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;
