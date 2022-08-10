import _ from "lodash";
import {
  CREATE_OPERATIONPRODUCTIONMAINTENANCE,
  FETCH_OPERATIONPRODUCTIONMAINTENANCES,
  FETCH_OPERATIONPRODUCTIONMAINTENANCE,
  DELETE_OPERATIONPRODUCTIONMAINTENANCE,
  EDIT_OPERATIONPRODUCTIONMAINTENANCE,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_OPERATIONPRODUCTIONMAINTENANCES:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_OPERATIONPRODUCTIONMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_OPERATIONPRODUCTIONMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_OPERATIONPRODUCTIONMAINTENANCE:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_OPERATIONPRODUCTIONMAINTENANCE:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
