import _ from "lodash";
import {
  CREATE_HRRECRUITMENTINITIATION,
  FETCH_HRRECRUITMENTINITIATIONS,
  FETCH_HRRECRUITMENTINITIATION,
  DELETE_HRRECRUITMENTINITIATION,
  EDIT_HRRECRUITMENTINITIATION,
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRRECRUITMENTINITIATIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRRECRUITMENTINITIATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRRECRUITMENTINITIATION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRRECRUITMENTINITIATION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRRECRUITMENTINITIATION:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
