import type { Component } from "solid-js";
import { createStore } from "solid-js/store";
import Header from "./components/Header";
import TodoForm from "./components/parts/TodoForm";
import TodoList from "./components/parts/TodoList";
import TodoItem from "./components/parts/TodoItem";
import fetchTodos from "./lib/fetchTodos";
import styles from "./App.module.css";

const App: Component = () => {
  return (
    <>
      <Header />
      <section class="container"></section>
      <h2 class="title">Todo一覧</h2>
      <TodoForm />
      <TodoList />
    </>
  );
};

export default App;
