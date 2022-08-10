import _ from "lodash";
import {
  CREATE_OPERATIONOPERATION,
  FETCH_OPERATIONOPERATIONS,
  FETCH_OPERATIONOPERATION,
  DELETE_OPERATIONOPERATION,
  EDIT_OPERATIONOPERATION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OPERATIONOPERATIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OPERATIONOPERATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OPERATIONOPERATION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OPERATIONOPERATION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OPERATIONOPERATION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
