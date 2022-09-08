import { useState, useEffect, useRef } from "react";

import FindBodyForm from "../../components/FindBodyForm/FindBodyForm";
import FindBodyResult from "../../components/FindBodyResult/FindBodyResult";

import styles from "./FindBodyPage.module.css";

const FindBodyPage = () => {
  const [bodyPosition, setBodyPosition] = useState("");
  const [isResultVisible, setIsResultVisible] = useState(false);

  const scroll = useRef(null);

  const bodyPositionDrill = (position) => {
    setBodyPosition(position);
  };

  const toggleBodyResult = () => {
    setIsResultVisible((prevState) => {
      if (prevState) {
        return prevState;
      } else if (!prevState) {
        return !prevState;
      }
    });
  };

  useEffect(() => {
    scroll.current.scrollTo(0, 0);
  }, [bodyPosition]);

  return (
    <div className={styles["find-body-container"]} ref={scroll}>
      {isResultVisible && <FindBodyResult bodyPosition={bodyPosition} />}

      <h1 className={styles.heading1}>
        Find the moon, planets, and stars in the night sky
      </h1>
      <FindBodyForm
        bodyPositionDrill={bodyPositionDrill}
        toggleBodyResult={toggleBodyResult}
      />
    </div>
  );
};

export default FindBodyPage;
