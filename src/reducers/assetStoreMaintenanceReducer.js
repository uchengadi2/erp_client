import _ from "lodash";
import {
  CREATE_MAINTENANCEASSETSTORE,
  FETCH_MAINTENANCEASSETSTORES,
  FETCH_MAINTENANCEASSETSTORE,
  DELETE_MAINTENANCEASSETSTORE,
  EDIT_MAINTENANCEASSETSTORE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MAINTENANCEASSETSTORES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_MAINTENANCEASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_MAINTENANCEASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_MAINTENANCEASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_MAINTENANCEASSETSTORE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};