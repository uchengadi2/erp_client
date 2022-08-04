import _ from "lodash";
import {
  FETCH_RETURNASSETPOSTREQUISITIONS,
  FETCH_RETURNASSETPOSTREQUISITION,
  DELETE_RETURNASSETPOSTREQUISITION,
  EDIT_RETURNASSETPOSTREQUISITION,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RETURNASSETPOSTREQUISITIONS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_RETURNASSETPOSTREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_RETURNASSETPOSTREQUISITION:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RETURNASSETPOSTREQUISITION:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
