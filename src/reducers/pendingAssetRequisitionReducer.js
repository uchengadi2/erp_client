import _ from "lodash";
import {
  FETCH_PENDINGASSETREQUISITIONS,
  FETCH_PENDINGASSETREQUISITION,
  DELETE_PENDINGASSETREQUISITION,
  EDIT_PENDINGASSETREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PENDINGASSETREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_PENDINGASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_PENDINGASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PENDINGASSETREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
