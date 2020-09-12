import React, { useState, useEffect } from "react";
import TodoItem from "../component/todoItem";

// UseStat berfungsi sebagai state pada functional componet

/**
 * Terdapat 2 Parameter pada useSate yaitu state itu sendiri[todos] dan fungsi untk mengubah isi state [setTodo]
 *
 * nilai yang terdapat pada useSate merupakan initial value dari state tersebut
 */

export default function Todo() {
  // useState
  const [todos, setTodos] = useState([
    {
      id: 0,
      todo: "makan",
    },
  ]);
  const [todo, setTodo] = useState("");

  const AddTodo = () => {
    const newTodo = {
      id: todos.length + 1,
      todo: todo,
    };
    setTodos(todos.concat(newTodo));
    setTodo("");
  };

  // useEffect
  useEffect(() => {
    console.log("=======> Component Did Mount");
  }, []);

  useEffect(() => {
    console.log("=======> Component Did Update");
  }, [todos]);

  useEffect(() => {
    return () => {
      console.log("====> Component Will Unmount");
    };
  }, []);
  return (
    <div>
      <h1>Todo Page</h1>
      <p>{todo}</p>
      <input
        type="text"
        onChange={(e) => setTodo(e.target.value)}
        value={todo}
      />
      <button onClick={AddTodo}>Add</button>
      <br />
      {todos.map((item, i) => {
        return <TodoItem name={item.todo} key={`item-${i}`} />;
      })}
      <br />
      <hr />
    </div>
  );
}
