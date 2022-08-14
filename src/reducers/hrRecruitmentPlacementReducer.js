import _ from "lodash";
import {
  CREATE_HRRECRUITMENTPLACEMENT,
  FETCH_HRRECRUITMENTPLACEMENTS,
  FETCH_HRRECRUITMENTPLACEMENT,
  DELETE_HRRECRUITMENTPLACEMENT,
  EDIT_HRRECRUITMENTPLACEMENT,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRRECRUITMENTPLACEMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRRECRUITMENTPLACEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRRECRUITMENTPLACEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRRECRUITMENTPLACEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRRECRUITMENTPLACEMENT:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
