import _ from "lodash";
import {
  CREATE_HRSELFSERVICEAPPRAISAL,
  FETCH_HRSELFSERVICEAPPRAISALS,
  FETCH_HRSELFSERVICEAPPRAISAL,
  DELETE_HRSELFSERVICEAPPRAISAL,
  EDIT_HRSELFSERVICEAPPRAISAL,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRSELFSERVICEAPPRAISALS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRSELFSERVICEAPPRAISAL:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRSELFSERVICEAPPRAISAL:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRSELFSERVICEAPPRAISAL:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRSELFSERVICEAPPRAISAL:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
