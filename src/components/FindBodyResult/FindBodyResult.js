import styles from "./FindBodyResult.module.css";
import { ReactComponent as Compass } from "../../components/SVG/Compass.svg";
import { ReactComponent as Altitude } from "../../components/SVG/Altitude.svg";

const FindBodyResult = (props) => {
  const azimuth = props.bodyPosition.azimuth.degrees;
  const altitude = props.bodyPosition.altitude.degrees;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading2}>Results</h2>
      <div className={styles["result-card-flex-container"]}>
        <div>
          <h3 className={styles.heading3}>Azimuth:</h3>
          <p className={styles.degrees}>{azimuth}&#176;</p>
          <p className={styles["result-description"]}>
            The azimuth tells you the direction to look based off of the
            cardinal directions. Orient yourself to the north and then use the
            given degrees to find where to face. Values range from 0&#176; -
            360&#176; following the degrees of a circle. North is
            0&#176;/360&#176;, East is 90&#176;, South is 180&#176; and so on.
            You can use the chart to the right to help guide you.
          </p>
        </div>
        <div className={styles["compass-svg-container"]}>
          <Compass className={styles["compass-svg"]} />
        </div>
      </div>
      <div className={styles["result-card-flex-container"]}>
        <div>
          <h3 className={styles.heading3}>Altitude:</h3>
          <p className={styles.degrees}>{altitude}&#176;</p>
          <p className={styles["result-description"]}>
            The altitude tells you how high to look for your target. It also
            uses degrees, and ranges from 0&#176; - 90&#176;. 0&#176; is the
            horizon line and 90&#176; is straight up. You can use the chart to
            the right to help guide you.{" "}
            <strong>
              **If the altitude is negative, you won't be able to see your
              target from where you're at! Try again at a different time!**
            </strong>
          </p>
        </div>
        <div className={styles["altitude-svg-container"]}>
          <Altitude className={styles["altitude-svg"]} />
        </div>
      </div>
    </div>
  );
};

export default FindBodyResult;
