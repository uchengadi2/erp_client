import _ from "lodash";
import {
  FETCH_LOCATION,
  FETCH_LOCATIONS,
  EDIT_LOCATION_SUCCEEDED,
  EDIT_LOCATION_FAILED,
  DELETE_LOCATION,
  CREATE_LOCATION,
} from "../actions/types";

const initialState = {
  loading: true,
  status: null,
  error: null,
};

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_LOCATIONS:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_LOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_LOCATION:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_LOCATION_SUCCEEDED:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case EDIT_LOCATION_FAILED:
      return {
        ...state,
        [state.status]: action.status,
      };
    case DELETE_LOCATION:
      return _.omit(state, action.payload); //note that payload is just the city id
    default:
      return state;
  }
};
