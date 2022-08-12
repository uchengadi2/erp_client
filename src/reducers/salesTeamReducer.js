import _ from "lodash";
import {
  CREATE_SALESTEAM,
  FETCH_SALESTEAMS,
  FETCH_SALESTEAM,
  DELETE_SALESTEAM,
  EDIT_SALESTEAM,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESTEAMS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESTEAM:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESTEAM:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESTEAM:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESTEAM:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
