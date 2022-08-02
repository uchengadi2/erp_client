import _ from "lodash";
import {
  CREATE_SUBGLCODE,
  FETCH_SUBGLCODES,
  FETCH_SUBGLCODE,
  DELETE_SUBGLCODE,
  EDIT_GLSUBCODE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUBGLCODES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SUBGLCODE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SUBGLCODE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_GLSUBCODE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SUBGLCODE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
