import _ from "lodash";
import {
  CREATE_HRPLANNINGSKILLSET,
  FETCH_HRPLANNINGSKILLSETS,
  FETCH_HRPLANNINGSKILLSET,
  DELETE_HRPLANNINGSKILLSET,
  EDIT_HRPLANNINGSKILLSET,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRPLANNINGSKILLSETS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRPLANNINGSKILLSET:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRPLANNINGSKILLSET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRPLANNINGSKILLSET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRPLANNINGSKILLSET:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
