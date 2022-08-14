import _ from "lodash";
import {
  CREATE_HRRECRUITMENTSELECTION,
  FETCH_HRRECRUITMENTSELECTIONS,
  FETCH_HRRECRUITMENTSELECTION,
  DELETE_HRRECRUITMENTSELECTION,
  EDIT_HRRECRUITMENTSELECTION,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRRECRUITMENTSELECTIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRRECRUITMENTSELECTION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRRECRUITMENTSELECTION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRRECRUITMENTSELECTION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRRECRUITMENTSELECTION:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
