import Button from "../Button/Button";

import styles from "./FindBodyForm.module.css";

const FindBodyForm = () => {
    return (
      <form>
        <label htmlFor="body-select" className={styles["planet-select"]}>
          What I'm trying to find:
        </label>
        <select id="body-select">
          <option value="moon">Moon</option>
          <option value="mercury">Mercury</option>
          <option value="venus">Venus</option>
          <option value="mars">Mars</option>
          <option value="jupiter">Jupiter</option>
          <option value="saturn">Saturn</option>
          <option value="uranus">Uranus</option>
          <option value="neptune">Neptune</option>
          <option value="pluto">Pluto</option>
        </select>
        <h2>My current coordinates:</h2>
        <label htmlFor="latitude" className={styles.coords}>
          Latitude:
        </label>
        <input type="number" id="latitude" />
        <label htmlFor="longitude" className={styles.coords}>
          Longitude:
        </label>
        <input type="number" id="longitude" />
        <label htmlFor="elevation" className={styles["planet-select"]}>
          My elevation:
        </label>
        <input type="number" id="elevation" />
        <input type="radio" name="unit" id="feet" />
        <label htmlFor="feet">in feet</label>
        <input type="radio" name="unit" id="meters" />
        <label htmlFor="meters">in meters</label>
        <div>
          <Button>FIND</Button>
        </div>
      </form>
    );
}

export default FindBodyForm;