import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.name !== "") {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
    }
  };

  return (
    <form className={styles.todoform}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          type="text"
          placeholder="Enter your tasks..."
          value={todo.name}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
        />
        <button
          type="submit"
          className={styles.modernButton}
          onClick={(e) => handleSubmit(e)}
        >
          Add
        </button>
      </div>
    </form>
  );
}
