import _ from "lodash";
import {
  CREATE_SALESINVOICE,
  FETCH_SALESINVOICES,
  FETCH_SALESINVOICE,
  DELETE_SALESINVOICE,
  EDIT_SALESINVOICE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESINVOICES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESINVOICE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESINVOICE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESINVOICE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESINVOICE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
