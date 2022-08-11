import _ from "lodash";
import {
  CREATE_PROJECTMONITORINGACTIVITY,
  FETCH_PROJECTMONITORINGACTIVITIES,
  FETCH_PROJECTMONITORINGACTIVITY,
  EDIT_PROJECTMONITORINGACTIVITY,
  DELETE_PROJECTMONITORINGACTIVITY,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_PROJECTMONITORINGACTIVITIES:
      //console.log("this state is:", state);
      return { ...state, ..._.mapKeys(action.payload, "id") };
    case FETCH_PROJECTMONITORINGACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_PROJECTMONITORINGACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_PROJECTMONITORINGACTIVITY:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_PROJECTMONITORINGACTIVITY:
      return _.omit(state, action.payload); //note that payload is just the product id
    default:
      return state;
  }
};
