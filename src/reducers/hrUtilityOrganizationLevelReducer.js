import _ from "lodash";
import {
  CREATE_HRUTILITYORGANIZATIONLEVEL,
  FETCH_HRUTILITYORGANIZATIONLEVELS,
  FETCH_HRUTILITYORGANIZATIONLEVEL,
  DELETE_HRUTILITYORGANIZATIONLEVEL,
  EDIT_HRUTILITYORGANIZATIONLEVEL,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRUTILITYORGANIZATIONLEVELS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRUTILITYORGANIZATIONLEVEL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRUTILITYORGANIZATIONLEVEL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRUTILITYORGANIZATIONLEVEL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRUTILITYORGANIZATIONLEVEL:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
