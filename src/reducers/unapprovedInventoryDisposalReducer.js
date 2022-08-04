import _ from "lodash";
import {
  FETCH_UNAPPROVEDSTOCKDISPOSITIONS,
  FETCH_UNAPPROVEDSTOCKDISPOSITION,
  EDIT_UNAPPROVEDSTOCKDISPOSITION,
  DELETE_UNAPPROVEDSTOCKDISPOSITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNAPPROVEDSTOCKDISPOSITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_UNAPPROVEDSTOCKDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_UNAPPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_UNAPPROVEDSTOCKDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_UNAPPROVEDSTOCKDISPOSITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
