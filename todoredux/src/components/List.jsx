import React from "react";
import { useSelector } from "react-redux";
import ListItem from "./ListItem";

const List = () => {
  const { todos } = useSelector((state) => state.todosState);
  // console.log(todos);
  return (
    <ul>
      {todos.map((elem) => (
        <ListItem key={elem.id} {...elem} />
      ))}
    </ul>
  );
};

export default List;
