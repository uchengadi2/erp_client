import _ from "lodash";
import {
  FETCH_WITHDRAWNASSETDISPOSITIONS,
  FETCH_WITHDRAWNASSETDISPOSITION,
  DELETE_WITHDRAWNASSETDISPOSITION,
  EDIT_WITHDRAWNASSETDISPOSITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WITHDRAWNASSETDISPOSITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_WITHDRAWNASSETDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_WITHDRAWNASSETDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_WITHDRAWNASSETDISPOSITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
