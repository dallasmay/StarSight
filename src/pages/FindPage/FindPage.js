import PlanetCard from "../../components/PlanetCard/PlanetCard";

import styles from "../FindPage/FindPage.module.css";
import { ReactComponent as Moon } from "../../components/SVG/Moon.svg";
import { ReactComponent as Mercury } from "../../components/SVG/Mercury.svg";
import { ReactComponent as Venus } from "../../components/SVG/Venus.svg";
import { ReactComponent as Mars } from "../../components/SVG/Mars.svg";

const FindPage = () => {
  const moonDesc = `One of the most well-known celestial bodies, the moon orbits the Earth
        every 27.3 days and is the force behind our ocean tides`;
  const mercuryDesc = `The smallest planet in our solar system, Mercury orbits the closest to the sun, but surprisingly isn't the hottest`;
  const venusDesc = `Venus is the hottest planet in our solar system, with surface temperatures hovering around 900 degrees Fahrenheit`;
  const marsDesc = `Mars is one of the most explored bodies in our solar system. NASA hopes to launch astronauts to Mars by the late 2030s or early 2040s`

  return (
    <div className={styles["find-container"]}>
      <h1 className={styles.heading1}>
        Find the moon, planets, and stars in the night sky
      </h1>
      <PlanetCard name={"Moon"} desc={moonDesc}>
        <Moon className={styles.planet} />
      </PlanetCard>
      <PlanetCard name={"Mercury"} desc={mercuryDesc}>
        <Mercury className={styles.planet} />
      </PlanetCard>
      <PlanetCard name={"Venus"} desc={venusDesc}>
        <Venus className={styles.planet} />
      </PlanetCard>
      <PlanetCard name={"Mars"} desc={marsDesc} >
        <Mars className={styles.planet} />
      </PlanetCard>
      <h2 className={styles.heading2}>And many more!</h2>
    </div>
  );
};

export default FindPage;
