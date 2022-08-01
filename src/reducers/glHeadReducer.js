import _ from "lodash";
import {
  CREATE_GLCODE,
  FETCH_GLCODES,
  FETCH_GLCODE,
  DELETE_GLCODE,
  EDIT_GLCODE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_GLCODES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_GLCODE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_GLCODE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_GLCODE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_GLCODE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
