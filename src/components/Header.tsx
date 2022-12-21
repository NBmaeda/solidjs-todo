import logo from "../logo.svg";
import type { Component } from "solid-js";
import styles from "./Header.module.css";

const Header: Component = () => {
  return (
    <header class={styles.header}>
      <h1 class={styles.title}>
        <img
          src={logo}
          class={styles.logo}
          alt="logo"
          width="auto"
          height="48"
        />
        Todo App
      </h1>
    </header>
  );
};

export default Header;
