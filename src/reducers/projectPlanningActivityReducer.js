import _ from "lodash";
import {
  CREATE_PROJECTPLANNINGACTIVITY,
  FETCH_PROJECTPLANNINGACTIVITIES,
  FETCH_PROJECTPLANNINGACTIVITY,
  EDIT_PROJECTPLANNINGACTIVITY,
  DELETE_PROJECTPLANNINGACTIVITY,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPLANNINGACTIVITIES:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPLANNINGACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPLANNINGACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPLANNINGACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPLANNINGACTIVITY:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
