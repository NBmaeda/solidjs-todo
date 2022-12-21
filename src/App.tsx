import type { Component } from "solid-js";
import Header from "./components/Header";
import TodoForm from "./components/parts/TodoForm";
import TodoList from "./components/parts/TodoList";
import styles from "./App.module.css";

const App: Component = () => {
  console.log(VITE_VERCEL_URL);
  console.log(VITE_VERCEL_ENV);
  return (
    <>
      <Header />
      <section class="container"></section>
      <h2 class="title">Todo一覧</h2>
      <TodoForm />
      {/* <TodoList /> */}
    </>
  );
};

export default App;
