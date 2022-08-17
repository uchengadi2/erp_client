import _ from "lodash";
import {
  CREATE_HRUTILITYBONUSRATE,
  FETCH_HRUTILITYBONUSRATES,
  FETCH_HRUTILITYBONUSRATE,
  DELETE_HRUTILITYBONUSRATE,
  EDIT_HRUTILITYBONUSRATE,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRUTILITYBONUSRATES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRUTILITYBONUSRATE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRUTILITYBONUSRATE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRUTILITYBONUSRATE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRUTILITYBONUSRATE:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
