import { formValues } from "redux-form";
import data from "../apis/local";
import history from "../history";

import {
  SIGN_IN,
  SIGN_OUT,
  SIGN_UP,
  CREATE_CATEGORY,
  FETCH_CATEGORIES,
  FETCH_CATEGORY,
  DELETE_CATEGORY,
  EDIT_CATEGORY,
  CREATE_USER,
  FETCH_USERS,
  FETCH_USER,
  DELETE_USER,
  EDIT_USER,
  CREATE_CITY,
  FETCH_CITIES,
  FETCH_CITY,
  DELETE_CITY,
  EDIT_CITY,
  CREATE_VENDOR,
  FETCH_VENDORS,
  FETCH_VENDOR,
  DELETE_VENDOR,
  EDIT_VENDOR,
  CREATE_PRODUCT,
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  CREATE_POLICY,
  FETCH_POLICIES,
  FETCH_POLICY,
  DELETE_POLICY,
  EDIT_POLICY,
  CREATE_COUNTRY,
  FETCH_COUNTRIES,
  FETCH_COUNTRY,
  DELETE_COUNTRY,
  EDIT_COUNTRY,
  CREATE_STATE,
  FETCH_STATES,
  FETCH_STATE,
  DELETE_STATE,
  EDIT_STATE,
  CREATE_CURRENCY,
  FETCH_CURRENCIES,
  FETCH_CURRENCY,
  DELETE_CURRENCY,
  EDIT_CURRENCY,
  CREATE_SCHEMECODE,
  FETCH_SCHEMECODES,
  FETCH_SCHEMECODE,
  DELETE_SCHEMECODE,
  CREATE_GLCODE,
  FETCH_GLCODES,
  FETCH_GLCODE,
  DELETE_GLCODE,
  EDIT_GLCODE,
  CREATE_SUBGLCODE,
  FETCH_SUBGLCODES,
  FETCH_SUBGLCODE,
  DELETE_SUBGLCODE,
  EDIT_GLSUBCODE,
  CREATE_TRANSTYPE,
  FETCH_TRANSTYPES,
  FETCH_TRANSTYPE,
  DELETE_TRANSTYPE,
  EDIT_TRANSTYPE,
  CREATE_SERVICEOUTLET,
  FETCH_SERVICEOUTLETS,
  FETCH_SERVICEOUTLET,
  DELETE_SERVICEOUTLET,
  EDIT_SERVICEOUTLET,
  CREATE_LOCATION,
  FETCH_LOCATIONS,
  FETCH_LOCATION,
  //EDIT_LOCATION,
  DELETE_LOCATION,
  EDIT_LOCATION_SUCCEEDED,
  EDIT_LOCATION_FAILED,
  CREATE_HOSERVICEOUTLET,
  FETCH_HOSERVICEOUTLETS,
  FETCH_HOSERVICEOUTLET,
  DELETE_HOSERVICEOUTLET,
  EDIT_HOSERVICEOUTLET,
  EDIT_SCHEMECODE,
  CREATE_OFFICEOPERATION,
  FETCH_OFFICEOPERATIONS,
  FETCH_OFFICEOPERATION,
  EDIT_OFFICEOPERATION,
  DELETE_OFFICEOPERATION,
  CREATE_STORETYPE,
  FETCH_STORETYPES,
  FETCH_STORETYPE,
  DELETE_STORETYPE,
  EDIT_STORETYPE,
  CREATE_SUBCLASS,
  FETCH_SUBCLASSES,
  FETCH_SUBCLASS,
  DELETE_SUBCLASS,
  EDIT_SUBCLASS,
  CREATE_ASSETTYPE,
  FETCH_ASSETTYPES,
  FETCH_ASSETTYPE,
  DELETE_ASSETTYPE,
  EDIT_ASSETTYPE,
  CREATE_DEPRECIATIONTYPE,
  FETCH_DEPRECIATIONTYPES,
  FETCH_DEPRECIATIONTYPE,
  DELETE_DEPRECIATIONTYPE,
  EDIT_DEPRECIATIONTYPE,
  CREATE_MAINTENANCETYPE,
  FETCH_MAINTENANCETYPES,
  FETCH_MAINTENANCETYPE,
  DELETE_MAINTENANCETYPE,
  EDIT_MAINTENANCETYPE,
  CREATE_MEASUREMENTUNIT,
  FETCH_MEASUREMENTUNITS,
  FETCH_MEASUREMENTUNIT,
  DELETE_MEASUREMENTUNIT,
  EDIT_MEASUREMENTUNIT,
  CREATE_STOCK,
  FETCH_STOCKS,
  FETCH_STOCK,
  DELETE_STOCK,
  EDIT_STOCK,
  CREATE_OTHERASSET,
  FETCH_OTHERASSETS,
  FETCH_OTHERASSET,
  DELETE_OTHERASSET,
  EDIT_OTHERASSET,
  CREATE_UNAPPROVEDPROCUREMENT,
  FETCH_UNAPPROVEDPROCUREMENTS,
  FETCH_UNAPPROVEDPROCUREMENT,
  DELETE_UNAPPROVEDPROCUREMENT,
  EDIT_UNAPPROVEDPROCUREMENT,
  CREATE_APPROVEDPROCUREMENT,
  FETCH_APPROVEDPROCUREMENTS,
  FETCH_APPROVEDPROCUREMENT,
  DELETE_APPROVEDPROCUREMENT,
  EDIT_APPROVEDPROCUREMENT,
  CREATE_EXECAPPROVEDPROCUREMENT,
  FETCH_EXECAPPROVEDPROCUREMENTS,
  FETCH_EXECAPPROVEDPROCUREMENT,
  DELETE_EXECAPPROVEDPROCUREMENT,
  EDIT_EXECAPPROVEDPROCUREMENT,
  CREATE_UNAPPROVEDMAINTENANCE,
  FETCH_UNAPPROVEDMAINTENANCES,
  FETCH_UNAPPROVEDMAINTENANCE,
  DELETE_UNAPPROVEDMAINTENANCE,
  EDIT_UNAPPROVEDMAINTENANCE,
  CREATE_APPROVEDMAINTENANCE,
  FETCH_APPROVEDMAINTENANCES,
  FETCH_APPROVEDMAINTENANCE,
  DELETE_APPROVEDMAINTENANCE,
  EDIT_APPROVEDMAINTENANCE,
  CREATE_EXECUTEDMAINTENANCE,
  FETCH_EXECUTEDMAINTENANCES,
  FETCH_EXECUTEDMAINTENANCE,
  DELETE_EXECUTEDMAINTENANCE,
  EDIT_EXECUTEDMAINTENANCE,
  MAKE_INVENTORYREQUISITIONREQUEST,
  MAKE_INVENTORYRETIREMENTREQUEST,
  MAKE_INVENTORYDISPOSALREQUEST,
  MAKE_INVENTORYTRANSFERREQUEST,
  FETCH_INVENTORYSTOCKS,
  FETCH_INVENTORYSTOCK,
  DELETE_INVENTORYSTOCK,
  EDIT_INVENTORYSTOCK,
  FETCH_UNAPPROVEDSTOCKREQUISITIONS,
  FETCH_UNAPPROVEDSTOCKREQUISITION,
  DELETE_UNAPPROVEDSTOCKREQUISITION,
  EDIT_UNAPPROVEDSTOCKREQUISITION,
  FETCH_UNAPPROVEDSTOCKRETIREMENTS,
  FETCH_UNAPPROVEDSTOCKRETIREMENT,
  DELETE_UNAPPROVEDSTOCKRETIREMENT,
  EDIT_UNAPPROVEDSTOCKRETIREMENT,
  FETCH_UNAPPROVEDSTOCKDISPOSITIONS,
  FETCH_UNAPPROVEDSTOCKDISPOSITION,
  DELETE_UNAPPROVEDSTOCKDISPOSITION,
  EDIT_UNAPPROVEDSTOCKDISPOSITION,
  FETCH_UNAPPROVEDSTOCKTRANSFERS,
  FETCH_UNAPPROVEDSTOCKTRANSFER,
  DELETE_UNAPPROVEDSTOCKTRANSFER,
  EDIT_UNAPPROVEDSTOCKTRANSFER,
  FETCH_ASSETREQUISITIONS,
  FETCH_ASSETREQUISITION,
  DELETE_ASSETREQUISITION,
  EDIT_ASSETREQUISITION,
  FETCH_PENDINGASSETREQUISITIONS,
  FETCH_PENDINGASSETREQUISITION,
  DELETE_PENDINGASSETREQUISITION,
  EDIT_PENDINGASSETREQUISITION,
  FETCH_WITHDRAWNASSETREQUISITIONS,
  FETCH_WITHDRAWNASSETREQUISITION,
  DELETE_WITHDRAWNASSETREQUISITION,
  EDIT_WITHDRAWNASSETREQUISITION,
  FETCH_ABORTEDASSETREQUISITIONS,
  FETCH_ABORTEDASSETREQUISITION,
  DELETE_ABORTEDASSETREQUISITION,
  EDIT_ABORTEDASSETREQUISITION,
  FETCH_RETURNASSETPOSTREQUISITIONS,
  FETCH_RETURNASSETPOSTREQUISITION,
  EDIT_RETURNASSETPOSTREQUISITION,
  DELETE_RETURNASSETPOSTREQUISITION,
  FETCH_ASSETRETIREMENTS,
  FETCH_ASSETRETIREMENT,
  EDIT_ASSETRETIREMENT,
  DELETE_ASSETRETIREMENT,
  FETCH_PENDINGASSETRETIREMENTS,
  FETCH_PENDINGASSETRETIREMENT,
  EDIT_PENDINGASSETRETIREMENT,
  DELETE_PENDINGASSETRETIREMENT,
  FETCH_WITHDRAWNASSETRETIREMENTS,
  FETCH_WITHDRAWNASSETRETIREMENT,
  EDIT_WITHDRAWNASSETRETIREMENT,
  DELETE_WITHDRAWNASSETRETIREMENT,
  FETCH_RETURNPOSTASSETRETIREMENTS,
  FETCH_RETURNPOSTASSETRETIREMENT,
  EDIT_RETURNPOSTASSETRETIREMENT,
  DELETE_RETURNPOSTASSETRETIREMENT,
  FETCH_ASSETDISPOSITIONS,
  FETCH_ASSETDISPOSITION,
  EDIT_ASSETDISPOSITION,
  DELETE_ASSETDISPOSITION,
  FETCH_PENDINGASSETDISPOSITIONS,
  FETCH_PENDINGASSETDISPOSITION,
  EDIT_PENDINGASSETDISPOSITION,
  DELETE_PENDINGASSETDISPOSITION,
  FETCH_WITHDRAWNASSETDISPOSITIONS,
  FETCH_WITHDRAWNASSETDISPOSITION,
  EDIT_WITHDRAWNASSETDISPOSITION,
  DELETE_WITHDRAWNASSETDISPOSITION,
  FETCH_RETURNASSETPOSTDISPOSITIONS,
  FETCH_RETURNASSETPOSTDISPOSITION,
  EDIT_RETURNASSETPOSTDISPOSITION,
  DELETE_RETURNASSETPOSTDISPOSITION,
  CREATE_ASSETMOVEMENT,
  FETCH_ASSETMOVEMENTS,
  FETCH_ASSETMOVEMENT,
  EDIT_ASSETMOVEMENT,
  DELETE_ASSETMOVEMENT,
  CREATE_TRANSFERASSETMOVEMENT,
  FETCH_TRANSFERASSETMOVEMENTS,
  FETCH_TRANSFERASSETMOVEMENT,
  EDIT_TRANSFERASSETMOVEMENT,
  DELETE_TRANSFERASSETMOVEMENT,
  CREATE_PENDINGTRANSFERASSETMOVEMENT,
  FETCH_PENDINGTRANSFERASSETMOVEMENTS,
  FETCH_PENDINGTRANSFERASSETMOVEMENT,
  EDIT_PENDINGTRANSFERASSETMOVEMENT,
  DELETE_PENDINGTRANSFERASSETMOVEMENT,
  CREATE_WITHDRAWNTRANSFERASSETMOVEMENT,
  FETCH_WITHDRAWNTRANSFERASSETMOVEMENTS,
  FETCH_WITHDRAWNTRANSFERASSETMOVEMENT,
  EDIT_WITHDRAWNTRANSFERASSETMOVEMENT,
  DELETE_WITHDRAWNTRANSFERASSETMOVEMENT,
  CREATE_RETURNASSETPOSTTRANSFERMOVEMENT,
  FETCH_RETURNASSETPOSTTRANSFERMOVEMENTS,
  FETCH_RETURNASSETPOSTTRANSFERMOVEMENT,
  EDIT_RETURNASSETPOSTTRANSERMOVEMENT,
  DELETE_RETURNASSETPOSTTRANSFERMOVEMENT,
  CREATE_ASSETSTORE,
  FETCH_ASSETSTORES,
  FETCH_ASSETSTORE,
  EDIT_ASSETSTORE,
  DELETE_ASSETSTORE,
  CREATE_MAINTENANCEASSETSTORE,
  FETCH_MAINTENANCEASSETSTORES,
  FETCH_MAINTENANCEASSETSTORE,
  EDIT_MAINTENANCEASSETSTORE,
  DELETE_MAINTENANCEASSETSTORE,
  CREATE_LEASEASSETSTORE,
  FETCH_LEASEASSETSTORES,
  FETCH_LEASEASSETSTORE,
  EDIT_LEASEASSETSTORE,
  DELETE_LEASEASSETSTORE,
  CREATE_OWNERSHIPASSETSTORE,
  FETCH_OWNERSHIPASSETSTORES,
  FETCH_OWNERSHIPASSETSTORE,
  EDIT_OWNERSHIPASSETSTORE,
  DELETE_OWNERSHIPASSETSTORE,
  CREATE_ASSETSTORESPACEALLOCATION,
  FETCH_ASSETSTORESPACEALLOCATIONS,
  FETCH_ASSETSTORESPACEALLOCATION,
  EDIT_ASSETSTORESPACEALLOCATION,
  DELETE_ASSETSTORESPACEALLOCATION,
  CREATE_SELLASSETSTORE,
  FETCH_SELLASSETSTORES,
  FETCH_SELLASSETSTORE,
  EDIT_SELLASSETSTORE,
  DELETE_SELLASSETSTORE,
  CREATE_ASSETSTORECLOSURE,
  FETCH_ASSETSTORECLOSURES,
  FETCH_ASSETSTORECLOSURE,
  EDIT_ASSETSTORECLOSURE,
  DELETE_ASSETSTORECLOSURE,
  CREATE_STOREMOVEMENTTYPE,
  FETCH_STOREMOVEMENTTYPES,
  FETCH_STOREMOVEMENTTYPE,
  EDIT_STOREMOVEMENTTYPE,
  DELETE_STOREMOVEMENTTYPE,
  CREATE_STOREDISPOSITIONTYPE,
  FETCH_STOREDISPOSITIONTYPES,
  FETCH_STOREDISPOSITIONTYPE,
  EDIT_STOREDISPOSITIONTYPE,
  DELETE_STOREDISPOSITIONTYPE,
  CREATE_STOREMAINTENANCETYPE,
  FETCH_STOREMAINTENANCETYPES,
  FETCH_STOREMAINTENANCETYPE,
  EDIT_STOREMAINTENANCETYPE,
  DELETE_STOREMAINTENANCETYPE,
  CREATE_TRANSFORMATIONTYPE,
  FETCH_TRANSFORMATIONTYPES,
  FETCH_TRANSFORMATIONTYPE,
  EDIT_TRANSFORMATIONTYPE,
  DELETE_TRANSFORMATIONTYPE,
  CREATE_TRANSFORMATIONPHASE,
  FETCH_TRANSFORMATIONPHASES,
  FETCH_TRANSFORMATIONPHASE,
  EDIT_TRANSFORMATIONPHASE,
  DELETE_TRANSFORMATIONPHASE,
  CREATE_TRANSFORMATIONPHASEEVENT,
  FETCH_TRANSFORMATIONPHASEEVENTS,
  FETCH_TRANSFORMATIONPHASEEVENT,
  EDIT_TRANSFORMATIONPHASEEVENT,
  DELETE_TRANSFORMATIONPHASEEVENT,
  CREATE_FINISHINGTYPE,
  FETCH_FINISHINGTYPES,
  FETCH_FINISHINGTYPE,
  EDIT_FINISHINGTYPE,
  DELETE_FINISHINGTYPE,
  CREATE_QUALITYASSURANCETYPE,
  FETCH_QUALITYASSURANCETYPES,
  FETCH_QUALITYASSURANCETYPE,
  EDIT_QUALITYASSURANCETYPE,
  DELETE_QUALITYASSURANCETYPE,
  CREATE_QUALITYASSURANCEPHASE,
  FETCH_QUALITYASSURANCEPHASES,
  FETCH_QUALITYASSURANCEPHASE,
  EDIT_QUALITYASSURANCEPHASE,
  DELETE_QUALITYASSURANCEPHASE,
  CREATE_QUALITYASSURANCEPHASEEVENT,
  FETCH_QUALITYASSURANCEPHASEEVENTS,
  FETCH_QUALITYASSURANCEPHASEEVENT,
  EDIT_QUALITYASSURANCEPHASEEVENT,
  DELETE_QUALITYASSURANCEPHASEEVENT,
  CREATE_OPERATIONMAINTENANCETYPE,
  FETCH_OPERATIONMAINTENANCETYPES,
  FETCH_OPERATIONMAINTENANCETYPE,
  EDIT_OPERATIONMAINTENANCETYPE,
  DELETE_OPERATIONMAINTENANCETYPE,
  CREATE_FINISHING,
  FETCH_FINISHINGS,
  FETCH_FINISHING,
  EDIT_FINISHING,
  DELETE_FINISHING,
  CREATE_QUALITYASSURANCE,
  FETCH_QUALITYASSURANCES,
  FETCH_QUALITYASSURANCE,
  EDIT_QUALITYASSURANCE,
  DELETE_QUALITYASSURANCE,
  CREATE_OPERATIONMAINTENANCE,
  FETCH_OPERATIONMAINTENANCES,
  FETCH_OPERATIONMAINTENANCE,
  EDIT_OPERATIONMAINTENANCE,
  DELETE_OPERATIONMAINTENANCE,
  CREATE_OPERATIONPROCESSING,
  FETCH_OPERATIONPROCESSINGS,
  FETCH_OPERATIONPROCESSING,
  EDIT_OPERATIONPROCESSING,
  DELETE_OPERATIONPROCESSING,
  CREATE_OPERATIONOPERATION,
  FETCH_OPERATIONOPERATIONS,
  FETCH_OPERATIONOPERATION,
  EDIT_OPERATIONOPERATION,
  DELETE_OPERATIONOPERATION,
  CREATE_OPERATIONPRODUCTIONMAINTENANCE,
  FETCH_OPERATIONPRODUCTIONMAINTENANCES,
  FETCH_OPERATIONPRODUCTIONMAINTENANCE,
  EDIT_OPERATIONPRODUCTIONMAINTENANCE,
  DELETE_OPERATIONPRODUCTIONMAINTENANCE,
  CREATE_PRODUCTIONQUALITYASSURANCE,
  FETCH_PRODUCTIONQUALITYASSURANCES,
  FETCH_PRODUCTIONQUALITYASSURANCE,
  EDIT_PRODUCTIONQUALITYASSURANCE,
  DELETE_PRODUCTIONQUALITYASSURANCE,
  CREATE_PRODUCTIONFINISHING,
  FETCH_PRODUCTIONFINISHINGS,
  FETCH_PRODUCTIONFINISHING,
  EDIT_PRODUCTIONFINISHING,
  DELETE_PRODUCTIONFINISHING,
} from "./types";

//authentication and authorization  operations

// export const signIn = (userId) => {
//   return {
//     type: SIGN_IN,
//     payload: userId,
//   };
// };

export const signOut = () => {
  return {
    type: SIGN_OUT,
  };
};

export const signUp = (formValues) => {
  return async (dispatch) => {
    const response = await data.post("/users/signup", formValues);
    dispatch({ type: SIGN_UP, payload: response.data.data });
  };
};

export const signIn = (formValues) => {
  return async (dispatch) => {
    const response = await data.post("/users/login", formValues);
    if (response.status === 200) {
      dispatch({ type: SIGN_IN, payload: response.data });

      //history.push("/dashboard");
    } else {
      console.log("something went wrong here");
    }
  };
};
//category resources crud operations
export const createCategory = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    console.log("the user id id:", userId);
    const response = await data.post("/categories", {
      ...formValues,
      userId,
    });

    dispatch({ type: CREATE_CATEGORY, payload: response.data.data.data });
  };
};

export const fetchCategories = () => {
  return async (dispatch) => {
    const response = await data.get("/categories");
    dispatch({ type: FETCH_CATEGORIES, payload: response.data.data.data });
  };
};

export const fetchCategory = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/categories/${id}`);
    dispatch({ type: FETCH_CATEGORY, payload: response.data.data });
  };
};

export const editCategory = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/categories/${id}`, formValues);
    console.log("this updated response:", response);
    dispatch({ type: EDIT_CATEGORY, payload: response.data.data.data });
    //history.push("/");
  };
};

export const deleteCategory = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/categories/${id}`);
    dispatch({ type: DELETE_CATEGORY, payload: id });
    history.push("/categories");
  };
};

///////////////user resource crud operation //////////////////////////////////////
export const createUser = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("formvalues at index:", formValues);
  console.log("token at index:", token);
  return async (dispatch) => {
    const response = await data.post("/users");

    console.log("staff user response:", response);
    dispatch({ type: CREATE_USER, payload: response.data.data.data });
    //history.push("/users");
  };
};

export const fetchUsers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/users", {
      params: { userType: "staff" },
    });
    console.log("user response:", response.data);
    dispatch({ type: FETCH_USERS, payload: response.data.data.data });
  };
};

export const fetchUser = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/users/${id}`);
    dispatch({ type: FETCH_USER, payload: response.data });
  };
};

export const editUser = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/users/${id}`, formValues);
    dispatch({ type: EDIT_USER, payload: response.data });
    //history.push("/users");
  };
};

export const deleteUser = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/users/${id}`);
    dispatch({ type: DELETE_USER, payload: id });
    // history.push("/users");
  };
};

////////////////////////////////////////////////////////

//city resource crud operation
export const createCity = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const response = await data.post("/cities", formValues);

    console.log("city response:", response);
    dispatch({ type: CREATE_CITY, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const fetchCities = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/cities");
    console.log("the cities are:", response);
    dispatch({ type: FETCH_CITIES, payload: response.data.data.data });
  };
};

export const fetchCity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/cities/${id}`);
    console.log("fetch city response here:", response);
    dispatch({ type: FETCH_CITY, payload: response.data.data.data });
  };
};

export const editCity = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/cities/${id}`, formValues);
    console.log("index response:", response);
    dispatch({ type: EDIT_CITY, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const deleteCity = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/cities/${id}`);
    dispatch({ type: DELETE_CITY, payload: id });
    //history.push("/cities");
  };
};

///////////////////////Locations////////////////////////////////////

//city resource crud operation
export const createLocation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const response = await data.post("/locations", formValues);

    console.log("new location response:", response);
    dispatch({ type: CREATE_LOCATION, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const fetchLocations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/locations");
    console.log("the locations are:", response);
    dispatch({ type: FETCH_LOCATIONS, payload: response.data.data.data });
  };
};

export const fetchLocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/locations/${id}`);
    dispatch({ type: FETCH_LOCATION, payload: response.data.data.data });
  };
};

// export const editLocation = (id, formValues, token) => {
//   data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//   return async (dispatch) => {
//     const response = await data.patch(`/locations/${id}`, formValues);
//     console.log("thsi is the response:", response);
//     if (response) {
//       if (response.data.status === "success") {
//         dispatch({
//           type: EDIT_LOCATION_SUCCEEDED,
//           payload: response.data.data.data,
//         });
//       } else {
//         dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
//       }
//     } else {
//       dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
//     }

//     //history.push("/cities");
//   };
// };

export const editLocation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/locations/${id}`, formValues);
    console.log("thsi is the response:", response);
    if (response) {
      if (response.data.status === "success") {
        dispatch({
          type: EDIT_LOCATION_SUCCEEDED,
          payload: response.data.data.data,
        });
      } else {
        dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
        // const status = "failed";
        // return status;
      }
    } else {
      dispatch({ type: EDIT_LOCATION_FAILED, status: "API Failed" });
    }

    //history.push("/cities");
  };
};

export const deleteLocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/locations/${id}`);
    dispatch({ type: DELETE_LOCATION, payload: id });
    //history.push("/cities");
  };
};

/////////////////////////////////////////////////////////////////////

//vendor resource crud operation
export const createVendor = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/vendors", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_VENDOR, payload: response.data });
    history.push("/vendors");
  };
};

export const fetchVendors = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/vendors");
    console.log("vendor response is:", response);

    dispatch({ type: FETCH_VENDORS, payload: response.data.data.data });
  };
};

export const fetchVendor = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/vendors/${id}`);
    dispatch({ type: FETCH_VENDOR, payload: response.data });
  };
};

export const editVendor = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/vendors/${id}`, formValues);
    dispatch({ type: EDIT_VENDOR, payload: response.data });
    history.push("/vendors");
  };
};

export const deleteVendor = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/vendors/${id}`);
    dispatch({ type: DELETE_VENDOR, payload: id });
    history.push("/vendors");
  };
};

///////////////////////////////////////////////////////////////////

//product resource crud operation
export const createProduct = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/products", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_PRODUCT, payload: response.data });
    history.push("/products");
  };
};

export const fetchProducts = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/products");
    console.log("the products are:", response);
    dispatch({ type: FETCH_PRODUCTS, payload: response.data.data.data });
  };
};

export const fetchProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/products/${id}`);
    dispatch({ type: FETCH_PRODUCT, payload: response.data });
  };
};

export const editProduct = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/products/${id}`, formValues);
    dispatch({ type: EDIT_PRODUCT, payload: response.data });
    history.push("/products");
  };
};

export const deleteProduct = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/products/${id}`);
    dispatch({ type: DELETE_PRODUCT, payload: id });
    history.push("/products");
  };
};

//////////////////////////////////////////////////////////////////

//policy resource crud operation
export const createPolicy = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const { userId } = getState().auth;
    const response = await data.post("/policies", {
      ...formValues,
      userId,
    });

    //console.log(response);
    dispatch({ type: CREATE_POLICY, payload: response.data });
    history.push("/policies");
  };
};

export const fetchPolicies = (token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get("/policies");
    dispatch({ type: FETCH_POLICIES, payload: response.data.data.data });
  };
};

export const fetchPolicy = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/policies/${id}`);
    dispatch({ type: FETCH_POLICY, payload: response.data });
  };
};

export const editPolicy = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/policies/${id}`, formValues);
    dispatch({ type: EDIT_POLICY, payload: response.data });
    history.push("/policies");
  };
};

export const deletePolicy = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return async (dispatch) => {
    await data.delete(`/policies/${id}`);
    dispatch({ type: DELETE_POLICY, payload: id });
    history.push("/policies");
  };
};

////////////////////////////////////////////////////////////////////////
//country resource models

export const createCountry = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  console.log("form values:", formValues);
  console.log("token:", token);

  return async (dispatch, getState) => {
    const response = await data.post("/countries", formValues);
    dispatch({ type: CREATE_COUNTRY, payload: response.data.data.data });
  };
};

export const fetchCountries = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/countries");
    console.log("countries response is:", response);

    dispatch({ type: FETCH_COUNTRIES, payload: response.data.data.data });
  };
};

export const fetchCountry = (id, token) => {
  return async (dispatch) => {
    const response = await data.get(`/countries/${id}`);
    dispatch({ type: FETCH_COUNTRY, payload: response.data });
  };
};

export const editCountry = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/countries/${id}`, formValues);
    dispatch({ type: EDIT_COUNTRY, payload: response.data.data.data });
    //history.push("/utility/countries");
  };
};

export const deleteCountry = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/countries/${id}`);
    dispatch({ type: DELETE_COUNTRY, payload: id });
    //history.push("/utilities/countries");
  };
};

////////////////////////////////////////////////////////////////////////
//state resource models

export const createState = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch, getState) => {
    const response = await data.post("/states", formValues);
    //console.log(response);
    dispatch({ type: CREATE_STATE, payload: response.data.data.data });
    //history.push("/utilities/states");
  };
};

export const fetchStates = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/states");
    //console.log("vendor response is:", response);

    dispatch({ type: FETCH_STATES, payload: response.data.data.data });
  };
};

export const fetchState = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/states/${id}`);
    dispatch({ type: FETCH_STATE, payload: response.data });
  };
};

export const editState = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/states/${id}`, formValues);

    dispatch({ type: EDIT_STATE, payload: response.data.data.data });
    //history.push("/utilities/states");
  };
};

export const deleteState = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/states/${id}`);
    dispatch({ type: DELETE_STATE, payload: id });
    //history.push("/utilities/states");
  };
};

////////////////////////// working on service outlets //////////////////////

export const createServiceOutlet = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/serviceoutlets", formValues);

    dispatch({ type: CREATE_SERVICEOUTLET, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const fetchServiceOutlets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/serviceoutlets", {
      params: { isHeadofficeOutlet: false },
    });

    dispatch({ type: FETCH_SERVICEOUTLETS, payload: response.data.data.data });
  };
};

export const fetchServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/serviceoutlets/${id}`);
    dispatch({ type: FETCH_SERVICEOUTLET, payload: response.data.data.data });
  };
};

export const editServiceOutlet = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/serviceoutlets/${id}`, formValues);
    dispatch({ type: EDIT_SERVICEOUTLET, payload: response.data.data.data });
    //history.push("/cities");
  };
};

export const deleteServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/serviceoutlets/${id}`);
    dispatch({ type: DELETE_SERVICEOUTLET, payload: id });
    //history.push("/cities");
  };
};

/////////////////Head officer Service Outlet /////////////////////////////

export const createHoServiceOutlet = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/serviceoutlets", formValues);

    dispatch({
      type: CREATE_HOSERVICEOUTLET,
      payload: response.data.data.data,
    });
  };
};

export const fetchHoServiceOutlets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/serviceoutlets", {
      params: { isHeadofficeOutlet: true },
    });
    console.log("response is:", response.data);
    dispatch({
      type: FETCH_HOSERVICEOUTLETS,
      payload: response.data.data.data,
    });
  };
};

export const fetchHoServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/serviceoutlets/${id}`);
    dispatch({ type: FETCH_HOSERVICEOUTLET, payload: response.data.data.data });
  };
};

export const editHoServiceOutlet = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/serviceoutlets/${id}`, formValues);
    dispatch({ type: EDIT_HOSERVICEOUTLET, payload: response.data.data.data });
  };
};

export const deleteHoServiceOutlet = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/serviceoutlets/${id}`);
    dispatch({ type: DELETE_HOSERVICEOUTLET, payload: id });
  };
};

//////////////////////Scheme Code ////////////////////////////////////////

export const createSchemeCode = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/schemecodes", formValues);

    dispatch({ type: CREATE_SCHEMECODE, payload: response.data.data.data });
  };
};

export const fetchSchemeCodes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/schemecodes");

    dispatch({ type: FETCH_SCHEMECODES, payload: response.data.data.data });
  };
};

export const fetchSchemeCode = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/schemecodes/${id}`);
    dispatch({ type: FETCH_SCHEMECODE, payload: response.data.data.data });
  };
};

export const editSchemeCode = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/schemecodes/${id}`, formValues);
    dispatch({ type: EDIT_SCHEMECODE, payload: response.data.data.data });
  };
};

export const deleteSchemeCode = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/schemecodes/${id}`);
    dispatch({ type: DELETE_SCHEMECODE, payload: id });
  };
};

//////////////////TEMPORARY SCRIPT //////////////////

export const fetchOrders = () => {};

/////////////////////////////////////////////////////

/////////////////////////////CURRENCY //////////////////////////////////////

export const createCurrency = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/currencies", formValues);

    dispatch({ type: CREATE_CURRENCY, payload: response.data.data.data });
  };
};

export const fetchCurrencies = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/currencies");

    dispatch({ type: FETCH_CURRENCIES, payload: response.data.data.data });
  };
};

export const fetchCurrency = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/currencies/${id}`);
    dispatch({ type: FETCH_CURRENCY, payload: response.data.data.data });
  };
};

export const editCurrency = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/currencies/${id}`, formValues);
    dispatch({ type: EDIT_CURRENCY, payload: response.data.data.data });
  };
};

export const deleteCurrency = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/currencies/${id}`);
    dispatch({ type: DELETE_CURRENCY, payload: id });
  };
};

//////////////////////////GL HEADS ///////////////////////////////

export const createGlHead = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/glheadaccounts", formValues);

    dispatch({ type: CREATE_GLCODE, payload: response.data.data.data });
  };
};

export const fetchGlHeads = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/glheadaccounts");

    dispatch({ type: FETCH_GLCODES, payload: response.data.data.data });
  };
};

export const fetchGlCode = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/glheadaccounts/${id}`);
    dispatch({ type: FETCH_GLCODE, payload: response.data.data.data });
  };
};

export const editGlHead = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/glheadaccounts/${id}`, formValues);
    dispatch({ type: EDIT_GLCODE, payload: response.data.data.data });
  };
};

export const deleteGlHead = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/glheadaccounts/${id}`);
    dispatch({ type: DELETE_GLCODE, payload: id });
  };
};

/////////////////////////////SUBGL HEAD //////////////////////////////////////////////

export const createSubGlHead = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/subglheadaccounts", formValues);

    dispatch({ type: CREATE_SUBGLCODE, payload: response.data.data.data });
  };
};

export const fetchSubGlHeads = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/subglheadaccounts");

    dispatch({ type: FETCH_SUBGLCODES, payload: response.data.data.data });
  };
};

export const fetchSubGlHead = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/subglheadaccounts/${id}`);
    dispatch({ type: FETCH_SUBGLCODE, payload: response.data.data.data });
  };
};

export const editSubGlHead = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/subglheadaccounts/${id}`, formValues);
    dispatch({ type: EDIT_GLSUBCODE, payload: response.data.data.data });
  };
};

export const deleteSubGlHead = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/subglheadaccounts/${id}`);
    dispatch({ type: DELETE_SUBGLCODE, payload: id });
  };
};

/////////////////////////////////////////TRANSACTION TYPES /////////////////////////////

export const createTransType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/transactiontypes", formValues);

    dispatch({ type: CREATE_TRANSTYPE, payload: response.data.data.data });
  };
};

export const fetchTransTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/transactiontypes");
    console.log("trans types response:", response.data);

    dispatch({ type: FETCH_TRANSTYPES, payload: response.data.data.data });
  };
};

export const fetchTransType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/transactiontypes/${id}`);
    dispatch({ type: FETCH_TRANSTYPE, payload: response.data.data.data });
  };
};

export const editTransType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/transactiontypes/${id}`, formValues);
    dispatch({ type: EDIT_TRANSTYPE, payload: response.data.data.data });
  };
};

export const deleteTransType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/transactiontypes/${id}`);
    dispatch({ type: DELETE_TRANSTYPE, payload: id });
  };
};

//////////////////////////////////  OFFICE OPERATIONS AND SERVICES /////////////////

export const createOfficeOperation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OFFICEOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchOfficeOperations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");
    console.log("trans types response:", response.data);

    dispatch({
      type: FETCH_OFFICEOPERATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOfficeOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({ type: FETCH_OFFICEOPERATION, payload: response.data.data.data });
  };
};

export const editOfficeOperation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_OFFICEOPERATION, payload: response.data.data.data });
  };
};

export const deleteOfficeOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OFFICEOPERATION, payload: id });
  };
};

///////////////////////////////ASSET STORE TYPES ///////////////////////////////

export const createStoreType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_STORETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");
    console.log("trans types response:", response.data);

    dispatch({
      type: FETCH_STORETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({ type: FETCH_STORETYPE, payload: response.data.data.data });
  };
};

export const editStoreType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_STORETYPE, payload: response.data.data.data });
  };
};

export const deleteStoreType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_STORETYPE, payload: id });
  };
};

//////////////////////// ASSET SUBCLASSES ///////////////////////////////////////////

export const createAssetSubclass = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_SUBCLASS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSubclasses = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_SUBCLASSES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetSubclass = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({ type: FETCH_SUBCLASS, payload: response.data.data.data });
  };
};

export const editAssetSubclass = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_SUBCLASS, payload: response.data.data.data });
  };
};

export const deleteAssetSubclass = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_SUBCLASS, payload: id });
  };
};

//////////////////////////////////// ASSET TYPES /////////////////////////////////

export const createAssetType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_ASSETTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({ type: FETCH_ASSETTYPE, payload: response.data.data.data });
  };
};

export const editAssetType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_ASSETTYPE, payload: response.data.data.data });
  };
};

export const deleteAssetType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETTYPE, payload: id });
  };
};

//////////////////////////////////////// DEPRECIATION TYPES ///////////////////////////

export const createDepreciationType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_DEPRECIATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchDepreciationTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_DEPRECIATIONTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchDepreciationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_DEPRECIATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editDepreciationType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_DEPRECIATIONTYPE, payload: response.data.data.data });
  };
};

export const deleteDepreciationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_DEPRECIATIONTYPE, payload: id });
  };
};

///////////////////////////////// ASSETS MAINTENANCE TYPES /////////////////////////////

export const createMaintenanceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_MAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_MAINTENANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_MAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editMaintenanceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_MAINTENANCETYPE, payload: response.data.data.data });
  };
};

export const deleteMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_MAINTENANCETYPE, payload: id });
  };
};

//////////////////////////////// ASSET MEASUREMENT UNIT ////////////////////////

export const createMeasurementUnit = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_MEASUREMENTUNIT,
      payload: response.data.data.data,
    });
  };
};

export const fetchMeasurementUnits = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_MEASUREMENTUNITS,
      payload: response.data.data.data,
    });
  };
};

export const fetchMeasurementUnit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_MEASUREMENTUNIT,
      payload: response.data.data.data,
    });
  };
};

export const editMeasurementUnit = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_MEASUREMENTUNIT, payload: response.data.data.data });
  };
};

export const deleteMeasurementUnit = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_MEASUREMENTUNIT, payload: id });
  };
};

///////////////////////////////// STOCK ///////////////////////////////////

export const createStock = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_STOCK,
      payload: response.data.data.data,
    });
  };
};

export const fetchStocks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_STOCKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_STOCK,
      payload: response.data.data.data,
    });
  };
};

export const editStock = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_STOCK, payload: response.data.data.data });
  };
};

export const deleteStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_STOCK, payload: id });
  };
};

//////////////////////////////// OTHER ASSETS ////////////////////////////////////

export const createOtherAsset = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OTHERASSET,
      payload: response.data.data.data,
    });
  };
};

export const fetchOtherAssets = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OTHERASSETS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOtherAsset = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OTHERASSET,
      payload: response.data.data.data,
    });
  };
};

export const editOtherAsset = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({ type: EDIT_OTHERASSET, payload: response.data.data.data });
  };
};

export const deleteOtherAsset = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OTHERASSET, payload: id });
  };
};

////////////////////////////// UNAPPROVED PROCUREMENT ACTION CREATORS /////////////////

export const createUnapprovedProcurement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_UNAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedProcurements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_UNAPPROVEDPROCUREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedProcurement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDPROCUREMENT, payload: id });
  };
};

////////////////////////////// APPROVED PROCUREMENT ///////////////////////////

export const createApprovedProcurement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_APPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchApprovedProcurements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_APPROVEDPROCUREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchApprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_APPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editApprovedProcurement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_APPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteApprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_APPROVEDPROCUREMENT, payload: id });
  };
};

///////////////////////////////// EXECUTED PROCUREMENTS ACTIONS /////////////////

export const createExecApprovedProcurement = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_EXECAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchExecApprovedProcurements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_EXECAPPROVEDPROCUREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchExecApprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_EXECAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editExecApprovedProcurement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_EXECAPPROVEDPROCUREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteExecApprovedProcurement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_EXECAPPROVEDPROCUREMENT, payload: id });
  };
};

//////////////////////////// UNAPPROVED ASSETS MAINTENANCE /////////////////////////

export const createUnapprovedMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_UNAPPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_UNAPPROVEDMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDMAINTENANCE, payload: id });
  };
};

//////////////////////////////////// APPROVED ASSET MAINTENANCES ////////////////////

export const createApprovedMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_APPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchApprovedMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_APPROVEDMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchApprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_APPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editApprovedMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_APPROVEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteApprovedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_APPROVEDMAINTENANCE, payload: id });
  };
};

///////////////////////////// EXECUTED ASSET MAINTENNACES ACTION CREATORS //////////////////

export const createExecutedMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_EXECUTEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchExecutedMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_EXECUTEDMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchExecutedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_EXECUTEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editExecutedMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_EXECUTEDMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteExecutedMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_EXECUTEDMAINTENANCE, payload: id });
  };
};

///////////////////////////// INVENTORY STOCK ACTION CREATORS //////////////////

export const makeinventoryStockRequisitionRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: MAKE_INVENTORYREQUISITIONREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const makeinventoryStockRetirementRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: MAKE_INVENTORYRETIREMENTREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const makeinventoryStockDispositionRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: MAKE_INVENTORYDISPOSALREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const makeinventoryStockTransferRequest = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: MAKE_INVENTORYTRANSFERREQUEST,
      payload: response.data.data.data,
    });
  };
};

export const fetchInventoryStocks = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_INVENTORYSTOCKS,
      payload: response.data.data.data,
    });
  };
};

export const fetchInventoryStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_INVENTORYSTOCK,
      payload: response.data.data.data,
    });
  };
};

export const editInventoryStock = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_INVENTORYSTOCK,
      payload: response.data.data.data,
    });
  };
};

export const deleteInventoryStock = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_INVENTORYSTOCK, payload: id });
  };
};

////////////////////////UNAPPROVED STOCK REQUISITION ///////////////////////////

export const fetchUnapprovedStockRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKREQUISITION, payload: id });
  };
};

////////////////////////UNAPPROVED STOCK RETIREMENT ///////////////////////////

export const fetchUnapprovedStockRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKRETIREMENT, payload: id });
  };
};

////////////////////////UNAPPROVED STOCK DISPOSAL ///////////////////////////

export const fetchUnapprovedStockDisposals = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockDisposal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockDisposal = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockDisposal = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKDISPOSITION, payload: id });
  };
};

/////////////////////////////////////////INVENTORY TRANSFERS & LEASE ///////////////////

export const fetchUnapprovedStockTransfers = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_UNAPPROVEDSTOCKTRANSFERS,
      payload: response.data.data.data,
    });
  };
};

export const fetchUnapprovedStockTransfer = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_UNAPPROVEDSTOCKTRANSFER,
      payload: response.data.data.data,
    });
  };
};

export const editUnapprovedStockTransfer = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_UNAPPROVEDSTOCKTRANSFER,
      payload: response.data.data.data,
    });
  };
};

export const deleteUnapprovedStockTransfer = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_UNAPPROVEDSTOCKTRANSFER, payload: id });
  };
};

/////////////////////////////////////////ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////PENDING ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchPendingAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PENDINGASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PENDINGASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editPendingAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PENDINGASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////WITHDRAWN ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchWithdrawnAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_WITHDRAWNASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_WITHDRAWNASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////ABORTED ASSET REQUISITIONS ACTION CREATORS ///////////////////

export const fetchAbortedAssetRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ABORTEDASSETREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAbortedAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ABORTEDASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editAbortedAssetRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ABORTEDASSETREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAbortedAssetRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ABORTEDASSETREQUISITION, payload: id });
  };
};

/////////////////////////////////////////RETURN ASSET POST REQUISITIONS ACTION CREATORS ///////////////////

export const fetchReturnAssetPostRequisitions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_RETURNASSETPOSTREQUISITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_RETURNASSETPOSTREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostRequisition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNASSETPOSTREQUISITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostRequisition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_RETURNASSETPOSTREQUISITION, payload: id });
  };
};

///////////////////////////////////////// ASSET RETIREMENT ACTION CREATORS ///////////////////

export const fetchAssetRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editAssetRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// ASSET PENDING RETIREMENT ACTION CREATORS ///////////////////

export const fetchPendingAssetRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PENDINGASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PENDINGASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editPendingAssetRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PENDINGASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// ASSET WITHDRAWN RETIREMENT ACTION CREATORS ///////////////////

export const fetchWithdrawnAssetRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_WITHDRAWNASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnAssetRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnAssetRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_WITHDRAWNASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// RETURN POST ASSET  RETIREMENT ACTION CREATORS ///////////////////

export const fetchReturnAssetPostRetirements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_RETURNPOSTASSETRETIREMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_RETURNPOSTASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostRetirement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNPOSTASSETRETIREMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostRetirement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_RETURNPOSTASSETRETIREMENT, payload: id });
  };
};

///////////////////////////////////////// ASSET  DISPOSITION ACTION CREATORS ///////////////////

export const fetchAssetDispostions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetDispostion = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editAssetDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETDISPOSITION, payload: id });
  };
};

///////////////////////////////////////// ASSET  PENDING DISPOSITION ACTION CREATORS ///////////////////

export const fetchPendingAssetDispostions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PENDINGASSETDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingAssetDispostion = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PENDINGASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editPendingAssetDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingAssetDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PENDINGASSETDISPOSITION, payload: id });
  };
};

///////////////////////////////////////// ASSET  WITHDRAWN DISPOSITION ACTION CREATORS ///////////////////

export const fetchWithdrawnAssetDispostions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_WITHDRAWNASSETDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnAssetDispostion = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnAssetDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNASSETDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnAssetDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_WITHDRAWNASSETDISPOSITION, payload: id });
  };
};

///////////////////////////////////////// ASSET RETURN POST DISPOSITION ACTION CREATORS ///////////////////

export const fetchReturnAssetPostDispositions = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_RETURNASSETPOSTDISPOSITIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_RETURNASSETPOSTDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostDisposition = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNASSETPOSTDISPOSITION,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostDisposition = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_RETURNASSETPOSTDISPOSITION, payload: id });
  };
};

//////////////////////////////////// ASSET MOVEMENTS ////////////////////

export const createAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_ASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET TRANSFER MOVEMENTS ////////////////////

export const createTransferAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_TRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransferAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_TRANSFERASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_TRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editTransferAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_TRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_TRANSFERASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET PENDING TRANSFER MOVEMENTS ////////////////////

export const createPendingTransferAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_PENDINGTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingTransferAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PENDINGTRANSFERASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchPendingTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PENDINGTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editPendingTransferAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PENDINGTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deletePendingTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PENDINGTRANSFERASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET WITHDRAWN TRANSFER MOVEMENTS ////////////////////

export const createWithdrawnTransferAssetMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_WITHDRAWNTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnTransferAssetMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_WITHDRAWNTRANSFERASSETMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchWithdrawnTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_WITHDRAWNTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editWithdrawnTransferAssetMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_WITHDRAWNTRANSFERASSETMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteWithdrawnTransferAssetMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_WITHDRAWNTRANSFERASSETMOVEMENT, payload: id });
  };
};

//////////////////////////////////// ASSET RETURN TRANSFER MOVEMENTS ////////////////////

export const createReturnAssetPostTransferMovements = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_RETURNASSETPOSTTRANSFERMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostTransferMovements = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_RETURNASSETPOSTTRANSFERMOVEMENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchReturnAssetPostTransferMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_RETURNASSETPOSTTRANSFERMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const editReturnAssetPostTransferMovement = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_RETURNASSETPOSTTRANSERMOVEMENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteReturnAssetPostTransferMovement = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_RETURNASSETPOSTTRANSFERMOVEMENT, payload: id });
  };
};

/////////////////////////////////// ASSET STORES ////////////////////

export const createAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_ASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETSTORE, payload: id });
  };
};

/////////////////////////////////// MAINTENANCE ASSET STORES ////////////////////

export const createMaintenanceAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_MAINTENANCEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_MAINTENANCEASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchMaintenanceAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_MAINTENANCEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editMaintenanceAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_MAINTENANCEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteMaintenanceAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_MAINTENANCEASSETSTORE, payload: id });
  };
};

/////////////////////////////////// LEASE ASSET STORES ////////////////////

export const createLeaseAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_LEASEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchLeaseAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_LEASEASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchLeaseAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_LEASEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editLeaseAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_LEASEASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteLeaseAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_LEASEASSETSTORE, payload: id });
  };
};

/////////////////////////////////// OWNERSHIP ASSET STORES ////////////////////

export const createOwnershipAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OWNERSHIPASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOwnershipAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OWNERSHIPASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOwnershipAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OWNERSHIPASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editOwnershipAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OWNERSHIPASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOwnershipAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OWNERSHIPASSETSTORE, payload: id });
  };
};

/////////////////////////////////// ASSET STORES SPACE ALLOCATION ////////////////////

export const createAssetStoreSpaceAllocation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_ASSETSTORESPACEALLOCATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreSpaceAllocations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETSTORESPACEALLOCATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreSpaceAllocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETSTORESPACEALLOCATION,
      payload: response.data.data.data,
    });
  };
};

export const editAssetStoreSpaceAllocation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETSTORESPACEALLOCATION,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetStoreSpaceAllocation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETSTORESPACEALLOCATION, payload: id });
  };
};

////////////////////////////////// SELL ASSET STORES ////////////////////

export const createSellAssetStore = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_SELLASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const fetchSellAssetStores = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_SELLASSETSTORES,
      payload: response.data.data.data,
    });
  };
};

export const fetchSellAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_SELLASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const editSellAssetStore = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_SELLASSETSTORE,
      payload: response.data.data.data,
    });
  };
};

export const deleteSellAssetStore = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_SELLASSETSTORE, payload: id });
  };
};

//////////////////////////////////  ASSET STORES CLOSURE ////////////////////

export const createAssetStoreClosure = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_ASSETSTORECLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreClosures = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_ASSETSTORECLOSURES,
      payload: response.data.data.data,
    });
  };
};

export const fetchAssetStoreClosure = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_ASSETSTORECLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const editAssetStoreClosure = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_ASSETSTORECLOSURE,
      payload: response.data.data.data,
    });
  };
};

export const deleteAssetStoreClosure = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_ASSETSTORECLOSURE, payload: id });
  };
};

//////////////////////////////////  STORE ASSET MOVEMENT TYPES  ////////////////////

export const createStoreAssetMovementType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_STOREMOVEMENTTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetMovementTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_STOREMOVEMENTTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetMovementType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_STOREMOVEMENTTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editStoreAssetMovementType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_STOREMOVEMENTTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteStoreAssetMovementType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_STOREMOVEMENTTYPE, payload: id });
  };
};

//////////////////////////////////  STORE DISPOSITION TYPES  ////////////////////

export const createStoreAssetDispositionType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_STOREDISPOSITIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetDispositionTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_STOREDISPOSITIONTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreAssetDispositionType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_STOREDISPOSITIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editStoreAssetDispositionType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_STOREDISPOSITIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteStoreAssetDispositionType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_STOREDISPOSITIONTYPE, payload: id });
  };
};

//////////////////////////////////  STORE MAINTENANCE TYPES  ////////////////////

export const createStoreMaintenanceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_STOREMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreMaintenanceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_STOREMAINTENANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchStoreMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_STOREMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editStoreMaintenanceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_STOREMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteStoreMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_STOREMAINTENANCETYPE, payload: id });
  };
};

//////////////////////////////////  TRANSFORMATION TYPES  ////////////////////

export const createTransformationType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_TRANSFORMATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_TRANSFORMATIONTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_TRANSFORMATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editTransformationType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_TRANSFORMATIONTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransformationType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_TRANSFORMATIONTYPE, payload: id });
  };
};

//////////////////////////////////  TRANSFORMATION PHASES  ////////////////////

export const createTransformationPhase = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_TRANSFORMATIONPHASE,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhases = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_TRANSFORMATIONPHASES,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_TRANSFORMATIONPHASE,
      payload: response.data.data.data,
    });
  };
};

export const editTransformationPhase = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_TRANSFORMATIONPHASE,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransformationPhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_TRANSFORMATIONPHASE, payload: id });
  };
};

//////////////////////////////////  TRANSFORMATION PHASE EVENTS  ////////////////////

export const createTransformationPhaseEvent = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_TRANSFORMATIONPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhaseEvents = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_TRANSFORMATIONPHASEEVENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchTransformationPhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_TRANSFORMATIONPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const editTransformationPhaseEvent = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_TRANSFORMATIONPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteTransformationPhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_TRANSFORMATIONPHASEEVENT, payload: id });
  };
};

//////////////////////////////////  FINISHING TYPES  ////////////////////

export const createFinishingType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_FINISHINGTYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishingTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_FINISHINGTYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishingType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_FINISHINGTYPE,
      payload: response.data.data.data,
    });
  };
};

export const editFinishingType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_FINISHINGTYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteFinishingType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_FINISHINGTYPE, payload: id });
  };
};

//////////////////////////////////  QUALITY ASSURANCE TYPES  ////////////////////

export const createQualityAssuranceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_QUALITYASSURANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssuranceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_QUALITYASSURANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssuranceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_QUALITYASSURANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssuranceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_QUALITYASSURANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssuranceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCETYPE, payload: id });
  };
};

//////////////////////////////////  QUALITY ASSURANCE PHASES  ////////////////////

export const createQualityAssurancePhase = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_QUALITYASSURANCEPHASE,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhases = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_QUALITYASSURANCEPHASES,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_QUALITYASSURANCEPHASE,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssurancePhase = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_QUALITYASSURANCEPHASE,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssurancePhase = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCEPHASE, payload: id });
  };
};

//////////////////////////////////  QUALITY ASSURANCE PHASE EVENT ////////////////////

export const createQualityAssurancePhaseEvent = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_QUALITYASSURANCEPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhaseEvents = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_QUALITYASSURANCEPHASEEVENTS,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurancePhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_QUALITYASSURANCEPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssurancePhaseEvent = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_QUALITYASSURANCEPHASEEVENT,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssurancePhaseEvent = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCEPHASEEVENT, payload: id });
  };
};

//////////////////////////////////  OPERATION MAINTENANCE TYPE ACTION TYPES ////////////////////

export const createOperationMaintenanceType = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OPERATIONMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenanceTypes = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OPERATIONMAINTENANCETYPES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OPERATIONMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationMaintenanceType = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OPERATIONMAINTENANCETYPE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationMaintenanceType = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OPERATIONMAINTENANCETYPE, payload: id });
  };
};

//////////////////////////////////  OPERATIONS ON FINISHING ////////////////////

export const createFinishing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_FINISHING,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_FINISHINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_FINISHING,
      payload: response.data.data.data,
    });
  };
};

export const editFinishing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_FINISHING,
      payload: response.data.data.data,
    });
  };
};

export const deleteFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_FINISHING, payload: id });
  };
};

//////////////////////////////////  OPERATIONS ON  QUALITY ASSURANCE ////////////////////

export const createQualityAssurance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_QUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_QUALITYASSURANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_QUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const editQualityAssurance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_QUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_QUALITYASSURANCE, payload: id });
  };
};

/////////////////////////////////  OPERATIONS MAINTENANCE ////////////////////

export const createOperationMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OPERATIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OPERATIONMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OPERATIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OPERATIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OPERATIONMAINTENANCE, payload: id });
  };
};

/////////////////////////////////  OPERATIONS PROCESSING ////////////////////

export const createOperationProcessing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OPERATIONPROCESSING,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProcessings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OPERATIONPROCESSINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProcessing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OPERATIONPROCESSING,
      payload: response.data.data.data,
    });
  };
};

export const editOperationProcessing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OPERATIONPROCESSING,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationProcessing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OPERATIONPROCESSING, payload: id });
  };
};

/////////////////////////////////  OPERATIONS OPERATIONS ////////////////////

export const createOperationOperation = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OPERATIONOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationOperations = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OPERATIONOPERATIONS,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OPERATIONOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const editOperationOperation = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OPERATIONOPERATION,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationOperation = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OPERATIONOPERATION, payload: id });
  };
};

/////////////////////////////////  OPERATIONS PRODUCTION MAINTENANCE ////////////////////

export const createOperationProductionMaintenance = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_OPERATIONPRODUCTIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionMaintenances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_OPERATIONPRODUCTIONMAINTENANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_OPERATIONPRODUCTIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationProductionMaintenance = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_OPERATIONPRODUCTIONMAINTENANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationProductionMaintenance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_OPERATIONPRODUCTIONMAINTENANCE, payload: id });
  };
};

/////////////////////////////////  OPERATIONS PRODUCTION QUALITY ASSURANCE ////////////////////

export const createOperationProductionQualityAssurance = (
  formValues,
  token
) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_PRODUCTIONQUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionQualityAssurances = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PRODUCTIONQUALITYASSURANCES,
      payload: response.data.data.data,
    });
  };
};

export const fetchOperationProductionQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PRODUCTIONQUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const editOperationProductionQualityAssurance = (
  id,
  formValues,
  token
) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PRODUCTIONQUALITYASSURANCE,
      payload: response.data.data.data,
    });
  };
};

export const deleteOperationProductionQualityAssurance = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PRODUCTIONQUALITYASSURANCE, payload: id });
  };
};

//////////////////////////////////  OPERATIONS ON PRODUCTION FINISHING ////////////////////

export const createProductionFinishing = (formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.post("/officeoperations", formValues);

    dispatch({
      type: CREATE_PRODUCTIONFINISHING,
      payload: response.data.data.data,
    });
  };
};

export const fetchProductionFinishings = (tokens) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${tokens}`;
  return async (dispatch) => {
    const response = await data.get("/officeoperations");

    dispatch({
      type: FETCH_PRODUCTIONFINISHINGS,
      payload: response.data.data.data,
    });
  };
};

export const fetchProductionFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.get(`/officeoperations/${id}`);
    dispatch({
      type: FETCH_PRODUCTIONFINISHING,
      payload: response.data.data.data,
    });
  };
};

export const editProductionFinishing = (id, formValues, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    const response = await data.patch(`/officeoperations/${id}`, formValues);
    dispatch({
      type: EDIT_PRODUCTIONFINISHING,
      payload: response.data.data.data,
    });
  };
};

export const deleteProductionFinishing = (id, token) => {
  data.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  return async (dispatch) => {
    await data.delete(`/officeoperations/${id}`);
    dispatch({ type: DELETE_PRODUCTIONFINISHING, payload: id });
  };
};
