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
import api from "./../../../apis/local";
import { CREATE_PROJECTPROJECT } from "../../../actions/types";

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
      helperText="Give Project a Name"
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

const renderSponsorField = ({
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
      helperText="Enter Project Sponsor"
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

const renderTotalBudgetField = ({
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
      helperText="Total Project Budget"
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

const renderRemainingBudgetedAmountField = ({
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
      helperText="Remaining Budgeted Amount"
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

const renderStartDateField = ({
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
      helperText="Enter Start Date"
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

const renderEndDateField = ({
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
      helperText="Enter End Date"
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
      helperText="Describe Project"
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

function ProjectsProjectsProjectsCreateForm(props) {
  const classes = useStyles();
  const [projectManager, setProjectManager] = useState();
  const [status, setStatus] = useState("pending");
  const [serviceOutlet, setServiceOutlet] = useState();
  const [currency, setCurrency] = useState();
  const [projectManagerList, setProjectManagerList] = useState([]);
  const [serviceOutletList, setServiceOutList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

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
      setProjectManagerList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

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

  const handleProjectManagerChange = (event) => {
    setProjectManager(event.target.value);
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

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  //get the Project Manager list
  const renderProjectManagerList = () => {
    return projectManagerList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the Currency list
  const renderCurrencyList = () => {
    return currencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
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

  const renderProjectManagerField = ({
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
            labelId="projectManager"
            id="projectManager"
            //defaultValue={schemeType}
            value={projectManager}
            // onChange={props.handleCountryChange}
            onChange={handleProjectManagerChange}
            label="Project Manager"
            style={{ width: 400, marginTop: 10, height: 38 }}
          >
            {renderProjectManagerList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Project Manager
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
            label="Project Manager"
            style={{ width: 190, marginTop: 10, height: 38 }}
          >
            {renderCurrencyList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Currency
          </FormHelperText>
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
            label="Project Status"
            style={{ width: 200, marginTop: 10, marginLeft: 10, height: 38 }}
            readOnly
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
            <MenuItem value="closed">Closed</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Project Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Create Project</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["currency"] = currency;
    formValues["status"] = status;
    formValues["projectManager"] = projectManager;
    formValues["remainingBudgetedAmount"] = formValues["totalBudget"];
    if (!formValues["refNumber"]) {
      formValues["refNumber"] =
        "PJ" + "-" + Math.floor(Math.random() * 100000000) + "-" + "PRO";
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(`/projects`, formValues);

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_PROJECTPROJECT,
            payload: response.data.data.data,
          });

          props.handleSuccessfulCreateSnackbar(
            `${response.data.data.data.name} Project is created successfully!!!`
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
    <form id="projectsProjectsProjectsCreateForm">
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
            <Typography variant="subtitle1"> Create Project</Typography>
          </FormLabel>
        </Grid>
        {/* <Field
          label=""
          id="serviceOutlet"
          name="serviceOutlet"
          type="text"
          component={renderServiceOutletField}
          style={{ marginTop: 10 }}
        /> */}
        <Grid container="row">
          <Grid item style={{ width: "52%" }}>
            <Field
              label=""
              id="name"
              name="name"
              type="text"
              component={renderNameField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "45%", marginLeft: 10 }}>
            <Field
              label=""
              id="refNumber"
              name="refNumber"
              type="text"
              component={renderReferenceNumberField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="sponsor"
          name="sponsor"
          type="text"
          component={renderSponsorField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="projectManager"
          name="projectManager"
          type="text"
          component={renderProjectManagerField}
          style={{ marginTop: 10 }}
        />
        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="totalBudget"
              name="totalBudget"
              type="number"
              component={renderTotalBudgetField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="remainingBudgetedAmount"
              name="remainingBudgetedAmount"
              type="number"
              component={renderRemainingBudgetedAmountField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="currency"
              name="currency"
              type="text"
              component={renderCurrencyField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="status"
              name="status"
              type="text"
              component={renderStatusField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="startDate"
              name="startDate"
              type="date"
              component={renderStartDateField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="endDate"
              name="endDate"
              type="date"
              component={renderEndDateField}
              style={{ marginTop: 10 }}
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
  form: "projectsProjectsProjectsCreateForm",
})(ProjectsProjectsProjectsCreateForm);
