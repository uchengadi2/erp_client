import _ from "lodash";
import {
  CREATE_CONTACT,
  FETCH_CONTACTS,
  FETCH_CONTACT,
  DELETE_CONTACT,
  EDIT_CONTACT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CONTACTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_CONTACT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_CONTACT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
