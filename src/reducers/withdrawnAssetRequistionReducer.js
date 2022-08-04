import _ from "lodash";
import {
  FETCH_WITHDRAWNASSETREQUISITIONS,
  FETCH_WITHDRAWNASSETREQUISITION,
  DELETE_WITHDRAWNASSETREQUISITION,
  EDIT_WITHDRAWNASSETREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_WITHDRAWNASSETREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_WITHDRAWNASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_WITHDRAWNASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_WITHDRAWNASSETREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
