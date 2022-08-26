import { Link } from "react-router-dom";

import styles from "../Nav/Nav.module.css"

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles["link-container"]}>
        <Link to="/explore">
          <li>Explore</li>
        </Link>
        <Link to="/find">
          <li>Find</li>
        </Link>
        <li>Track</li>
        <li>Login/Signup</li>
      </ul>
    </nav>
  );
};

export default Nav;
