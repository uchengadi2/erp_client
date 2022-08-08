import _ from "lodash";
import {
  CREATE_QUALITYASSURANCEPHASE,
  FETCH_QUALITYASSURANCEPHASES,
  FETCH_QUALITYASSURANCEPHASE,
  DELETE_QUALITYASSURANCEPHASE,
  EDIT_QUALITYASSURANCEPHASE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUALITYASSURANCEPHASES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_QUALITYASSURANCEPHASE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_QUALITYASSURANCEPHASE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_QUALITYASSURANCEPHASE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_QUALITYASSURANCEPHASE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
