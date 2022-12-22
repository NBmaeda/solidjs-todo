/** @jsxImportSource solid-js */
import { Component, splitProps } from "solid-js";
import type { Todo } from "../../lib/types";
import useTodos from "../../lib/useTodos";
import styles from "./TodoItem.module.css";

const TodoItem: Component<Todo> = (props: Todo) => {
  const [local, others] = splitProps(props, ["title", "id", "completed"]);
  const { deleteTodo, toggleCompleted } = useTodos;
  console.log(local.completed);
  return (
    <li class={styles.listItem}>
      <label class={styles.label}>
        <input
          type="checkbox"
          class={styles.checkbox}
          name={local.id}
          checked={local.completed}
          onChange={toggleCompleted}
        />
        <span class={styles.title}>{local.title}</span>
      </label>
      <button
        class={`${styles.button} button`}
        onClick={deleteTodo}
        name={local.id}
      >
        削除
      </button>
    </li>
  );
};
export default TodoItem;
