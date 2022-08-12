import _ from "lodash";
import {
  CREATE_HRAPPRAISALSEASON,
  FETCH_HRAPPRAISALSEASONS,
  FETCH_HRAPPRAISALSEASON,
  DELETE_HRAPPRAISALSEASON,
  EDIT_HRAPPRAISALSEASON,
} from "./../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRAPPRAISALSEASONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRAPPRAISALSEASON:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRAPPRAISALSEASON:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRAPPRAISALSEASON:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRAPPRAISALSEASON:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
