import _ from "lodash";
import {
  CREATE_MEASUREMENTUNIT,
  FETCH_MEASUREMENTUNITS,
  FETCH_MEASUREMENTUNIT,
  DELETE_MEASUREMENTUNIT,
  EDIT_MEASUREMENTUNIT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_MEASUREMENTUNITS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_MEASUREMENTUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_MEASUREMENTUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_MEASUREMENTUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_MEASUREMENTUNIT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
