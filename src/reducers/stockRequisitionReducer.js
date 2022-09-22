import _ from "lodash";
import {
  CREATE_STOCKREQUISITION,
  FETCH_STOCKREQUISITIONS,
  FETCH_STOCKREQUISITION,
  DELETE_STOCKREQUISITION,
  EDIT_STOCKREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOCKREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_STOCKREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STOCKREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STOCKREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STOCKREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
