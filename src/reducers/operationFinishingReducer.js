import _ from "lodash";
import {
  CREATE_FINISHING,
  FETCH_FINISHINGS,
  FETCH_FINISHING,
  DELETE_FINISHING,
  EDIT_FINISHING,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FINISHINGS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_FINISHING:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_FINISHING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_FINISHING:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FINISHING:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
