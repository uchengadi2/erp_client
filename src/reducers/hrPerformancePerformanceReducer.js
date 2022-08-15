import _ from "lodash";
import {
  CREATE_HRPERFORMANCEPERFORMANCE,
  FETCH_HRPERFORMANCEPERFORMANCES,
  FETCH_HRPERFORMANCEPERFORMANCE,
  DELETE_HRPERFORMANCEPERFORMANCE,
  EDIT_HRPERFORMANCEPERFORMANCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRPERFORMANCEPERFORMANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRPERFORMANCEPERFORMANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRPERFORMANCEPERFORMANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRPERFORMANCEPERFORMANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRPERFORMANCEPERFORMANCE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
