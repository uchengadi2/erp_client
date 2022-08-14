import _ from "lodash";
import {
  CREATE_HRRECRUITMENTONBOARD,
  FETCH_HRRECRUITMENTONBOARDS,
  FETCH_HRRECRUITMENTONBOARD,
  DELETE_HRRECRUITMENTONBOARD,
  EDIT_HRRECRUITMENTONBOARD,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRRECRUITMENTONBOARDS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRRECRUITMENTONBOARD:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRRECRUITMENTONBOARD:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRRECRUITMENTONBOARD:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRRECRUITMENTONBOARD:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
