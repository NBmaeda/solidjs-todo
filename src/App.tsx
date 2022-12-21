import type { Component } from "solid-js";
import Header from "./components/Header";
import TodoForm from "./components/parts/TodoForm";
import TodoList from "./components/parts/TodoList";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <>
      <Header />
      <section class={styles.container}>
        <h2 class={styles.stitle}>Todo一覧</h2>
        <TodoForm />
        <TodoList />
      </section>
    </>
  );
};

export default App;
