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
import { EDIT_PRODUCTIONQUALITYASSURANCE } from "../../../../actions/types";

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
      helperText="Enter a Label"
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
      InputProps={{
        inputProps: {},
        style: {
          height: 38,
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
      InputProps={{
        inputProps: {},
        style: {
          height: 38,
        },
      }}
    />
  );
};

const renderQualityAssuranceCostField = ({
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
      helperText="Quality Assurance Cost"
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
      InputProps={{
        inputProps: {},
        style: {
          height: 38,
        },
      }}
    />
  );
};

const renderQualityAssuranceDateField = ({
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
      helperText="Quality Assurance Date"
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
      InputProps={{
        inputProps: {},
        style: {
          height: 38,
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
      helperText="Describe Quality Assurance"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={7}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderCommentField = ({
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
      helperText="Comment"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={7}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

const renderOutputField = ({
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
      helperText="Output"
      label={label}
      id={input.name}
      name={input.name}
      defaultValue={input.value}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={7}
      {...custom}
      // {...input}
      onChange={input.onChange}
    />
  );
};

function OperationsProductionQualityAssuranceEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [status, setStatus] = useState(params.status);
  const [qualityAssuranceType, setQualityAssuranceType] = useState(
    params.qualityAssuranceType
  );
  const [currency, setCurrency] = useState(params.currency);
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [operation, setOperation] = useState(params.operation);
  const [serviceOutletList, setServiceOutList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [operationList, setOperationList] = useState([]);

  const [qualityAssuranceTypeList, setQualityAssuranceTypeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //service outlet

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
      setServiceOutList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch project users

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationqualityassurancetypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setQualityAssuranceTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch the asset store subglheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationoperations", {
        params: { serviceOutlet: serviceOutlet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.label}`,
        });
      });
      setOperationList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [serviceOutlet]);

  //retrieve currencies
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/currencies");
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

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleQualityAssuranceChange = (event) => {
    setQualityAssuranceType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

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

  //get the operation list
  const renderOperationList = () => {
    return operationList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the quality assurance type list
  const renderQualityAssuranceTypeList = () => {
    return qualityAssuranceTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the currency list
  const renderCurrencyList = () => {
    return currencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
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
            label="Project Manager"
            style={{ width: 400, marginTop: 10, height: 38 }}
          >
            {renderServiceOutletList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Service Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderOperationField = ({
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
            labelId="operation"
            id="operation"
            //defaultValue={schemeType}
            value={operation}
            // onChange={props.handleCountryChange}
            onChange={handleOperationChange}
            label="Operation"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderOperationList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Operation</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderQualityAssuranceTypeField = ({
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
            labelId="qualityAssuranceType"
            id="qualityAssuranceType"
            //defaultValue={schemeType}
            value={qualityAssuranceType}
            // onChange={props.handleCountryChange}
            onChange={handleQualityAssuranceChange}
            label="Quality Assurance Type"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderQualityAssuranceTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Quality Assurance Type
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
            style={{ width: 180, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
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
            label="Processing Status"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
          >
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
            <MenuItem value="waived">Waived</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Processing Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Quality Assurance</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["status"] = status;
    formValues["operation"] = operation;
    formValues["qualityAssuranceType"] = qualityAssuranceType;
    formValues["currency"] = currency;

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/operationproductionqualityassurances/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_PRODUCTIONQUALITYASSURANCE,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.refNumber}-${response.data.data.data.label} Quality Assurance is updated successfully!!!`
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

  const dateOfQualityAssurance = params.qualityAssuranceDate
    ? new Date(params.qualityAssuranceDate).toISOString().slice(0, 10)
    : "";

  return (
    <form id="operationsProductionQualityAssuranceEditForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
          height: 500,
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
            <Typography variant="subtitle1"> Quality Assurance</Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="serviceOutlet"
          name="serviceOutlet"
          type="text"
          component={renderServiceOutletField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="operation"
          name="operation"
          type="text"
          component={renderOperationField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="qualityAssuranceType"
          name="qualityAssuranceType"
          type="text"
          component={renderQualityAssuranceTypeField}
          // style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="label"
          name="label"
          defaultValue={params.label}
          type="text"
          component={renderLabelField}
          style={{ marginTop: 10 }}
        />

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="refNumber"
              name="refNumber"
              defaultValue={params.refNumber}
              type="text"
              component={renderReferenceNumberField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="qualityAssuranceDate"
              name="qualityAssuranceDate"
              defaultValue={dateOfQualityAssurance}
              type="date"
              component={renderQualityAssuranceDateField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="status"
          name="status"
          type="date"
          component={renderStatusField}
          style={{ marginTop: 10 }}
        />

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="currency"
              name="currency"
              type="text"
              component={renderCurrencyField}
              style={{ marginTop: 5 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="qualityAssuranceCost"
              name="qualityAssuranceCost"
              defaultValue={params.qualityAssuranceCost}
              type="number"
              component={renderQualityAssuranceCostField}
              style={{ marginTop: 5 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="output"
          name="output"
          defaultValue={params.output}
          type="text"
          component={renderOutputField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="comment"
          name="comment"
          defaultValue={params.comment}
          type="text"
          component={renderCommentField}
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
  form: "operationsProductionQualityAssuranceEditForm",
})(OperationsProductionQualityAssuranceEditForm);
