import _ from "lodash";
import {
  CREATE_STOREDISPOSITIONTYPE,
  FETCH_STOREDISPOSITIONTYPES,
  FETCH_STOREDISPOSITIONTYPE,
  DELETE_STOREDISPOSITIONTYPE,
  EDIT_STOREDISPOSITIONTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOREDISPOSITIONTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_STOREDISPOSITIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STOREDISPOSITIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STOREDISPOSITIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STOREDISPOSITIONTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
