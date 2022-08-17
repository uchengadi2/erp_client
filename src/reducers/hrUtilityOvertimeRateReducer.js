import _ from "lodash";
import {
  CREATE_HRUTILITYOVERTIMERATE,
  FETCH_HRUTILITYOVERTIMERATES,
  FETCH_HRUTILITYOVERTIMERATE,
  DELETE_HRUTILITYOVERTIMERATE,
  EDIT_HRUTILITYOVERTIMERATE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRUTILITYOVERTIMERATES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRUTILITYOVERTIMERATE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRUTILITYOVERTIMERATE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRUTILITYOVERTIMERATE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRUTILITYOVERTIMERATE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
