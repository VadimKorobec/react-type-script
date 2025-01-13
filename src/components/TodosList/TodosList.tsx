import TodoItem from "../TodoItem/TodoItem";

import Todo from "../types/todo.types";


interface TodosProps {
  todos: Todo[];
}

const TodosList = ({ todos }: TodosProps) => {
  console.log(todos)
  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>
          <TodoItem todo={todo} />
        </li>
      ))}
    </ul>
  );
};

export default TodosList;
