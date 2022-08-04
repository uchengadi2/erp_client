import _ from "lodash";
import {
  FETCH_UNAPPROVEDSTOCKTRANSFERS,
  FETCH_UNAPPROVEDSTOCKTRANSFER,
  EDIT_UNAPPROVEDSTOCKTRANSFER,
  DELETE_UNAPPROVEDSTOCKTRANSFER,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNAPPROVEDSTOCKTRANSFERS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_UNAPPROVEDSTOCKTRANSFER:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_UNAPPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_UNAPPROVEDSTOCKTRANSFER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_UNAPPROVEDSTOCKTRANSFER:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
