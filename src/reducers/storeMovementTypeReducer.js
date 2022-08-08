import _ from "lodash";
import {
  CREATE_STOREMOVEMENTTYPE,
  FETCH_STOREMOVEMENTTYPES,
  FETCH_STOREMOVEMENTTYPE,
  DELETE_STOREMOVEMENTTYPE,
  EDIT_STOREMOVEMENTTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOREMOVEMENTTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_STOREMOVEMENTTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STOREMOVEMENTTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STOREMOVEMENTTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STOREMOVEMENTTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
