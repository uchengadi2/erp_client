import _ from "lodash";
import {
  CREATE_OPERATIONMAINTENANCETYPE,
  FETCH_OPERATIONMAINTENANCETYPES,
  FETCH_OPERATIONMAINTENANCETYPE,
  DELETE_OPERATIONMAINTENANCETYPE,
  EDIT_OPERATIONMAINTENANCETYPE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OPERATIONMAINTENANCETYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OPERATIONMAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OPERATIONMAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OPERATIONMAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OPERATIONMAINTENANCETYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
