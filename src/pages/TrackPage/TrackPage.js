import styles from "./TrackPage.module.css";

const TrackPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles["content-container"]}>
        <h1 className={styles.heading1}>Welcome back, Dallas!</h1>
        <div className={styles["track-card-container"]}>
          <div className={`${styles["track-card"]} ${styles.checklist}`}>
            <h2 className={styles.heading2}>Checklist</h2>
          </div>
          <div className={`${styles["track-card"]} ${styles.events}`}>
            <h2 className={styles.heading2}>Upcoming Events</h2>
            <p>You have no upcoming events</p>
          </div>
          <div className={`${styles["track-card"]} ${styles.notes}`}>
            <h2 className={styles.heading2}>Notes</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackPage;
