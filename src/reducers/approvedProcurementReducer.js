import _ from "lodash";
import {
  CREATE_APPROVEDPROCUREMENT,
  FETCH_APPROVEDPROCUREMENTS,
  FETCH_APPROVEDPROCUREMENT,
  DELETE_APPROVEDPROCUREMENT,
  EDIT_APPROVEDPROCUREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_APPROVEDPROCUREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_APPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_APPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_APPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_APPROVEDPROCUREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
