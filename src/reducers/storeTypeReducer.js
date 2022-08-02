import _ from "lodash";
import {
  CREATE_STORETYPE,
  FETCH_STORETYPES,
  FETCH_STORETYPE,
  DELETE_STORETYPE,
  EDIT_STORETYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STORETYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_STORETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STORETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STORETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STORETYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
