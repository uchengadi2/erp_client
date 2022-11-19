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
import { EDIT_ASSETINVENTORY } from "../../../../actions/types";

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
    width: 220,
    marginLeft: 180,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderInventoryNameField = ({
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
      helperText="Inventory"
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

const renderReferenceNumberField = ({
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
      helperText="Reference Number"
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

const renderTotalCapacityField = ({
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
      helperText="Total Capacity"
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

const renderRemainingCapacityField = ({
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
      helperText="Remaining Capacity"
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
      disabled
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderTotalInventoryCostField = ({
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
      helperText="Total Inventory Cost"
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

const renderCostPerUnitField = ({
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
      helperText="Cost per Unit"
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
      helperText="Inventory Quantity"
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

const renderDatePlacedInStoreField = ({
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
      helperText="Date Placed In Store"
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

const renderSkuField = ({
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
      helperText="Sku"
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
      helperText="Describe Inventory"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={4}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function AssetInventoryEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [inventoryType, setInventoryType] = useState(params.inventoryType);
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [storeType, setStoreType] = useState(params.storeType);
  const [inventoryMeasurementUnit, setInventoryMeasurementUnit] = useState(
    params.inventoryMeasurementUnit
  );
  const [currency, setCurrency] = useState(params.currency);
  const [capacityUnit, setCapacityUnit] = useState(params.capacityUnit);
  const [status, setStatus] = useState(params.status);
  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [inventoryMeasurementUnitList, setInventoryMeasurementUnitList] =
    useState([]);
  const [storeList, setStoreList] = useState([]);
  const [storeTypeList, setStoreTypeList] = useState([]);
  const [inventoryTypeList, setInventoryTypeList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [store, setStore] = useState(params.store);
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
      const response = await api.get("/assetinventorytypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setInventoryTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch all asset maintenance types

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetinventorymeasurementunits", {
        params: { assetInventoryType: inventoryType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setInventoryMeasurementUnitList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [inventoryType]);

  //fetch all stores

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/storetypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setStoreTypeList(allData);
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
        params: { serviceOutlet: serviceOutlet, storeType: storeType },
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
  }, [serviceOutlet, storeType]);

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

  const handleStoreChange = (event) => {
    setStore(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStoreTypeChange = (event) => {
    setStoreType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleInventoryMeasurementUnitChange = (event) => {
    setInventoryMeasurementUnit(event.target.value);
  };
  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleInventoryTypeChange = (event) => {
    setInventoryType(event.target.value);
  };

  const handleCapacityUnitChange = (event) => {
    setCapacityUnit(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
  };

  //get the Inventory Type list
  const renderInventoryTypeList = () => {
    return inventoryTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the Inventory Measurement Unit  list
  const renderInventoryMeasurementUnitList = () => {
    return inventoryMeasurementUnitList.map((item) => {
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

  //get the storeTypeList type
  const renderStoreTypeList = () => {
    return storeTypeList.map((item) => {
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

  const renderInventoryTypeField = ({
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
            labelId="inventoryType"
            id="inventoryType"
            //defaultValue={schemeType}
            value={inventoryType}
            // onChange={props.handleCountryChange}
            onChange={handleInventoryTypeChange}
            label="Asset Type"
            style={{ width: 175, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderInventoryTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Inventory Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderInventoryMeasurementUnitField = ({
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
            labelId="inventoryMeasurementUnit"
            id="inventoryMeasurementUnit"
            //defaultValue={schemeType}
            value={inventoryMeasurementUnit}
            // onChange={props.handleCountryChange}
            onChange={handleInventoryMeasurementUnitChange}
            label="Unit of Measurement"
            style={{ width: 175, marginTop: 0, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderInventoryMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Inventory Measurement Unit
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
            style={{ width: 175, marginTop: 5, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderStoreList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Store</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStoreTypeField = ({
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
            labelId="storeType"
            id="storeType"
            //defaultValue={schemeType}
            value={storeType}
            // onChange={props.handleCountryChange}
            onChange={handleStoreTypeChange}
            label="Store Type"
            style={{ width: 175, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderStoreTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Store Type</FormHelperText>
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
            style={{ width: 150, marginTop: 0, marginLeft: 10, height: 38 }}
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

  const renderStatusField = ({
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
            labelId="status"
            id="status"
            //defaultValue={schemeType}
            value={status}
            // onChange={props.handleCountryChange}
            onChange={handleStatusChange}
            label="Status"
            style={{ width: 550, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value="available">Available</MenuItem>
            <MenuItem value="depleted">Depleted</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Status</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderCapacityUnitField = ({
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
            labelId="capacityUnit"
            id="capacityUnit"
            //defaultValue={schemeType}
            value={capacityUnit}
            // onChange={props.handleCountryChange}
            onChange={handleCapacityUnitChange}
            label="Capacity Unit"
            style={{ width: 175, marginTop: 0, marginLeft: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value="kilogram">Kilogram</MenuItem>
            <MenuItem value="grams">Grams</MenuItem>
            <MenuItem value="pounds">Pounds</MenuItem>
            <MenuItem value="tonnes">Tonnes</MenuItem>
            <MenuItem value="litres">Litres</MenuItem>
            <MenuItem value="centilitres">Centilitres</MenuItem>
            <MenuItem value="millilitres">Millilitres</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Capacity Unit
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Inventory</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["inventoryType"] = inventoryType;
    formValues["store"] = store;
    formValues["storeType"] = storeType;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["inventoryMeasurementUnit"] = inventoryMeasurementUnit;
    formValues["currency"] = currency;
    formValues["capacityUnit"] = capacityUnit;
    formValues["status"] = status;

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/assetinventories/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_ASSETINVENTORY,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.refNumber} Inventory is updated successfully!!!`
          );
          props.handleEditDialogOpenStatus();
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

  const dateAddedToStore = params.datePlacedInStore
    ? new Date(params.datePlacedInStore).toISOString().slice(0, 10)
    : "";

  return (
    <form id="assetInventoryEditForm">
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
          style={{ marginTop: 20, marginBottom: 10 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            <Typography variant="subtitle3"> Inventory</Typography>
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
              id="inventoryType"
              name="inventoryType"
              type="text"
              component={renderInventoryTypeField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="refNumber"
              name="refNumber"
              defaultValue={params.refNumber}
              type="text"
              component={renderReferenceNumberField}
              style={{ marginTop: 10, marginLeft: 10, width: 180 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="name"
          name="name"
          defaultValue={params.name}
          type="text"
          component={renderInventoryNameField}
          style={{ marginLeft: 0, marginTop: 5 }}
        />

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="storeType"
              name="storeType"
              type="text"
              component={renderStoreTypeField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="store"
              name="store"
              type="number"
              component={renderStoreField}
              // style={{ marginLeft: 10, width: 180 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="sku"
              name="sku"
              defaultValue={params.sku}
              type="text"
              component={renderSkuField}
              style={{ marginLeft: 10, marginTop: 5, width: 180 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="quantity"
              name="quantity"
              defaultValue={params.quantity}
              type="text"
              component={renderQuantityField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="inventoryMeasurementUnit"
              name="inventoryMeasurementUnit"
              type="number"
              component={renderInventoryMeasurementUnitField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="datePlacedInStore"
              name="datePlacedInStore"
              defaultValue={dateAddedToStore}
              type="date"
              component={renderDatePlacedInStoreField}
              style={{ marginLeft: 10, width: 165 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="capacityUnit"
              name="capacityUnit"
              type="text"
              component={renderCapacityUnitField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="totalCapacity"
              name="totalCapacity"
              defaultValue={params.totalCapacity}
              type="number"
              component={renderTotalCapacityField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="remainingCapacity"
              name="remainingCapacity"
              defaultValue={params.remainingCapacity}
              type="number"
              component={renderRemainingCapacityField}
              style={{ marginLeft: 10, width: 165 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="totalInventoryCost"
              name="totalInventoryCost"
              defaultValue={params.totalInventoryCost}
              type="text"
              component={renderTotalInventoryCostField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="currency"
              name="currency"
              type="number"
              component={renderCurrencyField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="costPerUnit"
              name="costPerUnit"
              defaultValue={params.costPerUnit}
              //defaultValue={measurementUnit}
              type="number"
              component={renderCostPerUnitField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="status"
          name="status"
          type="text"
          component={renderStatusField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="description"
          name="description"
          defaultValue={params.description}
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
  form: "assetInventoryEditForm",
})(AssetInventoryEditForm);
