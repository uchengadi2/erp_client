import _ from "lodash";
import {
  CREATE_SALESSALE,
  FETCH_SALESSALES,
  FETCH_SALESSALE,
  DELETE_SALESSALE,
  EDIT_SALESSALE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESSALES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESSALE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESSALE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESSALE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESSALE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
