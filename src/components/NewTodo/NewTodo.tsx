import { ChangeEvent, FormEvent, useState } from "react";

import Todo from "../types/todo.types";
import { nanoid } from "nanoid";

interface NewTodoProps {
  onTodos: (data: Todo) => void;
}

const NewTodo = ({ onTodos }: NewTodoProps) => {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: "",
    title: "",
  });

  console.log(newTodo);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      title: e.target.value,
    });
  };

  const handleCreateNewTodo = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo: Todo = {
      id: nanoid(),
      title: newTodo.title,
    };

    onTodos(todo);
    reset();
  };

  const reset = () => {
    setNewTodo({ id: "", title: "" });
  };

  return (
    <form onSubmit={handleCreateNewTodo}>
      <label>Create A New Todo</label>
      <input
        type="text"
        value={newTodo.title}
        required
        onChange={handleChange}
      />
      <button type="submit">Create Todo</button>
    </form>
  );
};

export default NewTodo;
