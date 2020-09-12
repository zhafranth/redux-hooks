import React, { useState } from "react";
import "./App.css";
import Todo from "./pages/Todo";
import UserList from "./component/user";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className="App">
      <button onClick={() => setToggle(!toggle)}>Toggle Todo</button>
      {toggle && <Todo />}
      <UserList />
    </div>
  );
}

export default App;
