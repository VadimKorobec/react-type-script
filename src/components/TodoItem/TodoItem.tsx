import Todo from "../types/todo.types";

interface TodoProps {
  todo: Todo;
}

const TodoItem = ({ todo }: TodoProps) => {
  return (
    <div>
      <h2>{todo.title}</h2>
    </div>
  );
};

export default TodoItem;
