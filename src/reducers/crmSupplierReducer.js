import _ from "lodash";
import {
  CREATE_SUPPLIER,
  FETCH_SUPPLIERS,
  FETCH_SUPPLIER,
  DELETE_SUPPLIER,
  EDIT_SUPPLIER,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUPPLIERS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SUPPLIER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SUPPLIER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SUPPLIER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SUPPLIER:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
