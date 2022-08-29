import { Link } from "react-router-dom";

import Button from "../Button/Button";

import styles from "./LoginModal.module.css";

const LoginModal = () => {
  return (
    <div className={styles["modal-container"]}>
      <h2 className={styles["modal-heading"]}>LOGIN</h2>
      <form className={styles["login-form"]}>
        <label for="email" className={styles.label}>
          Email:
        </label>
        <input type="email" id="email" className={styles.input} />
        <label for="password" className={styles.label}>
          Password:
        </label>
        <input type="password" id="password" className={styles.input} />
        <p className={styles["no-acct"]}>Don't have an account?</p>
        <Link to="/register" className={styles["new-acct-link"]}>Create account here</Link>
        <div className={styles["btn-container"]}>
          <Button>LOGIN</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
