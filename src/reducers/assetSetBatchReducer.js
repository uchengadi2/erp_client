import _ from "lodash";
import {
  CREATE_ASSETSETBATCH,
  FETCH_ASSETSETBATCHES,
  FETCH_ASSETSETBATCH,
  DELETE_ASSETSETBATCH,
  EDIT_ASSETSETBATCH,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETSETBATCHES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETSETBATCH:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETSETBATCH:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETSETBATCH:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETSETBATCH:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
