import _ from "lodash";
import {
  CREATE_APPROVEDMAINTENANCE,
  FETCH_APPROVEDMAINTENANCES,
  FETCH_APPROVEDMAINTENANCE,
  DELETE_APPROVEDMAINTENANCE,
  EDIT_APPROVEDMAINTENANCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_APPROVEDMAINTENANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_APPROVEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_APPROVEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_APPROVEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_APPROVEDMAINTENANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
