import { Link } from "react-router-dom";

import styles from "../LandingPage/LandingPage.module.css"

const LandingPage = () => {
  return (
    <>
      <div className={styles.container}>
        <div>
          <div className={styles["main-container"]}>
            <h1 className={styles.heading}>ASTRONOMY</h1>
          </div>
          <div className={styles["main-container"]}>
            <span className={styles.line}></span>
            <h2 className={styles["heading-2"]}>MADE EASY</h2>
            <span className={styles.line}></span>
          </div>
          <div className={styles["main-container"]}>
            <Link to="/explore">
              <button className={styles.button}>EXPLORE</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
