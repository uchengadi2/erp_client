import _ from "lodash";
import {
  CREATE_HRCOMPENSATIONCERTIFICATEREFUND,
  FETCH_HRCOMPENSATIONCERTIFICATEREFUNDS,
  FETCH_HRCOMPENSATIONCERTIFICATEREFUND,
  DELETE_HRCOMPENSATIONCERTIFICATEREFUND,
  EDIT_HRCOMPENSATIONCERTIFICATEREFUND,
} from "../actions/types";

// const INITIALSTATE = {
//   status: null,
//   data: {},
// };

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_HRCOMPENSATIONCERTIFICATEREFUNDS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_HRCOMPENSATIONCERTIFICATEREFUND:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_HRCOMPENSATIONCERTIFICATEREFUND:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_HRCOMPENSATIONCERTIFICATEREFUND:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_HRCOMPENSATIONCERTIFICATEREFUND:
      return _.omit(state, action.payload); //note that payload is just the state id
    default:
      return state;
  }
};
