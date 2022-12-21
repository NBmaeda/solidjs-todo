/** @jsxImportSource solid-js */
// import { createSignal, createContext, useContext, JSX } from "solid-js";
// import type { Todo } from "./types";
// // export interface TodosContextModel {
// //   todos: [] | null;
// //   children: JSX.Element;
// // }

// const TodosContext = createContext();
// // export type TodosContextModel = {

// // }
// export function TodosProvider(props: any) {
//   const [todos, setTodos] = createSignal(props.todos || null),
//     store = [
//       todos,
//       {
//         sayHello() {
//           setTodos((todos) => todos.concat(["Hello"]));
//         },
//       },
//     ];
//   return (
//     <TodosContext.Provider value={store}>
//       {props.children}
//     </TodosContext.Provider>
//   );
// }

// export function useTodos() {
//   return useContext(TodosContext);
// }

import supabaseClient from "./supabaseClient";
import { createSignal, createRoot } from "solid-js";
import type { Todo } from "./types";

const createTodos = () => {
  const [todos, setTodos] = createSignal<Todo[] | undefined>(undefined);
  const fetchTodos = () => {
    const fetch = async () => {
      try {
        const { data, error } = await supabaseClient
          .from("todos")
          .select("*")
          .order("created_at", { ascending: false });
        if (error) throw error;

        console.log(data);
        return setTodos(data);
      } catch (error) {
        alert(error);
        setTodos([]);
      }
    };
    fetch();
  };

  return { todos, fetchTodos };
};

export default createRoot(createTodos);
