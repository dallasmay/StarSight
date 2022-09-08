import styles from "../Button/Button.module.css"

const Button = (props) => {
    return (
      <button className={styles.button}>
        <span>{props.children}</span>
      </button>
    );
}

export default Button;