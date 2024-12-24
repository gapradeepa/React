import styles from "./fooditem.module.css";

export default function FoodItem({ food, setfoodId }) {
  return (
    <div className={styles.itemsContainer}>
      <img className={styles.itemImage} src={food.image} alt=""></img>
      <div className={styles.itemContent}>
        <p className={styles.itemName}>{food.title}</p>
      </div>
      <div className={styles.buttonContainer}>
        <button
          className={styles.itemButton}
          onClick={() => {
            setfoodId(food.id);
          }}
        >
          View Receipe
        </button>
      </div>
    </div>
  );
}
