import _ from "lodash";
import {
  CREATE_PROJECTPLANNINGSEQUENCING,
  FETCH_PROJECTPLANNINGSEQUENCINGS,
  FETCH_PROJECTPLANNINGSEQUENCING,
  EDIT_PROJECTPLANNINGSEQUENCING,
  DELETE_PROJECTPLANNINGSEQUENCING,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPLANNINGSEQUENCINGS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPLANNINGSEQUENCING:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPLANNINGSEQUENCING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPLANNINGSEQUENCING:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPLANNINGSEQUENCING:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
