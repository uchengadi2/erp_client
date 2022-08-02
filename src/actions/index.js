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
