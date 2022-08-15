import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONSALARYADVANCE,
  FETCH_HRCOMPENSATIONSALARYADVANCES,
  FETCH_HRCOMPENSATIONSALARYADVANCE,
  DELETE_HRCOMPENSATIONSALARYADVANCE,
  EDIT_HRCOMPENSATIONSALARYADVANCE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONSALARYADVANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONSALARYADVANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONSALARYADVANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONSALARYADVANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONSALARYADVANCE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
