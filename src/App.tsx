import type { Component } from "solid-js";
import { createStore } from "solid-js/store";
import Header from "./components/Header";
import TodoForm from "./components/parts/TodoForm";
import TodoItem from "./components/parts/TodoItem";
import styles from "./App.module.css";

const App: Component = () => {
  const [todos, setTodos] = createStore([]);
  return (
    <>
      <Header />
      <section class="container"></section>
      <h2 class="title">Todo一覧</h2>
      <TodoForm />

      <ul class="list">
        <TodoItem />
      </ul>
    </>
  );
};

export default App;
