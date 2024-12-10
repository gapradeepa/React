import styles from "./todoItem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const handleDelete = (item) => {
    console.log("Delete clicked", item);
    // TODO: Implement delete functionality
    // You can use the provided 'setTodos' function to remove the item from the array
    setTodos(todos.filter((i) => i !== item));
  };

  const handleClick = (name) => {
    console.log("Item clicked", name);
    const newTodo = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );
    setTodos(newTodo); // Update the state with the new array to reflect the changes.
  };
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={item.name}>
        <span
          onClick={() => handleClick(item.name)}
          className={item.done ? styles.completed : ""}
        >
          {item.name}
        </span>

        <span>
          <button
            className={styles.deleteButton}
            onClick={() => handleDelete(item)}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
