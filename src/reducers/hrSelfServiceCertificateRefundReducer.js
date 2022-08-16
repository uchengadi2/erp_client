import _ from "lodash";
import {
  CREATE_HRSELFSERVICECERTREFUND,
  FETCH_HRSELFSERVICECERTREFUNDS,
  FETCH_HRSELFSERVICECERTREFUND,
  DELETE_HRSELFSERVICECERTREFUND,
  EDIT_HRSELFSERVICECERTREFUND,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICECERTREFUNDS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICECERTREFUND:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICECERTREFUND:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICECERTREFUND:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICECERTREFUND:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
