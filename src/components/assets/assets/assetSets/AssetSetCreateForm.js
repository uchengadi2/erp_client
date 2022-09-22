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
import { CREATE_ASSETSET } from "../../../../actions/types";

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
    marginLeft: 100,
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
      helperText="Enter Asset Set Label"
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
      helperText="Enter Ref Number"
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
      helperText="Enter Asset Quantity in this Set"
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

const renderAcquisitionDateField = ({
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
      helperText="Enter Acquisition Date"
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
      helperText="Describe Asset Set"
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

function AssetSetCreateForm(props) {
  const classes = useStyles();
  const [assetType, setAssetType] = useState();
  const [measurementUnit, setMeasurementUnit] = useState();
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [measurementUnitList, setMeasurementUnitList] = useState([]);
  const [assetProcurementList, setAssetProcurementList] = useState([]);
  const [assetProcurement, setAssetProcurement] = useState();
  const [remainingQuantityForAllocation, setRemainingQuantityForAllocation] =
    useState();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

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

  //fetch asset measurement unit
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

  //fetch asset procurements
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetprocurements", {
        params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.procurementRefNumber}-${item.procurementItem}`,
        });
      });
      setAssetProcurementList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

  //fetching a particular procurement detail

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      //   const response = await api.get("/assetsets", {
      //     params: { assetType: assetType },
      //   });

      const response = await api.get(`/assetprocurements/${assetProcurement}`);

      const item = response.data.data.data;
      allData.push({
        id: item._id,
        assetType: item.assetType,
        quantity: item.quantity,
        assetMeasurementUnit: item.assetMeasurementUnit,
        remainingQuantityForAllocation: item.remainingQuantityForAllocation,
      });

      setRemainingQuantityForAllocation(
        allData[0].remainingQuantityForAllocation
      );
      setMeasurementUnit(allData[0].assetMeasurementUnit);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetProcurement]);

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAsetMeasurementUnitChange = (event) => {
    setMeasurementUnit(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetProcurementChange = (event) => {
    setAssetProcurement(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

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

  //get the Asset Procurement  list
  const renderAssetProcurementUnitList = () => {
    return assetProcurementList.map((item) => {
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
            style={{ width: 195, marginTop: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Asset Type
          </FormHelperText>
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
            value={measurementUnit}
            // onChange={props.handleCountryChange}
            onChange={handleAsetMeasurementUnitChange}
            label="Unit of Measurement"
            style={{ width: 195, marginTop: 10, height: 38 }}
            //{...input}
            disabled
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Unit of Measurement
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProcurementField = ({
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
            labelId="assetProcurement"
            id="assetProcurement"
            //defaultValue={schemeType}
            value={assetProcurement}
            // onChange={props.handleCountryChange}
            onChange={handleAssetProcurementChange}
            label="Asset Type"
            style={{ width: 185, marginTop: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetProcurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Procurement
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderRemainingProcuredAllocatableQuantityField = ({
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
        helperText="Procurement Allocatable Quantity"
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={input.value}
        fullWidth
        //required
        type={type}
        {...custom}
        disabled
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
    return <React.Fragment> Create Asset Set</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["remainingQuantity"] = formValues["quantity"];
    formValues["assetType"] = assetType;
    formValues["assetProcurement"] = assetProcurement;
    formValues["assetMeasurementUnit"] = measurementUnit;

    if (!formValues["setRefNumber"]) {
      formValues["setRefNumber"] = "SET" + Math.floor(Math.random() * 1000000);
    }

    if (
      parseFloat(remainingQuantityForAllocation) <
      parseFloat(formValues["quantity"])
    ) {
      formValues["quantity"] = remainingQuantityForAllocation;
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/assetsets`, formValues);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_ASSETSET,
            payload: response.data.data.data,
          });

          //recalculate asset quantity in the procurement document
          const remainingProcurementQuantity =
            remainingQuantityForAllocation - formValues["quantity"];
          const dataValue = {
            remainingQuantityForAllocation: remainingProcurementQuantity,
          };

          const setResponse = await api.patch(
            `/assetprocurements/${assetProcurement}`,
            dataValue
          );

          props.handleSuccessfulCreateSnackbar(
            `${response.data.data.data.label} Asset Set is added successfully!!!`
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
    <form id="assetSetCreateForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
          height: 520,
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
            <Typography variant="subtitle1"> Asset Set</Typography>
          </FormLabel>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="assetType"
              name="assetType"
              type="text"
              component={renderAssetTypeField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="label"
              name="label"
              type="text"
              component={renderLabelField}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="procurement"
              name="procurement"
              type="text"
              component={renderProcurementField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="remainingQuantityForAllocation"
              name="remainingQuantityForAllocation"
              defaultValue={remainingQuantityForAllocation}
              type="number"
              component={renderRemainingProcuredAllocatableQuantityField}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="setRefNumber"
              name="setRefNumber"
              type="text"
              component={renderAssetSetRefNumberField}
              style={{ width: 195, marginTop: 10 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="quantity"
              name="quantity"
              type="number"
              component={renderQuantityField}
              style={{ marginLeft: 10, marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="assetMeasurementUnit"
              name="assetMeasurementUnit"
              defaultValue={measurementUnit}
              type="text"
              component={renderAssetMeasurementUnitField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="acquisitionDate"
              name="acquisitionDate"
              type="date"
              component={renderAcquisitionDateField}
              style={{ width: 195, marginLeft: 10, marginTop: 10 }}
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
  form: "assetSetCreateForm",
})(AssetSetCreateForm);
