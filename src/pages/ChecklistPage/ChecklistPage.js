import ChecklistCard from "../../components/ChecklistCard/ChecklistCard";

import styles from "./ChecklistPage.module.css";

const ChecklistPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["checklist-container"]}>
        <div className={styles["content-container"]}>
          <div className={styles["header-container"]}>
            <h1 className={styles.heading1}>Checklist</h1>
            <div>
              <button className={styles["add-btn"]}>&#43;</button>
            </div>
          </div>
          <ChecklistCard />
        </div>
      </div>
    </div>
  );
};

export default ChecklistPage;
