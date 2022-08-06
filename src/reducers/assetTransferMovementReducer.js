import _ from "lodash";
import {
  CREATE_TRANSFERASSETMOVEMENT,
  FETCH_TRANSFERASSETMOVEMENTS,
  FETCH_TRANSFERASSETMOVEMENT,
  DELETE_TRANSFERASSETMOVEMENT,
  EDIT_TRANSFERASSETMOVEMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_TRANSFERASSETMOVEMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_TRANSFERASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_TRANSFERASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_TRANSFERASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_TRANSFERASSETMOVEMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
