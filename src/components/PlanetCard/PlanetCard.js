import { Link } from "react-router-dom";

import styles from "./PlanetCard.module.css";
import { ReactComponent as Moon } from "../SVG/Moon.svg";

import Button from "../Button/Button"

const PlanetCard = (props) => {
  return (
    <div className={styles.card}>
      {/* <Moon className={styles.moon} /> */}
      {props.children}
      <h2 className={styles["planet-name"]}>{props.name}</h2>
      <p>
        {props.desc}
      </p>
      <Link to="/find-body">
        <Button>FIND</Button>
      </Link>
    </div>
  );
};

export default PlanetCard;
