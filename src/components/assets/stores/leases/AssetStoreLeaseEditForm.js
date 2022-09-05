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
import { EDIT_LEASEASSETSTORE } from "../../../../actions/types";

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
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderBeneficiaryField = ({
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
      helperText="Lease Beneficiary"
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

const renderCostField = ({
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
      helperText="Lease Cost"
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
      helperText="Describe Store Lease"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={3}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderLeasePurposeField = ({
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
      helperText="Lease Purpose"
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

const renderLeaseCommencementDateField = ({
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
      helperText="Lease Commencement Date"
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

const renderLeaseEndDateField = ({
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
      helperText="Lease End Date"
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

function AssetStoreLeaseEditForm(props) {
  const classes = useStyles();
  const [serviceOutlet, setServiceOutlet] = useState(
    props.params.serviceOutlet
  );
  const [storeType, setStoreType] = useState(props.params.storeType);
  const [store, setStore] = useState(props.params.store);
  const [beneficiaryType, setBeneficiaryType] = useState(
    props.params.beneficiaryType
  );
  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [storeTypeList, setStoreTypeList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = props.params;

  const dispatch = useDispatch();

  //get the service outlet
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

  //get the store type

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

  //list the stores in the service outlet of a particular store type

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/stores", {
        params: { storeType: storeType, serviceOutlet: serviceOutlet },
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

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStoreTypeChange = (event) => {
    setStoreType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStoreChange = (event) => {
    setStore(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleBeneficiaryTypeChange = (event) => {
    setBeneficiaryType(event.target.value);
    //     props.handleCountryChange(event.target.value);
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

  //get the store type
  const renderStoreTypeList = () => {
    return storeTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the store list
  const renderStoreList = () => {
    return storeList.map((item) => {
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
            style={{ width: 195, marginTop: 10, marginLeft: 10, height: 40 }}
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

  const renderBeneficiaryTypeField = ({
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
            labelId="beneficiaryType"
            id="beneficiaryType"
            //defaultValue={schemeType}
            value={beneficiaryType}
            // onChange={props.handleCountryChange}
            onChange={handleBeneficiaryTypeChange}
            label="Beneficiary Type"
            style={{ width: 170, marginTop: 10, marginLeft: 0, height: 40 }}
            //{...input}
          >
            <MenuItem value="staff">Staff</MenuItem>
            <MenuItem value="customer">Customer</MenuItem>
            <MenuItem value="partner">Partner</MenuItem>
            <MenuItem value="vendor">Vendor</MenuItem>
            <MenuItem value="others">Others</MenuItem>

            {/* {renderStoreMaintenanceTypeList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Beneficiary Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Store Lease</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["updatedBy"] = props.userId;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["storeType"] = storeType;
    formValues["store"] = store;
    formValues["beneficiaryType"] = beneficiaryType;

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;

        const response = await api.patch(
          `/storeleases/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_LEASEASSETSTORE,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `Store Lease is added successfully!!!`
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

  const commencementDate = new Date(params.leaseCommencementDate)
    .toISOString()
    .slice(0, 10);

  const endDate = new Date(params.leaseEndDate).toISOString().slice(0, 10);

  return (
    <form id="assetStoreLeaseEditForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 550,
          height: 540,
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
            <Typography variant="subtitle1"> Store Lease</Typography>
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
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="store"
              name="store"
              type="text"
              component={renderStoreField}
              style={{ width: 180, marginLeft: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="beneficiaryType"
              name="beneficiaryType"
              type="text"
              component={renderBeneficiaryTypeField}
              style={{ marginLeft: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="beneficiary"
              name="beneficiary"
              defaultValue={params.beneficiary}
              type="text"
              component={renderBeneficiaryField}
              style={{ width: 180, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="cost"
              name="cost"
              defaultValue={params.cost}
              type="number"
              component={renderCostField}
              style={{ width: 180, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="leaseCommencementDate"
              name="leaseCommencementDate"
              defaultValue={commencementDate}
              type="date"
              component={renderLeaseCommencementDateField}
              style={{ width: 270, marginLeft: 0, marginTop: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="leaseEndDate"
              name="leaseEndDate"
              defaultValue={endDate}
              type="date"
              component={renderLeaseEndDateField}
              style={{ width: 270, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row"></Grid>
        <Field
          label=""
          id="purpose"
          name="purpose"
          defaultValue={params.purpose}
          type="text"
          component={renderLeasePurposeField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="description"
          name="description"
          defaultValue={params.description}
          type="text"
          component={renderDescriptionField}
          style={{ marginTop: 10 }}
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
  form: "assetStoreLeaseEditForm",
})(AssetStoreLeaseEditForm);
