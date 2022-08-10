import _ from "lodash";
import {
  CREATE_OPERATIONPROCESSING,
  FETCH_OPERATIONPROCESSINGS,
  FETCH_OPERATIONPROCESSING,
  DELETE_OPERATIONPROCESSING,
  EDIT_OPERATIONPROCESSING,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OPERATIONPROCESSINGS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OPERATIONPROCESSING:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OPERATIONPROCESSING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OPERATIONPROCESSING:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OPERATIONPROCESSING:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
