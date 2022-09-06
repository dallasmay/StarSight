import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import axios from "axios";

import Button from "../Button/Button";

import { authActions } from "../../ReduxStore/store";
import styles from "./LoginModal.module.css";

const LoginModal = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const loginSubmitHandler = (evt) => {
    evt.preventDefault();
    let loginBody = {
      email,
      password,
    };
    axios
      .post("http://localhost:4000/login", loginBody)
      .then((res) => {
        if (res.data.result === true) {
          const { name, userId } = res.data;

          dispatch(authActions.login());
          dispatch(authActions.setUserId(userId));
          dispatch(authActions.setName(`${name}`));
          
        } else if (res.data.result === false) {
          console.log("Email or password is incorrect");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className={styles["modal-container"]}>
      <h2 className={styles["modal-heading"]}>LOGIN</h2>
      <form className={styles["login-form"]} onSubmit={loginSubmitHandler}>
        <label htmlFor="email" className={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          className={styles.input}
          onChange={(evt) => setEmail(evt.target.value)}
        />
        <label htmlFor="password" className={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          onChange={(evt) => setPassword(evt.target.value)}
        />
        <p className={styles["no-acct"]}>Don't have an account?</p>
        <Link to="/register" className={styles["new-acct-link"]}>
          Create account here
        </Link>
        <div className={styles["btn-container"]}>
          <Button>LOGIN</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginModal;
