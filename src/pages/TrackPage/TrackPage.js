import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "./TrackPage.module.css";

const TrackPage = () => {
  const firstName = useSelector((state) => state.name);

  return (
    <div className={styles.container}>
      <div className={styles["content-container"]}>
        <h1 className={styles.heading1}>{`Welcome back, ${firstName}!`}</h1>
        <div className={styles["track-card-container"]}>
          <div className={`${styles["track-card"]} ${styles.checklist}`}>
            <h2 className={styles.heading2}>Checklist</h2>
            <p>
              Keep track of everything you've spotted and want to spot. Planets,
              stars, comets, eclipses and galaxies
            </p>
            <Link to="/checklist">
              <button>View Checklist</button>
            </Link>
          </div>
          <div className={`${styles["track-card"]} ${styles.events}`}>
            <h2 className={styles.heading2}>Upcoming Events</h2>
            <p>You have no upcoming events</p>
            <button>Browse Upcoming Events</button>
          </div>
          <div className={`${styles["track-card"]} ${styles.notes}`}>
            <h2 className={styles.heading2}>Notes</h2>
            <button>View Notes</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
