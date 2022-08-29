import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import Button from "../Button/Button";

import styles from "./RegisterModal.module.css";

const RegisterModal = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const submitHandler = (evt) => {
    evt.preventDefault();
    let body = {
      name,
      email,
      password,
    };
    if (password === confirmPassword) {
      axios
        .post("http://localhost:4000/register", body)
        .then((res) => {
          navigate("/login");
          alert(res.data);
        })
        .catch((err) => {
          if (err.response.data.err.name === "SequelizeUniqueConstraintError") {
            alert("User with that email already exists");
          } else {
            console.log(err)
          }
        });
      return;
    } else {
      return alert("Passwords need to match");
    }
  };

  return (
    <div className={styles["modal-container"]}>
      <h2 className={styles["modal-heading"]}>CREATE ACCOUNT</h2>
      <form className={styles["register-form"]} onSubmit={submitHandler}>
        <label htmlFor="name" className={styles.label}>
          Name:
        </label>
        <input
          type="text"
          id="name"
          className={styles.input}
          onChange={(evt) => {
            setName(evt.target.value);
          }}
        />
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
        <label htmlFor="password" className={styles.label}>
          Confirm Password:
        </label>
        <input
          type="password"
          id="password"
          className={styles.input}
          onChange={(evt) => setConfirmPassword(evt.target.value)}
        />
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
};

export default RegisterModal;
