import _ from "lodash";
import {
  CREATE_HRSELFSERVICELEAVE,
  FETCH_HRSELFSERVICELEAVES,
  FETCH_HRSELFSERVICELEAVE,
  DELETE_HRSELFSERVICELEAVE,
  EDIT_HRSELFSERVICELEAVE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICELEAVES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICELEAVE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICELEAVE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICELEAVE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICELEAVE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
