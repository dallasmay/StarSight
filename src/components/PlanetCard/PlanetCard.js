import { Link } from "react-router-dom";

import styles from "./PlanetCard.module.css";
import { ReactComponent as Moon } from "../SVG/Moon.svg";

import Button from "../Button/Button"

const PlanetCard = () => {
  return (
    <div className={styles.card}>
      <Moon className={styles.moon} />
      <h2 className={styles["planet-name"]}>MOON</h2>
      <p>
        One of the most well-known celestial bodies, the moon orbits the Earth
        every 27.3 days and is the force behind our ocean tides
      </p>
      <Link to="/">
        <Button>FIND</Button>
      </Link>
    </div>
  );
};

export default PlanetCard;
