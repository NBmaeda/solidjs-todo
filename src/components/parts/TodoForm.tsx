import { Component } from "solid-js";
import useTodoTitle from "../../lib/useTodoTitle";
import useTodos from "../../lib/useTodos";

const TodoForm: Component = () => {
  const { todoTitle, inputTodoTitle } = useTodoTitle;
  const { addTodo, deleteCompletedTodo } = useTodos;
  return (
    <form class="form" onSubmit={addTodo}>
      <input
        type="text"
        name="todoname"
        placeholder="Todoを登録する"
        value={todoTitle()}
        onInput={inputTodoTitle}
        class="input"
      />
      <button type="submit" class="button">
        Todoを追加
      </button>
      <button type="button" class="button" onClick={deleteCompletedTodo}>
        完了済みのTodoを削除
      </button>
    </form>
  );
};

export default TodoForm;
