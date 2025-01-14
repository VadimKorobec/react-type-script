import Todo from "../types/todo.types";

import styles from "./TodoItem.module.css";

interface TodoProps {
  todo: Todo;
  onDelete: (id: string) => void;
}

const TodoItem = ({ todo, onDelete }: TodoProps) => {
  return (
    <div className={styles.item}>
      <h2 style={{ color: "black" }} onClick={() => onDelete(todo.id)}>
        {todo.title}
      </h2>
    </div>
  );
};

export default TodoItem;
