import _ from "lodash";
import {
  FETCH_PENDINGASSETDISPOSITIONS,
  FETCH_PENDINGASSETDISPOSITION,
  DELETE_PENDINGASSETDISPOSITION,
  EDIT_PENDINGASSETDISPOSITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PENDINGASSETDISPOSITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_PENDINGASSETDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_PENDINGASSETDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PENDINGASSETDISPOSITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
