import PlanetCard from "../../components/PlanetCard/PlanetCard"

import styles from "../FindPage/FindPage.module.css"

const FindPage = () => {
    return (
      <div className={styles["find-container"]}>
        <h1 className={styles.heading1}>
          Find the moon, planets, and stars in the night sky
        </h1>
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
        <PlanetCard />
      </div>
    );
}

export default FindPage;