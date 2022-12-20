import type { Component } from "solid-js";
import { Show } from "solid-js";
import TodoItem from "./TodoItem";

const TodoList: Component = () => {
  return (
    <Show when={true} fallback={<p>まだTodoが登録されていません。</p>}>
      <ul class="list">
        <TodoItem />
      </ul>
    </Show>
  );
};

export default TodoList;
