import { ADD_TODO, TOGGLE_TODO } from "../constants";

export const addTodo = (content) => ({
  type: ADD_TODO,
  payload: content,
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  payload: id,
});
