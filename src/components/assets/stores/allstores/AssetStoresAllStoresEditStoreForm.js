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
import { EDIT_ASSETSTORE } from "../../../../actions/types";

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
    width: 200,
    marginLeft: 180,
    marginTop: 10,
    marginBottom: 5,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderNameField = ({
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
      helperText="Store name"
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
          height: 5,
        },
      }}
    />
  );
};

const renderStoreHeightField = ({
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
      helperText="Store Height"
      variant="outlined"
      placeholder="in sq ft"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 5,
        },
      }}
    />
  );
};

const renderStoreLengthField = ({
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
      helperText="Store Length"
      variant="outlined"
      placeholder="in sq ft"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      disabled
      //required
      type={type}
      {...custom}
      // {...input}

      onChange={input.onChange}
      inputProps={{
        style: {
          height: 5,
        },
      }}
    />
  );
};

const renderStoreBreadthField = ({
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
      helperText="Store Breadth"
      variant="outlined"
      placeholder="in sq ft"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      disabled
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 5,
        },
      }}
    />
  );
};

const renderStoreDescriptionField = ({
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
      helperText="Describe Store"
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

const renderStoreUnseableHeightField = ({
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
      helperText="Unusable Region Height"
      variant="outlined"
      placeholder="in sq ft"
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
          height: 5,
        },
      }}
    />
  );
};

const renderStoreUnseableLengthField = ({
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
      helperText="Unuseable Region Length"
      variant="outlined"
      placeholder="in sq ft"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      disabled
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 5,
        },
      }}
    />
  );
};

const renderStoreUnseableBreadthField = ({
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
      helperText="Unuseable Region Breadth"
      variant="outlined"
      placeholder="in sq ft"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      disabled
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 5,
        },
      }}
    />
  );
};

const renderAddressField = ({
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
      helperText="Store Address"
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
          height: 5,
        },
      }}
    />
  );
};

function AssetStoresAllStoresEditStoreForm(props) {
  const classes = useStyles();
  const [serviceOutlet, setServiceOutlet] = useState(
    props.params.serviceOutlet
  );
  const [storeType, setStoreType] = useState(props.params.storeType);
  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [storeTypeList, setStoreTypeList] = useState([]);
  const [locationList, setLocationList] = useState([]);
  const [cityList, setCityList] = useState([]);
  const [glHeadList, setGlHeadList] = useState([]);
  const [subGlHeadList, setSubGlHeadList] = useState([]);
  const [ledgerList, setLedgerList] = useState([]);

  const [location, setLocation] = useState(props.params.location);
  const [city, setCity] = useState(props.params.city);
  const [glLedger, setGlLedger] = useState(props.params.glHead);
  const [glSubLedger, setGlSubledger] = useState(props.params.subGlHead);
  const [ledger, setLedger] = useState(props.params.ledger);
  const [currentTotalSpaceForAllocation, setCurrentTotalSpaceForAllocation] =
    useState(props.params.totalAllocatableSpace);
  const [currentUnallocatedSpace, setCurrentUnallocatedSpace] = useState(
    props.params.unallocatedSpace
  );
  const [loading, setLoading] = useState(false);

  const params = props.params;

  const dispatch = useDispatch();

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

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/storetypes", {
        //params: { assetType: assetType },
      });
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

  //fetch location list

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/locations", {
        // params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setLocationList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch an cities

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/cities", {
        // params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setCityList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch the glheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/glheadaccounts", {
        // params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.glHead}-${item.name}`,
        });
      });
      setGlHeadList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch the subglheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/subglheadaccounts", {
        params: { glHead: glLedger, serviceOutlet: serviceOutlet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.subGlHead}-${item.name}`,
        });
      });
      setSubGlHeadList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [glLedger, serviceOutlet]);

  //fetch the asset store subglheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/accountledgerassetsubledgers", {
        //params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setLedgerList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [glSubLedger]);

  const handleStoreTypeChange = (event) => {
    setStoreType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleGeneralLedgerChange = (event) => {
    setGlLedger(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleGlSubLedgerChange = (event) => {
    setGlSubledger(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLedgerChange = (event) => {
    setLedger(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  // let remainingQuantity = 0;

  // if (
  //   assetSetRemainingQuanity === undefined ||
  //   assetSetRemainingQuanity === null
  // ) {
  //   remainingQuantity = totalAssetQuantity;
  // } else {
  //   remainingQuantity = assetSetRemainingQuanity;
  // }

  //get the Service Outlet list
  const renderServiceOutletList = () => {
    return serviceOutletList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the store tyoes
  const renderStoreTypeList = () => {
    return storeTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the location  list
  const renderLocationList = () => {
    return locationList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the city  list
  const renderCityList = () => {
    return cityList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the glhead list
  const renderGlHeadList = () => {
    return glHeadList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the subglhead list
  const renderSubGlHeadList = () => {
    return subGlHeadList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the ledger list
  const renderLedgerList = () => {
    return ledgerList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
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
            style={{ width: 163, marginTop: 10, marginLeft: 10, height: 40 }}
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

  const renderStoreLocationField = ({
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
            labelId="location"
            id="location"
            //defaultValue={schemeType}
            value={location}
            // onChange={props.handleCountryChange}
            onChange={handleLocationChange}
            label="Store Location"
            style={{ width: 180, marginTop: 0, marginLeft: 10, height: 40 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderLocationList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Store Location
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStoreCityField = ({
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
            labelId="city"
            id="city"
            //defaultValue={schemeType}
            value={city}
            // onChange={props.handleCountryChange}
            onChange={handleCityChange}
            label="City"
            style={{ width: 160, marginTop: 0, marginLeft: 10, height: 40 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderCityList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>City</FormHelperText>
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
            //defaultValue={schemeType}
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleServiceOutletChange}
            label="Service Outlet"
            style={{ width: 170, marginTop: 10, marginLeft: 0, height: 40 }}
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

  const renderStoreGlLedgerField = ({
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
            labelId="glHead"
            id="glHead"
            //defaultValue={schemeType}
            value={glLedger}
            // onChange={props.handleCountryChange}
            onChange={handleGeneralLedgerChange}
            label="General Ledger"
            style={{ width: 170, marginTop: 5, marginLeft: 0, height: 40 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderGlHeadList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            General Ledger
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStoreGlSubledgerField = ({
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
            labelId="subGlHead"
            id="subGlHead"
            //defaultValue={schemeType}
            value={glSubLedger}
            // onChange={props.handleCountryChange}
            onChange={handleGlSubLedgerChange}
            label="General Ledger"
            style={{ width: 190, marginTop: 5, marginLeft: 10, height: 40 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderSubGlHeadList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Subsidiary Ledger
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStoreLedgerField = ({
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
            labelId="ledger"
            id="ledger"
            //defaultValue={schemeType}
            value={ledger}
            // onChange={props.handleCountryChange}
            onChange={handleLedgerChange}
            label="Ledger"
            style={{ width: 170, marginTop: 5, marginLeft: 10, height: 40 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderLedgerList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Ledger</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Store</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;

    formValues["serviceOutlet"] = serviceOutlet;
    formValues["storeType"] = storeType;
    formValues["location"] = location;
    formValues["city"] = city;
    formValues["glHead"] = glLedger;
    formValues["subGlHead"] = glSubLedger;
    formValues["ledger"] = ledger;

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;

        const response = await api.patch(
          `/stores/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_ASSETSTORE,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Store is updated successfully!!!`
          );
          props.handleEditDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      editForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <form id="assetStoresAllStoresEditStoreForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 550,
          height: 550,
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
            style={{ color: "blue", fontSize: "1.5em", marginTop: 20 }}
            component="legend"
          >
            <Typography variant="subtitle3"> Store</Typography>
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
              id="storeType"
              name="storeType"
              type="text"
              component={renderStoreTypeField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="name"
              name="name"
              defaultValue={params.name}
              type="text"
              component={renderNameField}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="height"
              name="height"
              defaultValue={params.height}
              type="number"
              component={renderStoreHeightField}
              style={{ width: 195 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="length"
              name="length"
              defaultValue={params.length}
              type="number"
              component={renderStoreLengthField}
              style={{ marginLeft: 10, width: 180 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="breadth"
              name="breadth"
              defaultValue={params.breadth}
              type="number"
              component={renderStoreBreadthField}
              style={{ marginLeft: 15, width: 150 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="unuseableRegionHeight,"
              name="unuseableRegionHeight"
              defaultValue={params.unuseableRegionHeight}
              type="number"
              component={renderStoreUnseableHeightField}
              style={{ width: 180 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="unuseableRegionLength"
              name="unuseableRegionLength"
              defaultValue={params.unuseableRegionLength}
              type="number"
              component={renderStoreUnseableLengthField}
              style={{ marginLeft: 10, width: 160 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="unuseableRegionBreadth"
              name="unuseableRegionBreadth"
              defaultValue={params.unuseableRegionBreadth}
              //defaultValue={measurementUnit}
              type="number"
              component={renderStoreUnseableBreadthField}
              style={{ marginLeft: 15, width: 185 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="address,"
              name="address"
              defaultValue={params.address}
              type="text"
              component={renderAddressField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="location,"
              name="location,"
              type="text"
              component={renderStoreLocationField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="city"
              name="city"
              //defaultValue={measurementUnit}
              type="text"
              component={renderStoreCityField}
              style={{ marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="glHead,"
              name="glHead,"
              type="text"
              component={renderStoreGlLedgerField}
              style={{ width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="subGlHead,"
              name="subGlHead,"
              type="text"
              component={renderStoreGlSubledgerField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="ledger"
              name="ledger"
              //defaultValue={measurementUnit}
              type="text"
              component={renderStoreLedgerField}
              style={{ marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="description"
          name="description"
          defaultValue={params.description}
          type="text"
          component={renderStoreDescriptionField}
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
  form: "assetStoresAllStoresEditStoreForm",
})(AssetStoresAllStoresEditStoreForm);
