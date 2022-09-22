import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import Select from "@material-ui/core/Select";
import api from "./../../../../apis/local";
import { CREATE_ASSETMOVEMENT } from "../../../../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 600,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 180,
    marginLeft: 190,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderLabelField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Transfer Label"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderMovementRefNumberField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Transfer Ref Number"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderMovementCostField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Transfer Cost"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderQuantityField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Stock Quantity Transfered"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderExpectedDateOfReturnDateField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Expected Return Date"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderMovementDateField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Transfer Date"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderMovementDestinationField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      //error={touched && invalid}
      helperText="Transfer Destination"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderMovementPurposeField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      //placeholder="category description"
      variant="outlined"
      helperText="Transfer Purpose"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderDescriptionField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      error={touched && invalid}
      //placeholder="category description"
      variant="outlined"
      helperText="Describe Transfer"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={1}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function AssetMovementsAllTransferCreateForm(props) {
  const classes = useStyles();
  const [assetType, setAssetType] = useState(null);
  const [serviceOutlet, setServiceOutlet] = useState();
  const [movementType, setMovementType] = useState();
  const [assetStock, setAssetStock] = useState();
  const [currency, setCurrency] = useState();
  const [measurementUnit, setMeasurementUnit] = useState();
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [movementTypeList, setMovementTypeList] = useState([]);
  const [measurementUnitList, setMeasurementUnitList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [assetStockList, setAssetStockList] = useState([]);
  const [destinationStoreList, seyDestinationStoreList] = useState([]);
  const [store, setStore] = useState(null);
  const [destinationStore, setDestinationStore] = useState();
  const [assetMeasurementUnit, setAssetMeasurementUnit] = useState();
  const [stockTotalQuantity, setStockTotalQuantity] = useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //fetch service outlets

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/serviceoutlets");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setServiceOutletList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch asset types
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assettypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setAssetTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch all asset maintenance types

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/movementtypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setMovementTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch all stores

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/stores", {
        params: { serviceOutlet: serviceOutlet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setStoreList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [serviceOutlet]);

  //fetch all destination stores

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/stores");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      seyDestinationStoreList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch asset measurement units
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetmeasurementunits", {
        params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setMeasurementUnitList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

  //fetch asset stocks
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetstocks", {
        params: { assetType: assetType, store: store },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setAssetStockList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType, store]);

  //fetching currencies

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/currencies", {
        // params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setCurrencyList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch  the detail of a asset stock

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      //   const response = await api.get("/assetsets", {
      //     params: { assetType: assetType },
      //   });

      const response = await api.get(`/assetstocks/${assetStock}`);

      const item = response.data.data.data;
      allData.push({
        id: item._id,
        name: `${item.name}`,
        quantity: item.quantity,
        assetMeasurementUnit: item.assetMeasurementUnit,
      });

      //setAssetSetList(allData);

      setAssetMeasurementUnit(allData[0].assetMeasurementUnit);
      setStockTotalQuantity(allData[0].quantity);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetStock]);

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStoreChange = (event) => {
    setStore(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleDestinationStoreChange = (event) => {
    setDestinationStore(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAsetMeasurementUnitChange = (event) => {
    setAssetMeasurementUnit(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleMovementTypeChange = (event) => {
    setMovementType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetStockChange = (event) => {
    setAssetStock(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  // if (
  //   assetSetRemainingQuanity === undefined ||
  //   assetSetRemainingQuanity === null
  // ) {
  //   remainingQuantity = totalAssetQuantity;
  // } else {
  //   remainingQuantity = assetSetRemainingQuanity;
  // }

  //get the Asset Type list
  const renderAssetTypeList = () => {
    return assetTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the Measurement Unit  list
  const renderAssetMeasurementUnitList = () => {
    return measurementUnitList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the service outlet  list
  const renderServiceOutletList = () => {
    return serviceOutletList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the disposition type
  const renderMovementTypeList = () => {
    return movementTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the currency  list
  const renderCurrencyList = () => {
    return currencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the store  list
  const renderStoreList = () => {
    return storeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the destination store  list
  const renderDestinationStoreList = () => {
    return destinationStoreList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the asset stock  list
  const renderAssetStockList = () => {
    return assetStockList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderAssetTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="assetType"
            id="assetType"
            //defaultValue={schemeType}
            value={assetType}
            // onChange={props.handleCountryChange}
            onChange={handleAssetTypeChange}
            label="Asset Type"
            style={{ width: 175, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Asset Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetMeasurementUnitField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="assetMeasurementUnit"
            id="assetMeasurementUnit"
            //defaultValue={schemeType}
            value={assetMeasurementUnit}
            // onChange={props.handleCountryChange}
            onChange={handleAsetMeasurementUnitChange}
            label="Unit of Measurement"
            style={{ width: 150, marginTop: 0, marginLeft: 10, height: 38 }}
            //{...input}
            readOnly={true}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Stock Measurement Unit
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderServiceOutletField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="serviceOutlet"
            id="serviceOutlet"
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleServiceOutletChange}
            label="Service Outlet"
            style={{ width: 175, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderServiceOutletList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Service Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderSetRemainingQuantityField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Set Remaining Quantity"
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={input.value}
        fullWidth
        //required
        type={type}
        disabled
        {...custom}
        // {...input}
        onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
        }}
      />
    );
  };

  const renderStoreField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="store"
            id="store"
            //defaultValue={schemeType}
            value={store}
            // onChange={props.handleCountryChange}
            onChange={handleStoreChange}
            label="Store"
            style={{ width: 175, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderStoreList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Source Store
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderDestinationStoreField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="destinationStore"
            id="destinationStore"
            //defaultValue={schemeType}
            value={destinationStore}
            // onChange={props.handleCountryChange}
            onChange={handleDestinationStoreChange}
            label="Destination Store"
            style={{ width: 190, marginTop: 0, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderDestinationStoreList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Destination Store
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderMovementTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="movementType"
            id="movementType"
            //defaultValue={schemeType}
            value={movementType}
            // onChange={props.handleCountryChange}
            onChange={handleMovementTypeChange}
            label="Movement Type"
            style={{ width: 180, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderMovementTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Movement Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetStockField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="assetStock"
            id="assetStock"
            //defaultValue={schemeType}
            value={assetStock}
            // onChange={props.handleCountryChange}
            onChange={handleAssetStockChange}
            label="Asset Stock"
            style={{ width: 175, marginTop: 5, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetStockList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Stock</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCurrencyField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined">
          {/* <InputLabel id="vendor_city">City</InputLabel> */}

          <Select
            labelId="currency"
            id="curency"
            //defaultValue={schemeType}
            value={currency}
            // onChange={props.handleCountryChange}
            onChange={handleCurrencyChange}
            label="Currency"
            style={{ width: 160, marginTop: 0, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderCurrencyList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Currency</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetSetRefNumberField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <TextField
        //error={touched && invalid}
        helperText="Set Reference Number"
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={input.value}
        fullWidth
        //required
        type={type}
        disabled
        {...custom}
        // {...input}
        onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
        }}
      />
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Transfer Stock</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["assetType"] = assetType;
    formValues["store"] = store;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["movementType"] = movementType;
    formValues["currency"] = currency;
    formValues["assetStock"] = assetStock;
    formValues["assetMeasurementUnit"] = assetMeasurementUnit;

    if (stockTotalQuantity < formValues["quantity"]) {
      formValues["quantity"] = stockTotalQuantity;
    }

    if (!formValues["transferRefNumber"]) {
      formValues["transferRefNumber"] =
        "MV" + "-" + Math.floor(Math.random() * 1000000000) + "-" + "ST";
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/assetmovements`, formValues);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_ASSETMOVEMENT,
            payload: response.data.data.data,
          });

          //recalculate stock quantity in the store
          const remainingStockQuantityInStore =
            stockTotalQuantity - formValues["quantity"];
          const dataValue = {
            quantity: remainingStockQuantityInStore,
          };

          const setResponse = await api.patch(
            `/assetstocks/${assetStock}`,
            dataValue
          );

          props.handleSuccessfulCreateSnackbar(
            `${response.data.data.data.transferRefNumber} Stock Transfer is added successfully!!!`
          );
          props.handleDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <form id="assetMovementsAllTransferCreateForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 550,
          height: 545,
        }}
        noValidate
        autoComplete="off"
      >
        <Grid
          item
          container
          style={{ marginTop: 10, marginBottom: 10 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            <Typography variant="subtitle1"> Stock Transfer</Typography>
          </FormLabel>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="serviceOutlet"
              name="serviceOutlet"
              type="text"
              component={renderServiceOutletField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="assetType"
              name="assetType"
              type="text"
              component={renderAssetTypeField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="movementType"
              name="movementType"
              type="text"
              component={renderMovementTypeField}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="store"
              name="store"
              type="text"
              component={renderStoreField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="assetStock"
              name="assetStock"
              type="text"
              component={renderAssetStockField}
              // style={{ marginLeft: 10, width: 180 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="label"
              name="label"
              type="text"
              component={renderLabelField}
              style={{ marginLeft: 10, marginTop: 5, width: 180 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="transferRefNumber"
              name="transferRefNumber"
              type="text"
              component={renderMovementRefNumberField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="quantity"
              name="quantity"
              type="number"
              component={renderQuantityField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="assetMeasurementUnit"
              name="assetMeasurementUnit"
              //defaultValue={measurementUnit}
              type="text"
              component={renderAssetMeasurementUnitField}
              style={{ marginLeft: 20 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="transferDate"
              name="transferDate"
              type="date"
              component={renderMovementDateField}
              style={{ width: 170 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="expectedDateOfAssetReturn"
              name="expectedDateOfAssetReturn"
              type="date"
              component={renderExpectedDateOfReturnDateField}
              style={{ width: 170, marginLeft: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="destinationStore"
              name="destinationStore"
              type="text"
              component={renderDestinationStoreField}
              //   style={{ marginLeft: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="totalTransferCost"
              name="totalTransferCost"
              type="number"
              component={renderMovementCostField}
              style={{ marginLeft: 0, width: 170 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="Currency"
              name="Currency"
              //defaultValue={measurementUnit}
              type="text"
              component={renderCurrencyField}
              style={{ marginTop: 0 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="purpose"
              name="purpose"
              type="text"
              component={renderMovementPurposeField}
              style={{ marginTop: 0, width: 200, marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="description"
          name="description"
          type="text"
          component={renderDescriptionField}
          style={{ marginTop: 10, width: 550 }}
        />

        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          {loading ? (
            <CircularProgress size={30} color="inherit" />
          ) : (
            buttonContent()
          )}
        </Button>
      </Box>
    </form>
  );
}

export default reduxForm({
  form: "assetMovementsAllTransferCreateForm",
})(AssetMovementsAllTransferCreateForm);