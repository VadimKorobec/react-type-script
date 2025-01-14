import { useState } from "react";

import TodosList from "./components/TodosList/TodosList";
import NewTodo from "./components/NewTodo/NewTodo";

import Todo from "./components/types/todo.types";

const App = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddNewTodo = (newTodo: Todo) => {
    const isDuplicate = todos.some(
      (item: Todo) => item.title.toLowerCase() === newTodo.title.toLowerCase()
    );

    if (isDuplicate) {
      alert("You already have a todo with the same title");
      return;
    }

    setTodos((prevState) => [...prevState, newTodo]);
  };

  const handleDeleteTodo = (id: string) => {
    setTodos(prevState => prevState.filter(item => item.id !== id) )
  };

  return (
    <div>
      <NewTodo onAddTodo={handleAddNewTodo} />
      <TodosList todos={todos} onDelete={handleDeleteTodo} />
    </div>
  );
};

export default App;
