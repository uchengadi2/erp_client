import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONLEAVEALLOWANCE,
  FETCH_HRCOMPENSATIONLEAVEALLOWANCES,
  FETCH_HRCOMPENSATIONLEAVEALLOWANCE,
  DELETE_HRCOMPENSATIONLEAVEALLOWANCE,
  EDIT_HRCOMPENSATIONLEAVEALLOWANCE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONLEAVEALLOWANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONLEAVEALLOWANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONLEAVEALLOWANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONLEAVEALLOWANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONLEAVEALLOWANCE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
