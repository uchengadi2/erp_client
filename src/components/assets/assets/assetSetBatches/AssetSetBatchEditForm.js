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
import { EDIT_ASSETSETBATCH } from "../../../../actions/types";
import { editAssetSet } from "../../../../actions/index";

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
      helperText="Batch Label"
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
    />
  );
};

const renderAssetBatchRefNumberField = ({
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
      helperText="Batch Ref Number"
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
      helperText="Quantity in Batch"
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
      helperText="Acquisition Date"
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
      helperText="Describe Batch"
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

function AssetSetBatchEditForm(props) {
  const classes = useStyles();
  const [assetType, setAssetType] = useState(props.params.assetType);
  const [assetSet, setAssetSet] = useState(props.params.assetSet);
  const [measurementUnit, setMeasurementUnit] = useState();
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [assetSetList, setAssetSetList] = useState([]);
  const [measurementUnitList, setMeasurementUnitList] = useState([]);
  const [assetSetRef, setAssetSetRef] = useState(null);
  const [assetSetRemainingQuanity, setAssetSetRemainingQuantity] =
    useState(null);
  const [assetSetMeasurementUnit, setAsetSetMeasurementUnit] = useState(null);
  const [totalAssetQuantity, setTotalAssetQuantity] = useState();
  const [loading, setLoading] = useState(false);

  const params = props.params;

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

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetsets", {
        params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.label}`,
        });
      });
      setAssetSetList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

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

  //fetch an asset set

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      //   const response = await api.get("/assetsets", {
      //     params: { assetType: assetType },
      //   });

      const response = await api.patch(`/assetsets/${assetSet}`);

      const item = response.data.data.data;
      allData.push({
        id: item._id,
        label: `${item.label}`,
        assetType: item.assetType,
        quantity: item.quantity,
        remainingQuantity: item.remainingQuantity,
        assetMeasurementUnit: item.assetMeasurementUnit,
        setRefNumber: item.setRefNumber,
        acquisitionDate: item.acquisitionDate,
      });

      //setAssetSetList(allData);
      setAssetSetRef(allData[0].setRefNumber);
      setAsetSetMeasurementUnit(allData[0].assetMeasurementUnit);
      setAssetSetRemainingQuantity(allData[0].remainingQuantity);
      setTotalAssetQuantity(allData[0].quantity);
      setMeasurementUnit(allData[0].assetMeasurementUnit);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetSet]);

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetSetChange = (event) => {
    setAssetSet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAsetMeasurementUnitChange = (event) => {
    setMeasurementUnit(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  let remainingQuantity = 0;

  if (
    assetSetRemainingQuanity === undefined ||
    assetSetRemainingQuanity === null
  ) {
    remainingQuantity = totalAssetQuantity;
  } else {
    remainingQuantity = assetSetRemainingQuanity;
  }

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

  //get the asset set  list
  const renderAssetSetList = () => {
    return assetSetList.map((item) => {
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
            style={{ width: 165, marginTop: 10, height: 55 }}
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
            value={measurementUnit}
            // onChange={props.handleCountryChange}
            onChange={handleAsetMeasurementUnitChange}
            label="Unit of Measurement"
            style={{ width: 150, marginTop: 0, marginLeft: 10, height: 55 }}
            //{...input}
            readOnly={true}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Batch Measurement Unit
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetSetField = ({
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
            labelId="assetSet"
            id="assetSet"
            //defaultValue={schemeType}
            value={assetSet}
            // onChange={props.handleCountryChange}
            onChange={handleAssetSetChange}
            label="Asset Set"
            style={{ width: 165, marginTop: 10, marginLeft: 10, height: 55 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetSetList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Asset Set</FormHelperText>
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
      />
    );
  };

  const renderAssetSetMeasurementUnitField = ({
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
            labelId="setMeasurementUnit"
            id="setMeasurementUnit"
            //defaultValue={schemeType}
            value={assetSetMeasurementUnit}
            // onChange={props.handleCountryChange}
            onChange={handleAsetMeasurementUnitChange}
            label="Unit of Measurement"
            style={{ width: 150, marginTop: 0, marginLeft: 10, height: 55 }}
            //{...input}
            readOnly={true}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Set Measurement Unit
          </FormHelperText>
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
      />
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Asset Batch</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["assetType"] = assetType;
    formValues["assetSet"] = assetSet;
    formValues["assetMeasurementUnit"] = measurementUnit;

    if (remainingQuantity < formValues["quantity"]) {
      formValues["quantity"] = remainingQuantity;
    }

    formValues["remainingQuantityInBatch"] = formValues["quantity"];

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/assetsetbatches/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_ASSETSETBATCH,
            payload: response.data.data.data,
          });

          //recalculate asset quantity in the set document
          // const remainingSetQuantity =
          //   remainingQuantity - formValues["quantity"];
          // const dataValue = {
          //   id: assetSet,
          //   remainingQuantity: remainingSetQuantity,
          // };
          // const setResponse = await api.patch(
          //   `/assetsets/${assetSet}`,
          //   dataValue
          // );

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.label} Batch is updated successfully!!!`
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
    <form id="assetSetBatchEditForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 550,
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
            <Typography variant="subtitle1"> Asset Batch</Typography>
          </FormLabel>
        </Grid>
        <Grid container direction="row">
          <Grid item>
            <Field
              label=""
              id="assetType"
              name="assetType"
              // defaultValue={params.assetType}
              type="text"
              component={renderAssetTypeField}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="assetSet"
              name="assetSet"
              //defaultValue={params.assetSet}
              type="text"
              component={renderAssetSetField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="label"
              name="label"
              defaultValue={params.label}
              type="text"
              component={renderLabelField}
              style={{ marginTop: 10, marginLeft: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="setRefNumber"
              name="setRefNumber"
              defaultValue={assetSetRef}
              type="text"
              component={renderAssetSetRefNumberField}
              style={{ width: 195 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="remainingQuantity"
              name="remainingQuantity"
              defaultValue={remainingQuantity}
              type="number"
              component={renderSetRemainingQuantityField}
              style={{ marginLeft: 10, width: 180 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="setMeasurementUnit"
              name="setMeasurementUnit"
              type="text"
              component={renderAssetSetMeasurementUnitField}
              style={{ marginLeft: 15, width: 150 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="batchRefNumber"
              name="batchRefNumber"
              defaultValue={params.batchRefNumber}
              type="text"
              component={renderAssetBatchRefNumberField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="quantity"
              name="quantity"
              defaultValue={params.quantity}
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
              defaultValue={params.assetMeasurementUnit}
              //defaultValue={measurementUnit}
              type="text"
              component={renderAssetMeasurementUnitField}
              style={{ marginLeft: 20 }}
            />
          </Grid>
        </Grid>

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
  form: "assetSetBatchEditForm",
})(AssetSetBatchEditForm);
