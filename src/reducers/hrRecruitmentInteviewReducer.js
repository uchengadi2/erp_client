import _ from "lodash";
import {
  CREATE_HRRECRUITMENTINTERVIEW,
  FETCH_HRRECRUITMENTINTERVIEWS,
  FETCH_HRRECRUITMENTINTERVIEW,
  DELETE_HRRECRUITMENTINTERVIEW,
  EDIT_HRRECRUITMENTINTERVIEW,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRRECRUITMENTINTERVIEWS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRRECRUITMENTINTERVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRRECRUITMENTINTERVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRRECRUITMENTINTERVIEW:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRRECRUITMENTINTERVIEW:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
