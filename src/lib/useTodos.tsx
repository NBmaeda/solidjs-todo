/** @jsxImportSource solid-js */
import supabaseClient from "./supabaseClient";
import type { Todo } from "./types";
import { createSignal, createRoot, JSX } from "solid-js";
import useTodoTitle from "./useTodoTitle";

const createTodos = () => {
  const { todoTitle, setTodoTitle } = useTodoTitle;
  const [todos, setTodos] = createSignal<Todo[] | undefined>(undefined);
  const fetchTodos = async () => {
    try {
      const { data, error } = await supabaseClient
        .from("todos")
        .select("*")
        .order("created_at", { ascending: false });
      if (error) throw error;

      return setTodos(data);
    } catch (error) {
      alert(error);
      setTodos([]);
    }
  };

  const addTodo: JSX.EventHandlerUnion<HTMLFormElement, Event> = async (e) => {
    e.preventDefault();
    if (todoTitle().trim().length !== 0) {
      try {
        const { data, error } = await supabaseClient
          .from("todos")
          .insert({ title: todoTitle(), completed: false })
          .select();
        if (error) throw error;
        setTodos([data[0], ...(todos() as Todo[])]);
        setTodoTitle("");
      } catch (error) {
        alert(error);
      }
    } else {
      alert("Todoを入力してください。");
    }
  };

  const deleteTodo: JSX.EventHandlerUnion<
    HTMLButtonElement,
    MouseEvent
  > = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabaseClient
        .from("todos")
        .delete()
        .match({ id: e.currentTarget.name })
        .select();
      if (error) throw error;
      const newTodos = (todos() as Todo[]).filter(
        (todo) => todo.id !== data[0].id
      );
      setTodos(newTodos);
    } catch (error) {
      alert(error);
    }
  };

  const deleteCompletedTodo: JSX.EventHandlerUnion<
    HTMLButtonElement,
    MouseEvent
  > = async (e) => {
    e.preventDefault();
    try {
      const { error } = await supabaseClient
        .from("todos")
        .delete()
        .match({ completed: true });
      if (error) throw error;
      const newTodos = (todos() as Todo[]).filter(
        (todo) => todo.completed === false
      );
      setTodos(newTodos);
    } catch (error) {
      alert(error);
    }
  };

  const toggleCompleted: JSX.EventHandlerUnion<
    HTMLInputElement,
    Event
  > = async (e) => {
    e.preventDefault();
    try {
      const { data, error } = await supabaseClient
        .from("todos")
        .update({ completed: e.currentTarget.checked })
        .eq("id", e.currentTarget.name)
        .select();
      if (error) throw error;
      const newTodos = (todos() as Todo[]).map((todo) => {
        if (todo.id !== data[0].id) {
          todo.completed = !todo.completed;
        }
        return todo;
      });
      setTodos(newTodos);
    } catch (error) {
      alert(error);
    }
  };

  return {
    todos,
    fetchTodos,
    addTodo,
    deleteTodo,
    deleteCompletedTodo,
    toggleCompleted,
  };
};

export default createRoot(createTodos);
