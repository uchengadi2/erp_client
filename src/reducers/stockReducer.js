import _ from "lodash";
import {
  CREATE_STOCK,
  FETCH_STOCKS,
  FETCH_STOCK,
  DELETE_STOCK,
  EDIT_STOCK,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOCKS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_STOCK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STOCK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STOCK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STOCK:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
