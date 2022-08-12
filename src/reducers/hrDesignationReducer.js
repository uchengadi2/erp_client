import _ from "lodash";
import {
  CREATE_HRDESIGNATION,
  FETCH_HRDESIGNATIONS,
  FETCH_HRDESIGNATION,
  DELETE_HRDESIGNATION,
  EDIT_HRDESIGNATION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRDESIGNATIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRDESIGNATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRDESIGNATION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRDESIGNATION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRDESIGNATION:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
