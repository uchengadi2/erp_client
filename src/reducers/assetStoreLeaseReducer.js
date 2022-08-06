import _ from "lodash";
import {
  CREATE_LEASEASSETSTORE,
  FETCH_LEASEASSETSTORES,
  FETCH_LEASEASSETSTORE,
  DELETE_LEASEASSETSTORE,
  EDIT_LEASEASSETSTORE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LEASEASSETSTORES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_LEASEASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_LEASEASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_LEASEASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_LEASEASSETSTORE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
