import _ from "lodash";
import {
  CREATE_PROJECTCLOSURE,
  FETCH_PROJECTCLOSURES,
  FETCH_PROJECTCLOSURE,
  EDIT_PROJECTCLOSURE,
  DELETE_PROJECTCLOSURE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTCLOSURES:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTCLOSURE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTCLOSURE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTCLOSURE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTCLOSURE:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
