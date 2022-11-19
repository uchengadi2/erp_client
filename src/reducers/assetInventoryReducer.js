import _ from "lodash";
import {
  CREATE_ASSETINVENTORY,
  FETCH_ASSETINVENTORIES,
  FETCH_ASSETINVENTORY,
  DELETE_ASSETINVENTORY,
  EDIT_ASSETINVENTORY,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETINVENTORIES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETINVENTORY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETINVENTORY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETINVENTORY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETINVENTORY:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
