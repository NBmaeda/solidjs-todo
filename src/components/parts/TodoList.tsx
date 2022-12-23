import { Component, onMount, Show, For } from "solid-js";
import type { Todo } from "../../lib/types";
import useTodos from "../../lib/useTodos";
import TodoItem from "./TodoItem";
import styles from "./TodoList.module.css";

const TodoList: Component = () => {
  const { todos, fetchTodos } = useTodos;
  onMount(() => {
    fetchTodos();
  });
  return (
    <Show when={todos() !== undefined} fallback={<p>loading...</p>}>
      <Show
        when={(todos() as Todo[]).length > 0}
        fallback={<p>まだTodoが登録されていません。</p>}
      >
        <ul class={styles.list}>
          <For each={todos()}>{(todo) => <TodoItem {...todo} />}</For>
        </ul>
      </Show>
    </Show>
  );
};

export default TodoList;
