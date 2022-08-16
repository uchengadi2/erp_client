import _ from "lodash";
import {
  CREATE_HRSELFSERVICESALARYADVANCE,
  FETCH_HRSELFSERVICESALARYADVANCES,
  FETCH_HRSELFSERVICESALARYADVANCE,
  DELETE_HRSELFSERVICESALARYADVANCE,
  EDIT_HRSELFSERVICESALARYADVANCE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICESALARYADVANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICESALARYADVANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICESALARYADVANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICESALARYADVANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICESALARYADVANCE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
