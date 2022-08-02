import _ from "lodash";
import {
  CREATE_DEPRECIATIONTYPE,
  FETCH_DEPRECIATIONTYPES,
  FETCH_DEPRECIATIONTYPE,
  DELETE_DEPRECIATIONTYPE,
  EDIT_DEPRECIATIONTYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_DEPRECIATIONTYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_DEPRECIATIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_DEPRECIATIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_DEPRECIATIONTYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_DEPRECIATIONTYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
