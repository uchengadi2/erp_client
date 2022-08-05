import _ from "lodash";
import {
  FETCH_ASSETRETIREMENTS,
  FETCH_ASSETRETIREMENT,
  DELETE_ASSETRETIREMENT,
  EDIT_ASSETRETIREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETRETIREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETRETIREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
