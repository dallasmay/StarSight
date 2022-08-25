import Nav from "../Nav/Nav";

import styles from "../Header/Header.module.css"

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles["header-flex-container"]}>
        <h1 className={styles.heading}>Header</h1>
        <Nav />
      </div>
    </header>
  );
};

export default Header;
