import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import Button from "../../components/Button/Button";

import styles from "./TrackPage.module.css";

const TrackPage = () => {
  const firstName = useSelector((state) => state.name);

  return (
    <div className={styles.container}>
      <div className={styles["content-container"]}>
        <h1 className={styles.heading1}>{`Welcome back, ${firstName}!`}</h1>
        <div className={styles["track-card-container"]}>
          <div className={`${styles["track-card"]} ${styles.checklist}`}>
            <div className={styles["text-container"]}>
              <h2 className={styles.heading2}>Checklist</h2>
              <p className={styles["track-card-description"]}>
                Keep track of everything you've spotted and want to spot.
                Planets, stars, comets, eclipses and galaxies
              </p>
            </div>
            <div className="flex-container-justify-center">
              <Link to="/checklist">
                <button className={styles["track-btn"]}>View Checklist</button>
              </Link>
            </div>
          </div>
          <div className={`${styles["track-card"]} ${styles.events}`}>
            <div className={styles["text-container"]}>
              <h2 className={styles.heading2}>Upcoming Events</h2>
              <p className={styles["track-card-description"]}>
                You have no upcoming events
              </p>
            </div>
            <div className="flex-container-justify-center">
              <button className={styles["track-btn"]}>
                Browse Upcoming Events
              </button>
            </div>
          </div>
          <div className={`${styles["track-card"]} ${styles.notes}`}>
            <div className={styles["text-container"]}>
              <h2 className={styles.heading2}>Notes</h2>
              <p className={styles["track-card-description"]}>
                Need to remember something astronomy related? Write it down
                here!
              </p>
            </div>
            <div className="flex-container-justify-center">
              <Link to="/notes">
                <button className={styles["track-btn"]}>View Notes</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
