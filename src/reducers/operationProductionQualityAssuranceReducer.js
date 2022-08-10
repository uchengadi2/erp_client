import _ from "lodash";
import {
  CREATE_PRODUCTIONQUALITYASSURANCE,
  FETCH_PRODUCTIONQUALITYASSURANCES,
  FETCH_PRODUCTIONQUALITYASSURANCE,
  DELETE_PRODUCTIONQUALITYASSURANCE,
  EDIT_PRODUCTIONQUALITYASSURANCE,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PRODUCTIONQUALITYASSURANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_PRODUCTIONQUALITYASSURANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PRODUCTIONQUALITYASSURANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PRODUCTIONQUALITYASSURANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PRODUCTIONQUALITYASSURANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
