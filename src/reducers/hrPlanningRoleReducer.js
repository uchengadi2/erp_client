import _ from "lodash";
import {
  CREATE_HRROLE,
  FETCH_HRROLES,
  FETCH_HRROLE,
  DELETE_HRROLE,
  EDIT_HRROLE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRROLES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRROLE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRROLE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRROLE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRROLE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
