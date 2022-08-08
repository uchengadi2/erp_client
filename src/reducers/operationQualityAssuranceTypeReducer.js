import _ from "lodash";
import {
  CREATE_QUALITYASSURANCETYPE,
  FETCH_QUALITYASSURANCETYPES,
  FETCH_QUALITYASSURANCETYPE,
  DELETE_QUALITYASSURANCETYPE,
  EDIT_QUALITYASSURANCETYPE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUALITYASSURANCETYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_QUALITYASSURANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_QUALITYASSURANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_QUALITYASSURANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_QUALITYASSURANCETYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
