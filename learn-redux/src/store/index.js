import { createStore } from "redux";

const defaultState = {
  todos: ["makan"],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state, todos: state.todos.concat(action.newTodo) };

    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
