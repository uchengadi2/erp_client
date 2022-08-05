import _ from "lodash";
import {
  FETCH_PENDINGASSETRETIREMENTS,
  FETCH_PENDINGASSETRETIREMENT,
  DELETE_PENDINGASSETRETIREMENT,
  EDIT_PENDINGASSETRETIREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PENDINGASSETRETIREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_PENDINGASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_PENDINGASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PENDINGASSETRETIREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
