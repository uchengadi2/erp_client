import _ from "lodash";
import {
  CREATE_TRANSFORMATIONPHASE,
  FETCH_TRANSFORMATIONPHASES,
  FETCH_TRANSFORMATIONPHASE,
  DELETE_TRANSFORMATIONPHASE,
  EDIT_TRANSFORMATIONPHASE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSFORMATIONPHASES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_TRANSFORMATIONPHASE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TRANSFORMATIONPHASE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TRANSFORMATIONPHASE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TRANSFORMATIONPHASE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
