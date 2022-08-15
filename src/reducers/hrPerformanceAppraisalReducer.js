import _ from "lodash";
import {
  CREATE_HRPERFORMANCEAPPRAISAL,
  FETCH_HRPERFORMANCEAPPRAISALS,
  FETCH_HRPERFORMANCEAPPRAISAL,
  DELETE_HRPERFORMANCEAPPRAISAL,
  EDIT_HRPERFORMANCEAPPRAISAL,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRPERFORMANCEAPPRAISALS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRPERFORMANCEAPPRAISAL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRPERFORMANCEAPPRAISAL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRPERFORMANCEAPPRAISAL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRPERFORMANCEAPPRAISAL:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
