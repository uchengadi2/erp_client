import _ from "lodash";
import {
  CREATE_HRLEAVELEAVE,
  FETCH_HRLEAVELEAVES,
  FETCH_HRLEAVELEAVE,
  DELETE_HRLEAVELEAVE,
  EDIT_HRLEAVELEAVE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRLEAVELEAVES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRLEAVELEAVE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRLEAVELEAVE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRLEAVELEAVE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRLEAVELEAVE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
