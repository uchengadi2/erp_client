import _ from "lodash";
import {
  CREATE_HOSERVICEOUTLET,
  FETCH_HOSERVICEOUTLETS,
  FETCH_HOSERVICEOUTLET,
  DELETE_HOSERVICEOUTLET,
  EDIT_HOSERVICEOUTLET,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HOSERVICEOUTLETS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HOSERVICEOUTLET:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HOSERVICEOUTLET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HOSERVICEOUTLET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HOSERVICEOUTLET:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
