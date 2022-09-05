import _ from "lodash";
import {
  CREATE_ASSETSET,
  FETCH_ASSETSETS,
  FETCH_ASSETSET,
  DELETE_ASSETSET,
  EDIT_ASSETSET,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETSETS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETSET:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETSET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETSET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETSET:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
