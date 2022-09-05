import _ from "lodash";
import {
  CREATE_UNAPPROVEDPROCUREMENT,
  FETCH_UNAPPROVEDPROCUREMENTS,
  FETCH_UNAPPROVEDPROCUREMENT,
  DELETE_UNAPPROVEDPROCUREMENT,
  EDIT_UNAPPROVEDPROCUREMENT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_UNAPPROVEDPROCUREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_UNAPPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_UNAPPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_UNAPPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_UNAPPROVEDPROCUREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
