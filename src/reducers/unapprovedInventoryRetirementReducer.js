import _ from "lodash";
import {
  FETCH_UNAPPROVEDSTOCKRETIREMENTS,
  FETCH_UNAPPROVEDSTOCKRETIREMENT,
  EDIT_UNAPPROVEDSTOCKRETIREMENT,
  DELETE_UNAPPROVEDSTOCKRETIREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNAPPROVEDSTOCKRETIREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_UNAPPROVEDSTOCKRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_UNAPPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_UNAPPROVEDSTOCKRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_UNAPPROVEDSTOCKRETIREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
