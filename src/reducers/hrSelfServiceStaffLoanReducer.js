import _ from "lodash";
import {
  CREATE_HRSELFSERVICESTAFFLOAN,
  FETCH_HRSELFSERVICESTAFFLOANS,
  FETCH_HRSELFSERVICESTAFFLOAN,
  DELETE_HRSELFSERVICESTAFFLOAN,
  EDIT_HRSELFSERVICESTAFFLOAN,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICESTAFFLOANS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICESTAFFLOAN:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICESTAFFLOAN:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICESTAFFLOAN:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICESTAFFLOAN:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
