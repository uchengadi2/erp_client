import _ from "lodash";
import {
  CREATE_STOREMAINTENANCETYPE,
  FETCH_STOREMAINTENANCETYPES,
  FETCH_STOREMAINTENANCETYPE,
  DELETE_STOREMAINTENANCETYPE,
  EDIT_STOREMAINTENANCETYPE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_STOREMAINTENANCETYPES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_STOREMAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_STOREMAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_STOREMAINTENANCETYPE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_STOREMAINTENANCETYPE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
