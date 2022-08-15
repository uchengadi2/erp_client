import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONBONUS,
  FETCH_HRCOMPENSATIONBONUSES,
  FETCH_HRCOMPENSATIONBONUS,
  DELETE_HRCOMPENSATIONBONUS,
  EDIT_HRCOMPENSATIONBONUS,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONBONUSES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONBONUS:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONBONUS:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONBONUS:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONBONUS:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
