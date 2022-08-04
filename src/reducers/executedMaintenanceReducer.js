import _ from "lodash";
import {
  CREATE_EXECUTEDMAINTENANCE,
  FETCH_EXECUTEDMAINTENANCES,
  FETCH_EXECUTEDMAINTENANCE,
  DELETE_EXECUTEDMAINTENANCE,
  EDIT_EXECUTEDMAINTENANCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXECUTEDMAINTENANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_EXECUTEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EXECUTEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_EXECUTEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EXECUTEDMAINTENANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
