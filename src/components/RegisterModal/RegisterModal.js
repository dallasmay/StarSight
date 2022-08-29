import { Link } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./RegisterModal.module.css"

const RegisterModal = () => {
    return (
      <div className={styles["modal-container"]}>
        <h2 className={styles["modal-heading"]}>CREATE ACCOUNT</h2>
        <form className={styles["register-form"]}>
          <label for="name" className={styles.label}>
            Name:
          </label>
          <input type="text" id="name" className={styles.input} />
          <label for="email" className={styles.label}>
            Email:
          </label>
          <input type="email" id="email" className={styles.input} />
          <label for="password" className={styles.label}>
            Password:
          </label>
          <input type="password" id="password" className={styles.input} />
          <label for="password" className={styles.label}>
            Confirm Password:
          </label>
          <input type="password" id="password" className={styles.input} />
          <p className={styles["no-acct"]}>Already have an account?</p>
          <Link to="/login" className={styles["new-acct-link"]}>
            Login here
          </Link>
          <div className={styles["btn-container"]}>
            <Button>CREATE</Button>
          </div>
        </form>
      </div>
    );
}

export default RegisterModal;