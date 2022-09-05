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
import { CREATE_ASSETSTORESPACEALLOCATION } from "../../../../actions/types";

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

const renderAllocationCostField = ({
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
      helperText="Allocation Cost"
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
      helperText="Describe Space Allocation"
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

const renderDateAllocationField = ({
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
      helperText="Allocation Date"
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

const renderSpaceAllocationField = ({
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
      helperText="Space Allocated"
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

const renderAllocationCommencementDateField = ({
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
      helperText="Allocation Commencement Date"
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

const renderAllocationEndDateField = ({
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
      helperText="Allocation End Date"
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

function AssetStoreAllocationStoreSpaceCreateForm(props) {
  const classes = useStyles();
  const [serviceOutlet, setServiceOutlet] = useState();
  const [storeType, setStoreType] = useState();
  const [store, setStore] = useState();
  const [beneficiaryServiceOutlet, setBeneficiaryServiceOutlet] = useState();
  const [storeUnallocatedSpace, setStoreUnallocatedSpace] = useState();
  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [storeTypeList, setStoreTypeList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(false);

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

  //retrieve the selected store details

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/stores/${store}`);

      const item = response.data.data.data;
      allData.push({
        id: item._id,
        unallocatedSpace: item.unallocatedSpace,
      });

      setStoreUnallocatedSpace(allData[0].unallocatedSpace);
    };

    //call the function

    fetchData().catch(console.error);
  }, [store]);

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

  const handleBeneficiaryServiceOutletChange = (event) => {
    setBeneficiaryServiceOutlet(event.target.value);
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

  const renderBeneficiaryServiceOutletField = ({
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
            labelId="beneficiaryServiceOutlet"
            id="beneficiaryServiceOutlet"
            //defaultValue={schemeType}
            value={beneficiaryServiceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleBeneficiaryServiceOutletChange}
            label="Beneficiary Service Outlet"
            style={{ width: 170, marginTop: 10, marginLeft: 0, height: 40 }}
            //{...input}
          >
            {renderServiceOutletList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Beneficiary Service Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderSpaceForAllocationField = ({
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
        helperText="Space For Allocation (sq ft)"
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
            height: 5,
          },
        }}
      />
    );
  };

  let totalUnallocatedSpace = 0;
  if (storeUnallocatedSpace) {
    console.log("unallocated space is:", storeUnallocatedSpace.toFixed(2));
    totalUnallocatedSpace = storeUnallocatedSpace.toFixed(2);
  }
  const buttonContent = () => {
    return <React.Fragment> Allocate Store Space</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["storeType"] = storeType;
    formValues["store"] = store;
    formValues["beneficiaryServiceOutlet"] = beneficiaryServiceOutlet;

    if (+totalUnallocatedSpace < +formValues["spaceAllocated"]) {
      formValues["spaceAllocated"] = totalUnallocatedSpace;
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/storespaceallocations`, formValues);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_ASSETSTORESPACEALLOCATION,
            payload: response.data.data.data,
          });

          //reduce that space allocatable of the store

          //recalculate asset quantity in the set document
          const remainingStoreSpaceAvailable =
            totalUnallocatedSpace - formValues["spaceAllocated"];
          const dataValue = {
            unallocatedSpace: remainingStoreSpaceAvailable,
          };
          //adjustQuantityInAssetSet(assetSet, dataValue, props.token);

          const setResponse = await api.patch(`/stores/${store}`, dataValue);

          console.log("set response:", setResponse);

          props.handleSuccessfulCreateSnackbar(
            `This Store Space  is allocated successfully!!!`
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
    <form id="assetStoreAllocationStoreSpaceCreateForm">
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
            <Typography variant="subtitle1"> Store Space Allocation</Typography>
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
              id="beneficiaryServiceOutlet"
              name="beneficiaryServiceOutlet"
              type="text"
              component={renderBeneficiaryServiceOutletField}
              style={{ marginLeft: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="spaceForAllocation"
              name="spaceForAllocation"
              defaultValue={totalUnallocatedSpace}
              type="text"
              component={renderSpaceForAllocationField}
              style={{ width: 180, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="spaceAllocated"
              name="spaceAllocated"
              type="number"
              component={renderSpaceAllocationField}
              style={{ width: 180, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="dateAllocated"
              name="dateAllocated"
              type="date"
              component={renderDateAllocationField}
              style={{ width: 270, marginLeft: 0, marginTop: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="allocationCost"
              name="allocationCost"
              type="number"
              component={renderAllocationCostField}
              style={{ width: 270, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="allocationCommencementDate"
              name="allocationCommencementDate"
              type="date"
              component={renderAllocationCommencementDateField}
              style={{ width: 270, marginLeft: 0, marginTop: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="allocationEndDate"
              name="allocationEndDate"
              type="date"
              component={renderAllocationEndDateField}
              style={{ width: 270, marginLeft: 10, marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="description"
          name="description"
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
  form: "assetStoreAllocationStoreSpaceCreateForm",
})(AssetStoreAllocationStoreSpaceCreateForm);
