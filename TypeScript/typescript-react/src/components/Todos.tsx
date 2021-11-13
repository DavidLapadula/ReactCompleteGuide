import React, { useContext } from "react";
import { TodosContext } from "../store/todos-context";

const Todos: React.FC = (props) => {
  const todosCtx = useContext(TodosContext);

  return (
    <ul>
      {todosCtx.items.map((item) => (
        <li key={item.id}>{item.text}</li>
      ))}
    </ul>
  );
};

export default Todos;
