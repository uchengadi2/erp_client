import _ from "lodash";
import {
  CREATE_HREXITCLEARANCE,
  FETCH_HREXITCLEARANCES,
  FETCH_HREXITCLEARANCE,
  DELETE_HREXITCLEARANCE,
  EDIT_HREXITCLEARANCE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HREXITCLEARANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HREXITCLEARANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HREXITCLEARANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HREXITCLEARANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HREXITCLEARANCE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
