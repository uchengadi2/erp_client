import _ from "lodash";
import {
  CREATE_TRANSFORMATIONPHASEEVENT,
  FETCH_TRANSFORMATIONPHASEEVENTS,
  FETCH_TRANSFORMATIONPHASEEVENT,
  DELETE_TRANSFORMATIONPHASEEVENT,
  EDIT_TRANSFORMATIONPHASEEVENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSFORMATIONPHASEEVENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_TRANSFORMATIONPHASEEVENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TRANSFORMATIONPHASEEVENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TRANSFORMATIONPHASEEVENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TRANSFORMATIONPHASEEVENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
