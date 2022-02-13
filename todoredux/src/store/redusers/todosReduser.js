import { ADD_TODO, TOGGLE_TODO } from "../constants";

const initialState = {
  todos: [],
};

export default function todosReduser(state = initialState, { type, payload }) {
  if (type === ADD_TODO) {
    const todos = [...state.todos];
    todos.push({ id: +new Date(), content: payload, done: false });
    return { ...state, todos };
  } else if (type === TOGGLE_TODO) {
    const todos = JSON.parse(JSON.stringify(state.todos));
    const todoIndex = todos.findIndex((item) => item.id === payload);
    todos[todoIndex].done = !todos[todoIndex].done;
    return { ...state, todos };
  } else {
    return state;
  }
}
