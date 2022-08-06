import _ from "lodash";
import {
  CREATE_ASSETSTORESPACEALLOCATION,
  FETCH_ASSETSTORESPACEALLOCATIONS,
  FETCH_ASSETSTORESPACEALLOCATION,
  DELETE_ASSETSTORESPACEALLOCATION,
  EDIT_ASSETSTORESPACEALLOCATION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETSTORESPACEALLOCATIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETSTORESPACEALLOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETSTORESPACEALLOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETSTORESPACEALLOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETSTORESPACEALLOCATION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
