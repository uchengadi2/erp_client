import _ from "lodash";
import {
  CREATE_OTHERASSET,
  FETCH_OTHERASSETS,
  FETCH_OTHERASSET,
  DELETE_OTHERASSET,
  EDIT_OTHERASSET,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OTHERASSETS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OTHERASSET:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OTHERASSET:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OTHERASSET:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OTHERASSET:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
