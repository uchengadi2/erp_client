import _ from "lodash";
import {
  CREATE_UNAPPROVEDMAINTENANCE,
  FETCH_UNAPPROVEDMAINTENANCES,
  FETCH_UNAPPROVEDMAINTENANCE,
  DELETE_UNAPPROVEDMAINTENANCE,
  EDIT_UNAPPROVEDMAINTENANCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNAPPROVEDMAINTENANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_UNAPPROVEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_UNAPPROVEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_UNAPPROVEDMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_UNAPPROVEDMAINTENANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
