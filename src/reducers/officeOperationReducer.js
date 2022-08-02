import _ from "lodash";
import {
  CREATE_OFFICEOPERATION,
  FETCH_OFFICEOPERATIONS,
  FETCH_OFFICEOPERATION,
  DELETE_OFFICEOPERATION,
  EDIT_OFFICEOPERATION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OFFICEOPERATIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OFFICEOPERATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OFFICEOPERATION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OFFICEOPERATION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OFFICEOPERATION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
