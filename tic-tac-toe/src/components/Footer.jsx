import styles from "./footer.module.css";

export default function Footer({ xIsNext, winner }) {
  const message =
    winner === null
      ? `This is ${xIsNext ? "X" : "O"}'s turn.`
      : "Game is Over!";

  return (
    <div className={styles.footer}>
      <span className={styles.left}>{message} </span>
      <span className={styles.right}>The winner is : {winner}</span>
    </div>
  );
}
