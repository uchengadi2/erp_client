import _ from "lodash";
import {
  CREATE_PROJECTMONITORINGTASK,
  FETCH_PROJECTMONITORINGTASKS,
  FETCH_PROJECTMONITORINGTASK,
  EDIT_PROJECTMONITORINGTASK,
  DELETE_PROJECTMONITORINGTASK,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTMONITORINGTASKS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTMONITORINGTASK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTMONITORINGTASK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTMONITORINGTASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTMONITORINGTASK:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
