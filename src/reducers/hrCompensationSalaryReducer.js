import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONSALARY,
  FETCH_HRCOMPENSATIONSALARYS,
  FETCH_HRCOMPENSATIONSALARY,
  DELETE_HRCOMPENSATIONSALARY,
  EDIT_HRCOMPENSATIONSALARY,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONSALARYS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONSALARY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONSALARY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONSALARY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONSALARY:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
