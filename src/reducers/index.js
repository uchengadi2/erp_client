import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import categoryReducer from "./categoryReducer";
import policyReducer from "./policyReducer";
import productReducer from "./productReducer";
import userReducer from "./userReducer";
import vendorReducer from "./vendorReducer";
import countryReducer from "./countryReducer";
import stateReducer from "./stateReducer";
import currencyReducer from "./currencyReducer";
import cityReducer from "./cityReducer";
import locationReducer from "./locationReducer";
import serviceOutletReducer from "./serviceOutletReducer";
import hoServiceOutletReducer from "./hoServiceOutletReducer";
import schemeCodeReducer from "./schemeCodeReducer";
import glHeadReducer from "./glHeadReducer";
import subGlHeadReducer from "./subGlHeadReducer";
import transTypesReducer from "./transTypesReducer";
import officeOperationReducer from "./officeOperationReducer";
import storeTypeReducer from "./storeTypeReducer";
import assetSubclassReducer from "./assetSubclassReducer";
import assetTypeReducer from "./assetTypeReducer";
import depreciationTypeReducer from "./depreciationTypeReducer";
import assetMaintenanceTypeReducer from "./assetMaintenanceTypeReducer";
import measurementUnitReducer from "./measurementUnitReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  category: categoryReducer,
  city: cityReducer,
  policy: policyReducer,
  product: productReducer,
  user: userReducer,
  vendor: vendorReducer,
  country: countryReducer,
  state: stateReducer,
  currency: currencyReducer,
  location: locationReducer,
  serviceOutlet: serviceOutletReducer,
  hoServiceOutlet: hoServiceOutletReducer,
  schemeCode: schemeCodeReducer,
  glHead: glHeadReducer,
  subGlHead: subGlHeadReducer,
  transType: transTypesReducer,
  officeOperation: officeOperationReducer,
  storeType: storeTypeReducer,
  assetSubclass: assetSubclassReducer,
  assetType: assetTypeReducer,
  depreciationType: depreciationTypeReducer,
  assetMaintenanceType: assetMaintenanceTypeReducer,
  measurementUnit: measurementUnitReducer,
});
