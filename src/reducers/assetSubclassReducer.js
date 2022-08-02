import _ from "lodash";
import {
  CREATE_SUBCLASS,
  FETCH_SUBCLASSES,
  FETCH_SUBCLASS,
  DELETE_SUBCLASS,
  EDIT_SUBCLASS,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUBCLASSES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SUBCLASS:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SUBCLASS:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SUBCLASS:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SUBCLASS:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
