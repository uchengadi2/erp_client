import _ from "lodash";
import {
  CREATE_SCHEMECODE,
  FETCH_SCHEMECODES,
  FETCH_SCHEMECODE,
  DELETE_SCHEMECODE,
  EDIT_SCHEMECODE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SCHEMECODES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SCHEMECODE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SCHEMECODE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SCHEMECODE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SCHEMECODE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
