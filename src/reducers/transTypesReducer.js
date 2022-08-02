import _ from "lodash";
import {
  CREATE_TRANSTYPE,
  FETCH_TRANSTYPES,
  FETCH_TRANSTYPE,
  DELETE_TRANSTYPE,
  EDIT_TRANSTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_TRANSTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TRANSTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TRANSTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TRANSTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};