import _ from "lodash";
import {
  CREATE_ASSETPROCUREMENT,
  FETCH_ASSETPROCUREMENTS,
  FETCH_ASSETPROCUREMENT,
  DELETE_ASSETPROCUREMENT,
  EDIT_ASSETPROCUREMENT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETPROCUREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETPROCUREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
