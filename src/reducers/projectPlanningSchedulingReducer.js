import _ from "lodash";
import {
  CREATE_PROJECTPLANNINGSCHEDULING,
  FETCH_PROJECTPLANNINGSCHEDULINGS,
  FETCH_PROJECTPLANNINGSCHEDULING,
  EDIT_PROJECTPLANNINGSCHEDULING,
  DELETE_PROJECTPLANNINGSCHEDULING,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPLANNINGSCHEDULINGS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPLANNINGSCHEDULING:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPLANNINGSCHEDULING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPLANNINGSCHEDULING:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPLANNINGSCHEDULING:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
