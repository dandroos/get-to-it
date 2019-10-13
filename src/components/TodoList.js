import React from "react";
import { connect } from "react-redux";
import Fade from "react-reveal/Fade";

import Todo from "./Todo";

function TodoList(props) {
  const todos = props.list.map((i, index) => (
    <Todo data={i} index={index} key={index} />
  ));

  return (
    <div
      style={{
        width: "100%"
      }}
    >
      {props.list.length ? (
        <ul
          style={{
            listStyle: "none",
            margin: 0,
            padding: 0,
            paddingTop: ".5rem"
          }}
        >
          {todos}
        </ul>
      ) : (
        <Fade>
          <div
            style={{
              textAlign: "center",
              padding: "1rem"
            }}
          >
            There are currently no todos
          </div>
        </Fade>
      )}
    </div>
  );
}

const mapStateToProps = state => ({
  ...state,
  list: state.todos.list
});

export default connect(mapStateToProps)(TodoList);
