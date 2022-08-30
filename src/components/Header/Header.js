import { Link } from "react-router-dom";

import Nav from "../Nav/Nav";
import { ReactComponent as Moon } from "../SVG/Moon.svg";

import styles from "../Header/Header.module.css";

const Header = (props) => {
  console.log(`This is in the Header component: ${props.isLoggedIn}`);
  return (
    <header className={styles.header}>
      <div className={styles["header-flex-container"]}>
        <Link to="/">
          <Moon className={styles.moon} />
        </Link>
        <Nav isLoggedIn={props.isLoggedIn} />
      </div>
    </header>
  );
};

export default Header;
