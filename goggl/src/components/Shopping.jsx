import styles from "./shopping.module.css";

const Shopping = ({ item }) => {
  return (
    <div className={styles.cardStyle}>
      <a href={item.link} target="_blank">
        <p> {item.title} </p>
      </a>
      <p> {item.snippet}</p>
    </div>
  );
};
export default Shopping;
