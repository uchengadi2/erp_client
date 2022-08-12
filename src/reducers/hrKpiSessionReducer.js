import _ from "lodash";
import {
  CREATE_HRKPISESSION,
  FETCH_HRKPISESSIONS,
  FETCH_HRKPISESSION,
  DELETE_HRKPISESSION,
  EDIT_HRKPISESSION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRKPISESSIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRKPISESSION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRKPISESSION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRKPISESSION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRKPISESSION:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
