import RegisterModal from "../../components/RegisterModal/RegisterModal"

import styles from "./RegisterPage.module.css";

const RegisterPage = () => {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading1}>Login Page</h1>
        <RegisterModal />
      </div>
    );
}

export default RegisterPage;