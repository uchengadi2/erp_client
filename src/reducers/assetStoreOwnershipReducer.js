import _ from "lodash";
import {
  CREATE_OWNERSHIPASSETSTORE,
  FETCH_OWNERSHIPASSETSTORES,
  FETCH_OWNERSHIPASSETSTORE,
  DELETE_OWNERSHIPASSETSTORE,
  EDIT_OWNERSHIPASSETSTORE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OWNERSHIPASSETSTORES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OWNERSHIPASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OWNERSHIPASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OWNERSHIPASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OWNERSHIPASSETSTORE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
