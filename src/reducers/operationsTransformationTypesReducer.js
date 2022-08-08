import _ from "lodash";
import {
  CREATE_TRANSFORMATIONTYPE,
  FETCH_TRANSFORMATIONTYPES,
  FETCH_TRANSFORMATIONTYPE,
  DELETE_TRANSFORMATIONTYPE,
  EDIT_TRANSFORMATIONTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSFORMATIONTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_TRANSFORMATIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TRANSFORMATIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TRANSFORMATIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TRANSFORMATIONTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
