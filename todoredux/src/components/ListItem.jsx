import React from "react";
import { useDispatch } from "react-redux";
import { toggleTodo } from "../store/actions/todosActions";

const ListItem = ({ id, content, done }) => {
  const dispatch = useDispatch();
  // console.log(done);

  const handleToggleTodo = () => {
    dispatch(toggleTodo(id));
  };

  return (
    <li onClick={handleToggleTodo}>
      <input onChange={handleToggleTodo} type="checkbox" checked={done} />
      {content}
    </li>
  );
};

export default ListItem;
