import _ from "lodash";
import {
  CREATE_HRDIVISION,
  FETCH_HRDIVISIONS,
  FETCH_HRDIVISION,
  DELETE_HRDIVISION,
  EDIT_HRDIVISION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRDIVISIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRDIVISION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRDIVISION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRDIVISION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRDIVISION:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
