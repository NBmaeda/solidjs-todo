import { Component } from "solid-js";

const TodoItem: Component = () => {
  return (
    <li class="listItem">
      <label class="label">
        <input type="checkbox" class="checkbox" name="id" />
        <span class="title">todo title</span>
      </label>
      <button class="button"> 削除 </button>
    </li>
  );
};
export default TodoItem;
