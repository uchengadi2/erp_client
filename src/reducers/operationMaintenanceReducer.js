import _ from "lodash";
import {
  CREATE_OPERATIONMAINTENANCE,
  FETCH_OPERATIONMAINTENANCES,
  FETCH_OPERATIONMAINTENANCE,
  DELETE_OPERATIONMAINTENANCE,
  EDIT_OPERATIONMAINTENANCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OPERATIONMAINTENANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OPERATIONMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OPERATIONMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OPERATIONMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OPERATIONMAINTENANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
