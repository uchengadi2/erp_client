import _ from "lodash";
import {
  FETCH_ASSETREQUISITIONS,
  FETCH_ASSETREQUISITION,
  DELETE_ASSETREQUISITION,
  EDIT_ASSETREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
