import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";
import styled from "styled-components";

function AddToDo(props) {
  const [inputValue, setInputValue] = useState("");

  const textInput = React.createRef();

  const handleChange = e => {
    if (inputValue.length < 50) {
      setInputValue(e.target.value);
    }
  };
  const handleSubmit = e => {
    e.preventDefault();
    if (inputValue) {
      const todo = {
        description: inputValue,
        date: new Date(),
        completed: false
      };
      const newList = [...props.list, todo];
      localStorage.setItem("get-to-it", JSON.stringify(newList));
      props.dispatch(addTodo(newList));
      setInputValue("");
      textInput.current.focus();
    }
  };

  const AddButton = styled.input`
    background: lightgrey;
    cursor: pointer;
    transition: all 0.2s;
    color: dimgray;
    border: none;
    box-shadow: 0 0 0.2rem gray;
    font-size: 0.9rem;
    text-transform: lowercase;

    :hover {
      box-shadow: 0 0 0.1rem gray;
    }
  `;

  return (
    <div style={{}}>
      <form
        onSubmit={handleSubmit}
        style={{
          display: "grid",
          gridTemplateColumns: "80% 20%"
        }}
      >
        <input
          type="text"
          value={inputValue}
          onChange={handleChange}
          ref={textInput}
          style={{
            padding: ".65rem",
            fontSize: "1.75rem",
            boxShadow: "0 0 .25rem inset gray"
          }}
        />
        <AddButton type="submit" value="Add" />
      </form>
    </div>
  );
}
const mapStateToProps = state => ({
  list: state.todos.list
});

export default connect(mapStateToProps)(AddToDo);
