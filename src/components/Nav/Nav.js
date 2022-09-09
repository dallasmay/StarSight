import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { authActions } from "../../ReduxStore/store";

import styles from "../Nav/Nav.module.css";

const Nav = () => {
  const isLoggedIn = useSelector((state) => state.isAuthenticated);
  const dispatch = useDispatch();

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? "underline" : "none",
      textUnderlineOffset: "7px"
    }
  }
  const logOut = () => {
    dispatch(authActions.logout());
  }

  return isLoggedIn ? (
    <nav className={styles.nav}>
      <ul className={styles["link-container"]}>
        <NavLink to="/explore" className={styles.link} style={navLinkStyles}>
          <li>Explore</li>
        </NavLink>
        <NavLink to="/find" className={styles.link} style={navLinkStyles}>
          <li>Find</li>
        </NavLink>
        <NavLink to="/track" className={styles.link} style={navLinkStyles}>
          <li>Track</li>
        </NavLink>
        <button className={styles["logout-btn"]} onClick={logOut}>Logout</button>
      </ul>
    </nav>
  ) : (
    <nav className={styles.nav}>
      <ul className={styles["link-container"]}>
        <NavLink to="/explore" className={styles.link} style={navLinkStyles}>
          <li>Explore</li>
        </NavLink>
        <NavLink to="/find" className={styles.link} style={navLinkStyles}>
          <li>Find</li>
        </NavLink>
        <NavLink to="/track" className={styles.link} style={navLinkStyles}>
          <li>Track</li>
        </NavLink>
        <NavLink to="/login" className={styles.link} style={navLinkStyles}>
          <li>Login/Signup</li>
        </NavLink>
      </ul>
    </nav>
  );
};

export default Nav;
