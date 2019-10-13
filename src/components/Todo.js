import React from "react";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { toggleCompletedTodo, removeTodo } from "../redux/actions";
import Fade from "react-reveal/Fade";
import ReactTooltip from "react-tooltip";
import moment from "moment";
import styled from "styled-components";

const StyledTodo = styled.span`
  transition: all 0.3s;

  :hover {
    background: darkgray;
    color: white;
  }
`;

const StyledDelete = styled.span`
  transition: all 0.3s;
  background: darkred;
  color: white;

  :hover {
    background: white;
    color: darkred;
  }
`;

function Todo(props) {
  const toggleComplete = () => {
    const newList = props.list.map((i, ind) => {
      if (ind === props.index) {
        return {
          ...i,
          completed: !i.completed
        };
      } else {
        return i;
      }
    });
    localStorage.setItem("get-to-it", JSON.stringify(newList));
    props.dispatch(toggleCompletedTodo(newList));
  };

  const remove = () => {
    const newList = props.list.filter((i, ind) => {
      console.log(i);
      console.log(ind);
      if (ind !== props.index) {
        return i;
      }
    });
    localStorage.setItem("get-to-it", JSON.stringify(newList));
    props.dispatch(removeTodo(newList));
  };

  let completedStyle;
  if (props.data.completed) {
    completedStyle = {
      color: "grey",
      textDecoration: "line-through"
    };
  }

  const todoDate = moment(props.data.date).fromNow();

  return (
    <Fade>
      <li
        style={{
          display: "grid",
          gridTemplateColumns: "auto min-content",
          gridGap: ".5rem",
          width: "100%",
          padding: ".35rem 0",
          margin: "0.0rem auto"
        }}
      >
        <ReactTooltip place="right" type="light" effect="float" />
        <StyledTodo
          data-tip={`added ${todoDate}`}
          style={{
            ...completedStyle,
            width: "100%",
            padding: ".5rem",
            boxShadow: "0 0 .25rem inset gray",
            display: "flex",
            alignItems: "center",
            background: "auto",
            cursor: "pointer"
          }}
          onClick={toggleComplete}
        >
          {props.data.description}
        </StyledTodo>
        <StyledDelete>
          <FontAwesomeIcon
            icon={faTimes}
            onClick={remove}
            size="lg"
            style={{
              cursor: "pointer",
              display: "inline-block",
              alignSelf: "center",
              justifySelf: "end",
              zIndex: 500,
              fontSize: "3rem",
              boxShadow: "0 0 .25rem gray",
              padding: 10
            }}
          />
        </StyledDelete>
      </li>
    </Fade>
  );
}

const mapStateToProps = state => ({
  list: state.todos.list
});

export default connect(mapStateToProps)(Todo);
