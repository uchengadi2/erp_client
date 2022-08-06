import _ from "lodash";
import {
  CREATE_ASSETMOVEMENT,
  FETCH_ASSETMOVEMENTS,
  FETCH_ASSETMOVEMENT,
  DELETE_ASSETMOVEMENT,
  EDIT_ASSETMOVEMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETMOVEMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETMOVEMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
