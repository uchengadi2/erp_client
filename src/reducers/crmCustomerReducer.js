import _ from "lodash";
import {
  CREATE_CUSTOMER,
  FETCH_CUSTOMERS,
  FETCH_CUSTOMER,
  DELETE_CUSTOMER,
  EDIT_CUSTOMER,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_CUSTOMER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CUSTOMER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CUSTOMER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CUSTOMER:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
