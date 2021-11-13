import { useState } from "react";
import Todos from "./components/Todos";
import NewTodo from "./components/NewTodo";
import "./App.css";
import Todo from "./models/todo";

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addToDoHandler = (text: string) => {
    const newTodo = new Todo(text);

    setTodos((prevTodos) => {
      return prevTodos.concat(newTodo);
    });
  };

  return (
    <div>
      <NewTodo onAddTodo={addToDoHandler} />
      <Todos />
    </div>
  );
}

export default App;
