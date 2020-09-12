import React, { useState } from "react";
import "./App.css";
import Todo from "./pages/Todo";
import UserList from "./component/user";

import TodoRedux from "./pages/TodoRedux";

import { Provider } from "react-redux";
import store from "./store";

function App() {
  const [toggle, setToggle] = useState(false);
  return (
    <Provider store={store}>
      <div className="App">
        {/* <button onClick={() => setToggle(!toggle)}>Toggle Todo</button>
      {toggle && <Todo />}
      <UserList /> */}

        <TodoRedux />
      </div>
    </Provider>
  );
}

export default App;
