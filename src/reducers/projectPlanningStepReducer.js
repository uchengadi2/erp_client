import _ from "lodash";
import {
  CREATE_PROJECTPLANNINGSTEP,
  FETCH_PROJECTPLANNINGSTEPS,
  FETCH_PROJECTPLANNINGSTEP,
  EDIT_PROJECTPLANNINGSTEP,
  DELETE_PROJECTPLANNINGSTEP,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPLANNINGSTEPS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPLANNINGSTEP:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPLANNINGSTEP:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPLANNINGSTEP:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPLANNINGSTEP:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
