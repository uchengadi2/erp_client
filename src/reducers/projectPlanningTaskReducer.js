import _ from "lodash";
import {
  CREATE_PROJECTPLANNINGTASK,
  FETCH_PROJECTPLANNINGTASKS,
  FETCH_PROJECTPLANNINGTASK,
  EDIT_PROJECTPLANNINGTASK,
  DELETE_PROJECTPLANNINGTASK,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPLANNINGTASKS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPLANNINGTASK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPLANNINGTASK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPLANNINGTASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPLANNINGTASK:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
