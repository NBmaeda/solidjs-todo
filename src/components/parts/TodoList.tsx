import { Component, onMount, Show, For } from "solid-js";
import useTodos from "../../lib/useTodos";
import TodoItem from "./TodoItem";

const TodoList: Component = () => {
  const { todos, fetchTodos } = useTodos;
  onMount(() => {
    fetchTodos();
  });
  return (
    <Show
      when={todos() !== undefined}
      fallback={<p>まだTodoが登録されていません。</p>}
    >
      <ul class="list">
        <For each={todos()}>{(todo) => <TodoItem {...todo} />}</For>
      </ul>
    </Show>
  );
};

export default TodoList;
