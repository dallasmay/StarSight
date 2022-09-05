import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import styles from "../Nav/Nav.module.css";

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.isAuthenticated);
  return isLoggedIn ? (
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
