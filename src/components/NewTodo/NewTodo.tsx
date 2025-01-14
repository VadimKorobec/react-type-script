import { ChangeEvent, FormEvent, useState } from "react";
import { nanoid } from "nanoid";

import Todo from "../types/todo.types";

import styles from './NewTodo.module.css'

interface NewTodoProps {
  onAddTodo: (data: Todo) => void;
}

const NewTodo = ({ onAddTodo }: NewTodoProps) => {
  const [newTodo, setNewTodo] = useState<Todo>({
    id: "",
    title: "",
  });

  console.log(newTodo)

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo({
      ...newTodo,
      title: e.target.value.trim(),
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const todo: Todo = {
      id: nanoid(),
      title: newTodo.title,
    };

    onAddTodo(todo);
    reset();
  };

  const reset = () => {
    setNewTodo({ id: "", title: "" });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <label>Text Todo</label>
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
