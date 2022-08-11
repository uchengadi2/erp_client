import _ from "lodash";
import {
  FETCH_PROJECTPROJECTRESOURCES,
  FETCH_PROJECTPROJECTRESOURCE,
  EDIT_PROJECTPROJECTRESOURCE,
  DELETE_PROJECTPROJECTRESOURCE,
  CREATE_PROJECTPROJECTRESOURCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPROJECTRESOURCES:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPROJECTRESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPROJECTRESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPROJECTRESOURCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPROJECTRESOURCE:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
