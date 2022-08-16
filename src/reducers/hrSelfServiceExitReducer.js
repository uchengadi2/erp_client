import _ from "lodash";
import {
  CREATE_HRSELFSERVICEEXIT,
  FETCH_HRSELFSERVICEEXITS,
  FETCH_HRSELFSERVICEEXIT,
  DELETE_HRSELFSERVICEEXIT,
  EDIT_HRSELFSERVICEEXIT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICEEXITS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICEEXIT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICEEXIT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICEEXIT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICEEXIT:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
