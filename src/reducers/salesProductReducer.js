import _ from "lodash";
import {
  CREATE_SALESPRODUCT,
  FETCH_SALESPRODUCTS,
  FETCH_SALESPRODUCT,
  DELETE_SALESPRODUCT,
  EDIT_SALESPRODUCT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESPRODUCTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESPRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESPRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESPRODUCT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESPRODUCT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
