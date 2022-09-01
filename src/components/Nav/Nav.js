import { Link } from "react-router-dom";

import styles from "../Nav/Nav.module.css";

const Nav = (props) => {
  console.log(`This is in the Nav component: ${props.isLoggedIn}`);
  return props.isLoggedIn ? (
    <nav className={styles.nav}>
      <ul className={styles["link-container"]}>
        <Link to="/explore">
          <li>Explore</li>
        </Link>
        <Link to="/find">
          <li>Find</li>
        </Link>
        <Link to="/track">
          <li>Track</li>
        </Link>
      </ul>
    </nav>
  ) : (
    <nav className={styles.nav}>
      <ul className={styles["link-container"]}>
        <Link to="/explore">
          <li>Explore</li>
        </Link>
        <Link to="/find">
          <li>Find</li>
        </Link>
        <Link to="/track">
          <li>Track</li>
        </Link>
        <Link to="/login">
          <li>Login/Signup</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Nav;
