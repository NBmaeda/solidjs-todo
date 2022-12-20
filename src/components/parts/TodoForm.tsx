import type { Component } from "solid-js";

const TodoForm: Component = () => {
  return (
    <form class="form">
      <input
        type="text"
        name="todoname"
        placeholder="Todoを登録する"
        value="title"
        class="input"
      />
      <button type="submit" class="button">
        {" "}
        Todoを追加{" "}
      </button>
      <button type="button" class="button">
        完了済みのTodoを削除
      </button>
    </form>
  );
};

export default TodoForm;
