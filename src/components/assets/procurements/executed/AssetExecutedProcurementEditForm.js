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
import { EDIT_ASSETPROCUREMENT } from "../../../../actions/types";

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

const renderProcurementItemField = ({
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
      helperText="Procurement Item"
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

const renderTotalCostOfProcurementField = ({
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
      helperText="Procurement Cost"
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
      helperText="Procurement Quantity"
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

const renderProcuremetDateField = ({
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
      helperText="Procurement Date"
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
      helperText="Describe Procurement"
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

function AssetExecutedProcurementEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [assetType, setAssetType] = useState(params.assetType);
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [procuredByList, setProcuredByList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [supplierList, setSupplierList] = useState([]);
  const [assetMeasurementUnitList, setAssetMeasurementUnitList] = useState([]);
  const [assetMeasurementUnit, setAssetMeasurementUnit] = useState(
    params.assetMeasurementUnit
  );
  const [currency, setCurrency] = useState(params.currency);
  const [totalAssetQuantity, setTotalAssetQuantity] = useState(params.quantity);
  const [remainingQuantityForAllocation, setRemainingQuantityForAllocation] =
    useState(params.remainingQuantityForAllocation);
  const [procuredBy, setProcuredBy] = useState(params.procuredBy);
  const [supplier, setSupplier] = useState(params.supplier);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //fetching all users

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/users");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setProcuredByList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetching all suppliers

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/users");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setSupplierList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetching asset types
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assettypes", {
        // params: { assetType: assetType },
      });
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

  //fetching asset measurement units

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
      setAssetMeasurementUnitList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

  //fetch an asset set

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAsetMeasurementUnitChange = (event) => {
    setAssetMeasurementUnit(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleProcuredByChange = (event) => {
    setProcuredBy(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleSupplierChange = (event) => {
    setSupplier(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  //   let remainingQuantity = 0;

  //   if (
  //     assetSetRemainingQuanity === undefined ||
  //     assetSetRemainingQuanity === null
  //   ) {
  //     remainingQuantity = totalAssetQuantity;
  //   } else {
  //     remainingQuantity = assetSetRemainingQuanity;
  //   }

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
    return assetMeasurementUnitList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the procured bY  list
  const renderProcuredByList = () => {
    return procuredByList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the procured bY  list
  const renderSupplierList = () => {
    return supplierList.map((item) => {
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
            style={{ width: 165, marginTop: 0, height: 55 }}
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
            style={{ width: 165, marginTop: 0, marginLeft: 10, height: 55 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Quantity Measurement Unit
          </FormHelperText>
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
            id="currency"
            //defaultValue={schemeType}
            value={currency}
            // onChange={props.handleCountryChange}
            onChange={handleCurrencyChange}
            label="Currency"
            style={{ width: 190, marginTop: 0, marginLeft: 0, height: 55 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderCurrencyList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Procurement Currency
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProcuredByField = ({
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
            labelId="procuredBy"
            id="procuredBy"
            //defaultValue={schemeType}
            value={procuredBy}
            // onChange={props.handleCountryChange}
            onChange={handleProcuredByChange}
            label="Procured By"
            style={{ width: 150, marginTop: 0, marginLeft: 10, height: 55 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderProcuredByList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Procured By
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetSupplierField = ({
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
            labelId="supplier"
            id="supplier"
            //defaultValue={schemeType}
            value={supplier}
            // onChange={props.handleCountryChange}
            onChange={handleSupplierChange}
            label="Asset Supplier"
            style={{ width: 170, marginTop: 0, marginLeft: 10, height: 55 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderSupplierList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Asset Supplier
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Procurement</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    //formValues["code"] = Str(formValues.code).limit(4).get();

    formValues["createdBy"] = props.userId;
    formValues["assetType"] = assetType;
    formValues["assetMeasurementUnit"] = assetMeasurementUnit;
    formValues["currency"] = currency;
    formValues["supplier"] = supplier;
    formValues["procuredBy"] = procuredBy;

    if (formValues["quantity"]) {
      const diff =
        parseFloat(totalAssetQuantity) - parseFloat(formValues["quantity"]);
      formValues["remainingQuantityForAllocation"] =
        remainingQuantityForAllocation - diff;
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/assetprocurements/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_ASSETPROCUREMENT,
            payload: response.data.data.data,
          });

          //recalculate asset quantity in the set document
          //   const remainingSetQuantity =
          //     remainingQuantity - formValues["quantity"];
          //   const dataValue = {
          //     remainingQuantity: remainingSetQuantity,
          //   };
          //   //adjustQuantityInAssetSet(assetSet, dataValue, props.token);

          //   const setResponse = await api.patch(
          //     `/assetsets/${assetSet}`,
          //     dataValue
          //   );

          //   console.log("set response:", setResponse);

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.procurementRefNumber}  Procurement is added successfully!!!`
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
  const dateOfProcurement = new Date(params.procurementDate)
    .toISOString()
    .slice(0, 10);

  return (
    <form id="assetExecutedProcurementEditForm">
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
            <Typography variant="subtitle1"> Asset Procurement</Typography>
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
              id="supplier"
              name="supplier"
              type="text"
              component={renderAssetSupplierField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="procurementItem"
              name="procurementItem"
              defaultValue={params.procurementItem}
              type="text"
              component={renderProcurementItemField}
              style={{ marginTop: 0, marginLeft: 10 }}
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
              type="number"
              component={renderQuantityField}
              style={{ width: 195 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="assetMeasurementUnit"
              name="assetMeasurementUnit"
              type="text"
              component={renderAssetMeasurementUnitField}
              style={{ marginLeft: 10, width: 180 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="totalCostOfProcurement"
              name="totalCostOfProcurement"
              defaultValue={params.totalCostOfProcurement}
              type="number"
              component={renderTotalCostOfProcurementField}
              style={{ marginLeft: 10, width: 170 }}
            />
          </Grid>
        </Grid>

        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="currency"
              name="currency"
              type="number"
              component={renderCurrencyField}
              style={{ width: 190 }}
            />
          </Grid>

          <Grid item>
            <Field
              label=""
              id="procurementDate"
              name="procurementDate"
              type="date"
              defaultValue={dateOfProcurement}
              component={renderProcuremetDateField}
              style={{ marginLeft: 10, width: 190 }}
            />
          </Grid>
          <Grid item>
            <Field
              label=""
              id="procuredBy"
              name="procuredBy"
              defaultValue={params.procuredBy}
              //defaultValue={measurementUnit}
              type="text"
              component={renderProcuredByField}
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
  form: "assetExecutedProcurementEditForm",
})(AssetExecutedProcurementEditForm);
