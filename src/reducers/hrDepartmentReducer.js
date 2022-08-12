import _ from "lodash";
import {
  CREATE_HRDEPARTMENT,
  FETCH_HRDEPARTMENTS,
  FETCH_HRDEPARTMENT,
  DELETE_HRDEPARTMENT,
  EDIT_HRDEPARTMENT,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRDEPARTMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRDEPARTMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRDEPARTMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRDEPARTMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRDEPARTMENT:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
