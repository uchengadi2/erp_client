import _ from "lodash";
import {
  MAKE_INVENTORYREQUISITIONREQUEST,
  MAKE_INVENTORYRETIREMENTREQUEST,
  MAKE_INVENTORYDISPOSALREQUEST,
  MAKE_INVENTORYTRANSFERREQUEST,
  FETCH_INVENTORYSTOCKS,
  FETCH_INVENTORYSTOCK,
  DELETE_INVENTORYSTOCK,
  EDIT_INVENTORYSTOCK,
} from "./../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_INVENTORYSTOCKS:
      let id = 0;
      return {
        ...state,
        ..._.mapKeys(action.payload, `id`),
      };

    case FETCH_INVENTORYSTOCK:
      return { ...state, [action.payload.id]: action.payload };
    case MAKE_INVENTORYREQUISITIONREQUEST:
      return { ...state, [action.payload.id]: action.payload };
    case MAKE_INVENTORYRETIREMENTREQUEST:
      return { ...state, [action.payload.id]: action.payload };
    case MAKE_INVENTORYDISPOSALREQUEST:
      return { ...state, [action.payload.id]: action.payload };
    case MAKE_INVENTORYTRANSFERREQUEST:
      return { ...state, [action.payload.id]: action.payload };
    case EDIT_INVENTORYSTOCK:
      return { ...state, [action.payload.id]: action.payload };
    case DELETE_INVENTORYSTOCK:
      return _.omit(state, action.payload); //note that payload is just the currency id
    default:
      return state;
  }
};
