import _ from "lodash";
import {
  CREATE_FINISHINGTYPE,
  FETCH_FINISHINGTYPES,
  FETCH_FINISHINGTYPE,
  DELETE_FINISHINGTYPE,
  EDIT_FINISHINGTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_FINISHINGTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_FINISHINGTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_FINISHINGTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_FINISHINGTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_FINISHINGTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
