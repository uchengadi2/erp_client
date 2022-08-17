import _ from "lodash";
import {
  CREATE_HRUTILITYEXTRADEDUCTABLE,
  FETCH_HRUTILITYEXTRADEDUCTABLES,
  FETCH_HRUTILITYEXTRADEDUCTABLE,
  DELETE_HRUTILITYEXTRADEDUCTABLE,
  EDIT_HRUTILITYEXTRADEDUCTABLE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRUTILITYEXTRADEDUCTABLES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRUTILITYEXTRADEDUCTABLE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRUTILITYEXTRADEDUCTABLE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRUTILITYEXTRADEDUCTABLE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRUTILITYEXTRADEDUCTABLE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
