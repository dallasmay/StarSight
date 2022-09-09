import { Link } from "react-router-dom";

import styles from "../ExplorePage/ExplorePage.module.css";

const ExplorePage = () => {
  return (
    <div className={styles["explore-container"]}>
      <div className={styles.test}>
        <div className={styles["explore-card"]}>
          <span className={styles["img-placeholder"]}></span>
          <div className={styles["content-container"]}>
            <h1 className={styles.heading1}>FIND</h1>
            <p className={styles.description}>
              Find the moon, planets, and stars based off of your geographic
              location
            </p>
            <Link to="/find">
              <button className={styles.btn}>START</button>
            </Link>
          </div>
        </div>
        <div className={styles["explore-card"]}>
          <span className={styles["img-placeholder"]}></span>
          <div className={styles["content-container"]}>
            <h1 className={styles.heading1}>TRACK</h1>
            <p className={styles.description}>
              Track your progress as you journey through the stars
            </p>
            <Link to="/track">
              <button className={styles.btn}>START</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;
