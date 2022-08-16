import _ from "lodash";
import {
  CREATE_HRSELFSERVICEOVERTIME,
  FETCH_HRSELFSERVICEOVERTIMES,
  FETCH_HRSELFSERVICEOVERTIME,
  DELETE_HRSELFSERVICEOVERTIME,
  EDIT_HRSELFSERVICEOVERTIME,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICEOVERTIMES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICEOVERTIME:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICEOVERTIME:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICEOVERTIME:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICEOVERTIME:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
