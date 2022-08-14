import _ from "lodash";
import {
  CREATE_HRJOBDESCRIPTION,
  FETCH_HRJOBDESCRIPTIONS,
  FETCH_HRJOBDESCRIPTION,
  DELETE_HRJOBDESCRIPTION,
  EDIT_HRJOBDESCRIPTION,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRJOBDESCRIPTIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRJOBDESCRIPTION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRJOBDESCRIPTION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRJOBDESCRIPTION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRJOBDESCRIPTION:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
