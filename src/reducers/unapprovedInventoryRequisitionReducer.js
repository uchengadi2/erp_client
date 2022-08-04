import _ from "lodash";
import {
  FETCH_UNAPPROVEDSTOCKREQUISITIONS,
  FETCH_UNAPPROVEDSTOCKREQUISITION,
  EDIT_UNAPPROVEDSTOCKREQUISITION,
  DELETE_UNAPPROVEDSTOCKREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNAPPROVEDSTOCKREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_UNAPPROVEDSTOCKREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_UNAPPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_UNAPPROVEDSTOCKREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_UNAPPROVEDSTOCKREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
