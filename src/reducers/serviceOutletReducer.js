import _ from "lodash";
import {
  CREATE_SERVICEOUTLET,
  FETCH_SERVICEOUTLETS,
  FETCH_SERVICEOUTLET,
  DELETE_SERVICEOUTLET,
  EDIT_SERVICEOUTLET,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SERVICEOUTLETS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SERVICEOUTLET:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SERVICEOUTLET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SERVICEOUTLET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SERVICEOUTLET:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
