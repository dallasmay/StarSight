import LoginModal from "../../components/LoginModal/LoginModal";

import styles from "./LoginPage.module.css";

const LoginPage = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Login Page</h1>
      <LoginModal />
    </div>
  );
};

export default LoginPage;
