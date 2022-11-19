import _ from "lodash";
import {
  CREATE_ASSETINVENTORYMEASUREMENTUNIT,
  FETCH_ASSETINVENTORYMEASUREMENTUNITS,
  FETCH_ASSETINVENTORYMEASUREMENTUNIT,
  DELETE_ASSETINVENTORYMEASUREMENTUNIT,
  EDIT_ASSETINVENTORYMEASUREMENTUNIT,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_ASSETINVENTORYMEASUREMENTUNITS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_ASSETINVENTORYMEASUREMENTUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case CREATE_ASSETINVENTORYMEASUREMENTUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_ASSETINVENTORYMEASUREMENTUNIT:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_ASSETINVENTORYMEASUREMENTUNIT:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
