import _ from "lodash";
import {
  CREATE_HRUNIT,
  FETCH_HRUNITS,
  FETCH_HRUNIT,
  DELETE_HRUNIT,
  EDIT_HRUNIT,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRUNITS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRUNIT:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
