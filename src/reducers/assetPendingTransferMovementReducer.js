import _ from "lodash";
import {
  FETCH_PENDINGTRANSFERASSETMOVEMENTS,
  FETCH_PENDINGTRANSFERASSETMOVEMENT,
  DELETE_PENDINGTRANSFERASSETMOVEMENT,
  EDIT_PENDINGTRANSFERASSETMOVEMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PENDINGTRANSFERASSETMOVEMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_PENDINGTRANSFERASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_PENDINGTRANSFERASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PENDINGTRANSFERASSETMOVEMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
