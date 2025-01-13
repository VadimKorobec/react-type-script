import { useState } from "react";

import TodosList from "./components/TodosList/TodosList";
import NewTodo from "./components/NewTodo/NewTodo";

import Todo from "./components/types/todo.types";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleTodos = (data: Todo) => {
    setTodos((prevState) => [...prevState, data]);
  };

  return (
    <div>
      <NewTodo onTodos={handleTodos} />
      <TodosList todos={todos} />
    </div>
  );
};

export default App;
