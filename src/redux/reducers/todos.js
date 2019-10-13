import { ADD_TODO, TOGGLE_COMPLETED_TODO, REMOVE_TODO } from "../types";

let list;

if (localStorage.getItem("get-to-it")) {
  list = JSON.parse(localStorage.getItem("get-to-it"));
} else {
  list = [];
}

const initialState = {
  list: list
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
    case TOGGLE_COMPLETED_TODO:
    case REMOVE_TODO:
      return {
        ...state,
        list: action.payload
      };
    default:
      return state;
  }
};
