import _ from "lodash";
import {
  CREATE_PROJECTPROJECT,
  FETCH_PROJECTPROJECTS,
  FETCH_PROJECTPROJECT,
  EDIT_PROJECTPROJECT,
  DELETE_PROJECTPROJECT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPROJECTS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPROJECT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPROJECT:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
