import _ from "lodash";
import {
  CREATE_PRODUCTIONFINISHING,
  FETCH_PRODUCTIONFINISHINGS,
  FETCH_PRODUCTIONFINISHING,
  DELETE_PRODUCTIONFINISHING,
  EDIT_PRODUCTIONFINISHING,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTIONFINISHINGS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_PRODUCTIONFINISHING:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PRODUCTIONFINISHING:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PRODUCTIONFINISHING:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PRODUCTIONFINISHING:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
