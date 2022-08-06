import _ from "lodash";
import {
  CREATE_SELLASSETSTORE,
  FETCH_SELLASSETSTORES,
  FETCH_SELLASSETSTORE,
  DELETE_SELLASSETSTORE,
  EDIT_SELLASSETSTORE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_SELLASSETSTORES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_SELLASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_SELLASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_SELLASSETSTORE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_SELLASSETSTORE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
