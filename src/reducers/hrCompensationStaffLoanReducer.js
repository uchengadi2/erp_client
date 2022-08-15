import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONSTAFFLOAN,
  FETCH_HRCOMPENSATIONSTAFFLOANS,
  FETCH_HRCOMPENSATIONSTAFFLOAN,
  DELETE_HRCOMPENSATIONSTAFFLOAN,
  EDIT_HRCOMPENSATIONSTAFFLOAN,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONSTAFFLOANS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONSTAFFLOAN:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONSTAFFLOAN:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONSTAFFLOAN:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONSTAFFLOAN:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
