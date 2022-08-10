import _ from "lodash";
import {
  CREATE_QUALITYASSURANCE,
  FETCH_QUALITYASSURANCES,
  FETCH_QUALITYASSURANCE,
  DELETE_QUALITYASSURANCE,
  EDIT_QUALITYASSURANCE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUALITYASSURANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_QUALITYASSURANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_QUALITYASSURANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_QUALITYASSURANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_QUALITYASSURANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
