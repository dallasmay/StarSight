import axios from "axios";

import styles from "./ChecklistCard.module.css";

const ChecklistCard = (props) => {
  const toggleCheckedHandler = () => {
    let updateBody = {
      itemId: props.id,
      newCheckedStatus: !props.isChecked,
    };
    axios.put("http://localhost:4000/checklist", updateBody).then((res) => {
      // console.log(res.data[0][0]);
      props.updateItemsArr(res.data[0][0]);
    });
  };

  return (
    <div className={styles.card} onClick={toggleCheckedHandler}>
      <div
        className={
          props.isChecked ? styles["card-checked"] : styles["card-not-checked"]
        }
      >
        <h2 className={styles.heading2}>{props.name}</h2>
        <h3 className={styles.heading3}>{props.type}</h3>
      </div>
    </div>
  );
};

export default ChecklistCard;
