import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONOVERTIME,
  FETCH_HRCOMPENSATIONOVERTIMES,
  FETCH_HRCOMPENSATIONOVERTIME,
  DELETE_HRCOMPENSATIONOVERTIME,
  EDIT_HRCOMPENSATIONOVERTIME,
} from "../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONOVERTIMES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONOVERTIME:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONOVERTIME:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONOVERTIME:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONOVERTIME:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
