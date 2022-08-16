import _ from "lodash";
import {
  CREATE_HRSELFSERVICEPAYSLIP,
  FETCH_HRSELFSERVICEPAYSLIPS,
  FETCH_HRSELFSERVICEPAYSLIP,
  DELETE_HRSELFSERVICEPAYSLIP,
  EDIT_HRSELFSERVICEPAYSLIP,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICEPAYSLIPS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICEPAYSLIP:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICEPAYSLIP:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICEPAYSLIP:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICEPAYSLIP:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
