import { useState } from "react";
import AddTodo from "./AddTodo";
import TaskList from "./TaskList";

let nextId = 3;
const initialTodos = [
  { id: 0, title: "Buy milk", done: true },
  { id: 1, title: "Eat tacos", done: false },
  { id: 2, title: "Brew tea", done: false },
];

export default function Todos() {
  const [todos, setTodos] = useState(initialTodos);

  function handleAddTodo(title) {
    setTodos((prevValue) => {
      return [
        ...prevValue,
        {
          id: nextId++,
          title: title,
          done: false,
        },
      ];
    });
  }

  function handleChangeTodo(nextTodo) {
    setTodos(
      todos.map((item) => {
        if (item.id === nextTodo.id) {
          return nextTodo;
        } else {
          return item;
        }
      })
    );
  }

  function handleDeleteTodo(todoId) {
    let newTodos = todos.filter((item) => {
      if (item.id !== todoId) {
        return item;
      }
    });

    setTodos(newTodos);
  }

  return (
    <>
      <AddTodo onAddTodo={handleAddTodo} />
      <TaskList
        todos={todos}
        onChangeTodo={handleChangeTodo}
        onDeleteTodo={handleDeleteTodo}
      />
    </>
  );
}
