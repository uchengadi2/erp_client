import _ from "lodash";
import {
  CREATE_ASSETTYPE,
  FETCH_ASSETTYPES,
  FETCH_ASSETTYPE,
  DELETE_ASSETTYPE,
  EDIT_ASSETTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
