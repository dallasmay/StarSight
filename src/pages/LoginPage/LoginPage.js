import LoginModal from "../../components/LoginModal/LoginModal";

import styles from "./LoginPage.module.css";

const LoginPage = (props) => {
  const loggedInDrill = (state) => {
    console.log(`This is in the LoginPage component: ${state}`);
    props.loggedInDrill(state);
    return
  };
  

  return (
    <div className={styles.container}>
      <h1 className={styles.heading1}>Login Page</h1>
      <LoginModal loggedInDrill={loggedInDrill}/>
    </div>
  );
};

export default LoginPage;
