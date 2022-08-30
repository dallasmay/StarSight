import { useState } from "react";
import axios from "axios";

import Button from "../Button/Button";

import styles from "./FindBodyForm.module.css";

const FindBodyForm = () => {
  const [body, setBody] = useState("");
  const [latitude, setLatitude] = useState(0);
  const [longitude, setLongitude] = useState(0);
  const [elevation, setElevation] = useState(0);
  const [unit, setUnit] = useState("");

  const findBodySubmitHandler = (evt) => {
    evt.preventDefault();
    let findBody = {
      body,
      latitude,
      longitude,
      elevation,
      unit,
    };
    axios.post("http://localhost:4000/find-body", findBody);
  };

  return (
    <form onSubmit={findBodySubmitHandler}>
      <label htmlFor="body-select" className={styles["planet-select"]}>
        What I'm trying to find:
      </label>
      <select
        id="body-select"
        onChange={(evt) => {
          setBody(evt.target.value);
        }}
      >
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
      <input
        type="number"
        id="latitude"
        step="0.0000001"
        onChange={(evt) => setLatitude(evt.target.value)}
      />
      <label htmlFor="longitude" className={styles.coords}>
        Longitude:
      </label>
      <input
        type="number"
        id="longitude"
        step="0.0000001"
        onChange={(evt) => setLongitude(evt.target.value)}
      />
      <label htmlFor="elevation" className={styles["planet-select"]}>
        My elevation:
      </label>
      <input
        type="number"
        id="elevation"
        onChange={(evt) => setElevation(evt.target.value)}
      />
      <input
        type="radio"
        name="unit"
        id="feet"
        onChange={(evt) => setUnit(evt.target.id)}
      />
      <label htmlFor="feet">in feet</label>
      <input
        type="radio"
        name="unit"
        id="meters"
        onChange={(evt) => setUnit(evt.target.id)}
      />
      <label htmlFor="meters">in meters</label>
      <div>
        <Button>FIND</Button>
      </div>
    </form>
  );
};

export default FindBodyForm;
