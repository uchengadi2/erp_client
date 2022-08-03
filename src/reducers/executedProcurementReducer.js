import _ from "lodash";
import {
  CREATE_EXECAPPROVEDPROCUREMENT,
  FETCH_EXECAPPROVEDPROCUREMENTS,
  FETCH_EXECAPPROVEDPROCUREMENT,
  DELETE_EXECAPPROVEDPROCUREMENT,
  EDIT_EXECAPPROVEDPROCUREMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_EXECAPPROVEDPROCUREMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_EXECAPPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_EXECAPPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_EXECAPPROVEDPROCUREMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_EXECAPPROVEDPROCUREMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
