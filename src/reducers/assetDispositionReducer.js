import _ from "lodash";
import {
  FETCH_ASSETDISPOSITIONS,
  FETCH_ASSETDISPOSITION,
  DELETE_ASSETDISPOSITION,
  EDIT_ASSETDISPOSITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETDISPOSITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETDISPOSITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
