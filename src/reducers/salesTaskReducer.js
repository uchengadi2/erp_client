import _ from "lodash";
import {
  CREATE_SALESTASK,
  FETCH_SALESTASKS,
  FETCH_SALESTASK,
  DELETE_SALESTASK,
  EDIT_SALESTASK,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESTASKS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESTASK:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESTASK:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESTASK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESTASK:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
