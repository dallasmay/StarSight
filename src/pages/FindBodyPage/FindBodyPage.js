import FindBodyForm from "../../components/FindBodyForm/FindBodyForm";

import styles from "./FindBodyPage.module.css";

const FindBodyPage = () => {
    return (
      <div className={styles["find-body-container"]}>
        <h1 className={styles.heading1}>
          Find the moon, planets, and stars in the night sky
        </h1>
        <FindBodyForm />
      </div>
    );
};

export default FindBodyPage;