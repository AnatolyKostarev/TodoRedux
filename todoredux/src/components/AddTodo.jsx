import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/actions/todosActions";

const AddTodo = () => {
  const dispatch = useDispatch();
  const [value, setValue] = React.useState("");

  const handleChange = (e) => setValue(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTodo(value));
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} onChange={handleChange} />
      <button disabled={!value.trim()} type="submit">
        Add todo
      </button>
    </form>
  );
};

export default AddTodo;
