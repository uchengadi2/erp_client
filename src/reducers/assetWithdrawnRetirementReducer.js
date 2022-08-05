import _ from "lodash";
import {
  FETCH_WITHDRAWNASSETRETIREMENTS,
  FETCH_WITHDRAWNASSETRETIREMENT,
  DELETE_WITHDRAWNASSETRETIREMENT,
  EDIT_WITHDRAWNASSETRETIREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WITHDRAWNASSETRETIREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_WITHDRAWNASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_WITHDRAWNASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_WITHDRAWNASSETRETIREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
