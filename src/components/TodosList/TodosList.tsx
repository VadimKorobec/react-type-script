import TodoItem from "../TodoItem/TodoItem";

import Todo from "../types/todo.types";

import styles from './TodosList.module.css'

interface TodosProps {
  todos: Todo[];
  onDelete: (id: string) => void;
}

const TodosList = ({ todos,onDelete }: TodosProps) => {
  console.log(todos)
  return (
    <ul className={styles.todos}>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} onDelete={onDelete} />
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
