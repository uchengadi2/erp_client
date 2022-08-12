import _ from "lodash";
import {
  CREATE_SALESTEAMMEMBER,
  FETCH_SALESTEAMMEMBERS,
  FETCH_SALESTEAMMEMBER,
  DELETE_SALESTEAMMEMBER,
  EDIT_SALESTEAMMEMBER,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SALESTEAMMEMBERS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SALESTEAMMEMBER:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SALESTEAMMEMBER:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SALESTEAMMEMBER:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SALESTEAMMEMBER:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
