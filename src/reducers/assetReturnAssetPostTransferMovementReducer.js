import _ from "lodash";
import {
  FETCH_RETURNASSETPOSTTRANSFERMOVEMENTS,
  FETCH_RETURNASSETPOSTTRANSFERMOVEMENT,
  DELETE_RETURNASSETPOSTTRANSFERMOVEMENT,
  EDIT_RETURNASSETPOSTTRANSERMOVEMENT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_RETURNASSETPOSTTRANSFERMOVEMENTS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_RETURNASSETPOSTTRANSFERMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    // case CREATE_APPROVEDMAINTENANCE:
    //   return { ...state, [action.payload.id]: action.payload };
    case EDIT_RETURNASSETPOSTTRANSERMOVEMENT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_RETURNASSETPOSTTRANSFERMOVEMENT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
