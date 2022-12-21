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
          .insert({ title: todoTitle(), completed: false });
        if (error) throw error;
        setTodoTitle("");
        fetchTodos();
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
      const { error } = await supabaseClient
        .from("todos")
        .delete()
        .match({ id: e.currentTarget.name });
      if (error) throw error;
      fetchTodos();
    } catch (error) {
      alert(error);
    }
  };

  // export const deleteCompletedTodo = async (e: Event) => {
  // e.preventDefault();
  //   try {
  //     const { error } = await supabaseClient.from('todos').delete().match({ completed: true });
  //     if (error) throw error;
  //     fetchTodos();
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  // export const toggleCompleted = async (
  //   e: Event & { currentTarget: EventTarget & HTMLInputElement }
  // ) => {
  // e.preventDefault();
  //   try {
  //     const { error } = await supabaseClient
  //       .from('todos')
  //       .update({ completed: e.currentTarget.checked })
  //       .eq('id', e.currentTarget.name);
  //     if (error) throw error;
  //     fetchTodos();
  //   } catch (error) {
  //     alert(error);
  //   }
  // };

  return { todos, fetchTodos, addTodo, deleteTodo };
};

export default createRoot(createTodos);
