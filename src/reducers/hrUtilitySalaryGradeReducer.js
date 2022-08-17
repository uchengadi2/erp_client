import _ from "lodash";
import {
  CREATE_HRUTILITYSALARYGRADE,
  FETCH_HRUTILITYSALARYGRADES,
  FETCH_HRUTILITYSALARYGRADE,
  DELETE_HRUTILITYSALARYGRADE,
  EDIT_HRUTILITYSALARYGRADE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRUTILITYSALARYGRADES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRUTILITYSALARYGRADE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRUTILITYSALARYGRADE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRUTILITYSALARYGRADE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRUTILITYSALARYGRADE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
