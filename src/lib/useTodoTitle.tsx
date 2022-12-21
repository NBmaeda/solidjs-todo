import { createSignal, createRoot, JSX } from "solid-js";

const createTodoTitle = () => {
  const [todoTitle, setTodoTitle] = createSignal<string>("");
  const inputTodoTitle: JSX.EventHandlerUnion<HTMLInputElement, Event> = (
    e
  ) => {
    setTodoTitle(e.currentTarget.value);
  };
  return { todoTitle, inputTodoTitle, setTodoTitle };
};

export default createRoot(createTodoTitle);
