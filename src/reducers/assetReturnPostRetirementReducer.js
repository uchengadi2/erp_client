import _ from "lodash";
import {
  FETCH_RETURNPOSTASSETRETIREMENTS,
  FETCH_RETURNPOSTASSETRETIREMENT,
  DELETE_RETURNPOSTASSETRETIREMENT,
  EDIT_RETURNPOSTASSETRETIREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RETURNPOSTASSETRETIREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_RETURNPOSTASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_RETURNPOSTASSETRETIREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RETURNPOSTASSETRETIREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
