import _ from "lodash";
import {
  FETCH_ABORTEDASSETREQUISITIONS,
  FETCH_ABORTEDASSETREQUISITION,
  DELETE_ABORTEDASSETREQUISITION,
  EDIT_ABORTEDASSETREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ABORTEDASSETREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ABORTEDASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_ABORTEDASSETREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ABORTEDASSETREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
