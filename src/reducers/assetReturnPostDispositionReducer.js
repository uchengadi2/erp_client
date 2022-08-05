import _ from "lodash";
import {
  FETCH_RETURNASSETPOSTDISPOSITIONS,
  FETCH_RETURNASSETPOSTDISPOSITION,
  DELETE_RETURNASSETPOSTDISPOSITION,
  EDIT_RETURNASSETPOSTDISPOSITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RETURNASSETPOSTDISPOSITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_RETURNASSETPOSTDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_RETURNASSETPOSTDISPOSITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RETURNASSETPOSTDISPOSITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
