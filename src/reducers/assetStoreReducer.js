import _ from "lodash";
import {
  CREATE_ASSETSTORE,
  FETCH_ASSETSTORES,
  FETCH_ASSETSTORE,
  DELETE_ASSETSTORE,
  EDIT_ASSETSTORE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETSTORES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETSTORE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
