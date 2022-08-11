import _ from "lodash";
import {
  CREATE_PROJECTPROJECTBUDGETING,
  FETCH_PROJECTPROJECTBUDGETINGS,
  FETCH_PROJECTPROJECTBUDGETING,
  EDIT_PROJECTPROJECTBUDGETING,
  DELETE_PROJECTPROJECTBUDGETING,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTPROJECTBUDGETINGS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTPROJECTBUDGETING:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTPROJECTBUDGETING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTPROJECTBUDGETING:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTPROJECTBUDGETING:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
