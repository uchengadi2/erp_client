import _ from "lodash";
import {
  CREATE_SALESACCOUNT,
  FETCH_SALESACCOUNTS,
  FETCH_SALESACCOUNT,
  DELETE_SALESACCOUNT,
  EDIT_SALESACCOUNT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESACCOUNTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESACCOUNT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESACCOUNT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESACCOUNT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESACCOUNT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
