import _ from "lodash";
import {
  CREATE_ASSETINVENTORYTYPE,
  FETCH_ASSETINVENTORYTYPES,
  FETCH_ASSETINVENTORYTYPE,
  DELETE_ASSETINVENTORYTYPE,
  EDIT_ASSETINVENTORYTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETINVENTORYTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETINVENTORYTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETINVENTORYTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETINVENTORYTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETINVENTORYTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
