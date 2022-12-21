/** @jsxImportSource solid-js */
import { Component, splitProps } from "solid-js";
import type { Todo } from "../../lib/types";
import useTodos from "../../lib/todos";
import styles from "./TodoItem.module.css";

const TodoItem: Component<Todo> = (props: Todo) => {
  const [local, others] = splitProps(props, ["title", "id", "completed"]);
  const { todos, fetchTodos } = useTodos;

  return (
    <li class="listItem">
      <label class={styles.label}>
        <input
          type="checkbox"
          class={styles.checkbox}
          name={local.id}
          checked={local.completed}
        />
        <span class={styles.title}>{local.title}</span>
      </label>
      <button
        class={styles.button}
        onClick={() => console.log("deleeeeet!")}
        name={local.id}
      >
        削除
      </button>
    </li>
  );
};
export default TodoItem;
