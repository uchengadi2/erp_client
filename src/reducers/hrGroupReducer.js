import _ from "lodash";
import {
  CREATE_HRGROUP,
  FETCH_HRGROUPS,
  FETCH_HRGROUP,
  DELETE_HRGROUP,
  EDIT_HRGROUP,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRGROUPS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRGROUP:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRGROUP:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRGROUP:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRGROUP:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
