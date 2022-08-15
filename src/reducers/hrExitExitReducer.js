import _ from "lodash";
import {
  CREATE_HREXITEXIT,
  FETCH_HREXITEXITS,
  FETCH_HREXITEXIT,
  DELETE_HREXITEXIT,
  EDIT_HREXITEXIT,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HREXITEXITS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HREXITEXIT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HREXITEXIT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HREXITEXIT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HREXITEXIT:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
