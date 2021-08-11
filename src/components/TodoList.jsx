import React from "react";
import { TodoItem } from "./TodoItem";

export const TodoList = ({ todos, onDoneUndone, onEditTodo, onDeleteTodo }) => {
  return (
    <ul>
      {todos.map((t) => (
        <TodoItem
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          onDoneUndone={onDoneUndone}
          item={t}
          key={t.id}
        />
      ))}
    </ul>
  );
};
