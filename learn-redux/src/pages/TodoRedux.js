import React, { useState } from "react";
import TodoItem from "../component/todoItem";

import { useSelector, useDispatch } from "react-redux";

export default function TodoRedux() {
  const [inputTodo, setInputTodo] = useState("");

  // useSelector untuk mendapatkan state dari store
  // Lalu pilih state yang ingin dipanggil
  const todos = useSelector((state) => state.todos);

  // useDispatch untuk merubah data state yang terdapat pada store
  const dispatch = useDispatch();

  const AddTodo = () => {
    dispatch({
      type: "ADD_TODO",
      newTodo: inputTodo,
    });
    setInputTodo(" ");
  };

  const handleChange = (e) => {
    let newInputTodo = e.target.value;
    setInputTodo(newInputTodo);
  };
  return (
    <div>
      <h1>Todo Page</h1>
      <p>Input: {inputTodo}</p>
      <input type="text" onChange={handleChange} />
      <button onClick={AddTodo}>Add Todo</button>
      {/* {todos.map((item, i) => {
        return <p key={i}>{item.nama}</p>;
      })} */}
      <br />
      {JSON.stringify(todos)}
    </div>
  );
}
