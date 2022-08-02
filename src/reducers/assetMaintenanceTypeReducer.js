import _ from "lodash";
import {
  CREATE_MAINTENANCETYPE,
  FETCH_MAINTENANCETYPES,
  FETCH_MAINTENANCETYPE,
  DELETE_MAINTENANCETYPE,
  EDIT_MAINTENANCETYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MAINTENANCETYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_MAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_MAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_MAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_MAINTENANCETYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
