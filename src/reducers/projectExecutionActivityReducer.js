import _ from "lodash";
import {
  CREATE_PROJECTEXECUTIONACTIVITY,
  FETCH_PROJECTEXECUTIONACTIVITIES,
  FETCH_PROJECTEXECUTIONACTIVITY,
  EDIT_PROJECTEXECUTIONACTIVITY,
  DELETE_PROJECTEXECUTIONACTIVITY,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTEXECUTIONACTIVITIES:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTEXECUTIONACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTEXECUTIONACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTEXECUTIONACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTEXECUTIONACTIVITY:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
