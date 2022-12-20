import logo from "../logo.svg";
import type { Component } from "solid-js";

const Header: Component = () => {
  return (
    <header class="header">
      <h1 class="title">
        <img src={logo} class="logo" alt="logo" width="auto" height="48" />
        Todo App
      </h1>
    </header>
  );
};

export default Header;
