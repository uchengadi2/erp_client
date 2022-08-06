import _ from "lodash";
import {
  CREATE_ASSETSTORECLOSURE,
  FETCH_ASSETSTORECLOSURES,
  FETCH_ASSETSTORECLOSURE,
  DELETE_ASSETSTORECLOSURE,
  EDIT_ASSETSTORECLOSURE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETSTORECLOSURES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETSTORECLOSURE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETSTORECLOSURE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETSTORECLOSURE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETSTORECLOSURE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
