import _ from "lodash";
import {
  CREATE_QUALITYASSURANCEPHASEEVENT,
  FETCH_QUALITYASSURANCEPHASEEVENTS,
  FETCH_QUALITYASSURANCEPHASEEVENT,
  DELETE_QUALITYASSURANCEPHASEEVENT,
  EDIT_QUALITYASSURANCEPHASEEVENT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_QUALITYASSURANCEPHASEEVENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_QUALITYASSURANCEPHASEEVENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_QUALITYASSURANCEPHASEEVENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_QUALITYASSURANCEPHASEEVENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_QUALITYASSURANCEPHASEEVENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
