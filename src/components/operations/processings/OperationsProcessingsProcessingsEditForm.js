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
import { EDIT_OPERATIONPROCESSING } from "../../../actions/types";

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
    width: 230,
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

const renderProcessingCostField = ({
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
      helperText="Processing Cost"
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

const renderProcessingDateField = ({
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
      helperText="Processing Date"
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
      helperText="Describe Processing"
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

const renderProcessorField = ({
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
      helperText="Enter Processor"
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

const renderSupervisorField = ({
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
      helperText="Enter Supervisor"
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

function OperationsProcessingsProcessingsEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [project, setProject] = useState(params.project);
  const [user, setUser] = useState();
  const [status, setStatus] = useState(params.status);
  const [processorType, setProcessorType] = useState(params.processorType);
  const [processingType, setProcessingType] = useState(params.processingType);
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [currency, setCurrency] = useState(params.currency);
  const [task, setTask] = useState(params.task);
  const [activity, setActivity] = useState(params.activity);
  const [operation, setOperation] = useState(params.operation);
  const [projectList, setProjectList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [serviceOutletList, setServiceOutList] = useState([]);

  const [taskList, setTaskList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [operationList, setOperationList] = useState([]);
  const [processorTypeList, setProcessorTypeList] = useState([]);
  const [processingTypeList, setProcessingTypeList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/projects", {
        params: { serviceOutlet: serviceOutlet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.refNumber}-${item.name}`,
        });
      });
      setProjectList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [serviceOutlet]);

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
      const response = await api.get("/operationprocessingtypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setProcessingTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/projectplanningtasks", {
        params: { project: project },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.refNumber}-${item.task}`,
        });
      });
      setTaskList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [project]);

  //fetch the subglheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/projectplanningactivities", {
        params: { task: task },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.refNumber}-${item.activity}`,
        });
      });
      setActivityList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [task]);

  //fetch the asset store subglheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationoperations", {
        params: { project: project },
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
  }, [project]);

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

  const handleProjectChange = (event) => {
    setProject(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleActivityChange = (event) => {
    setActivity(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleProcessingTypeChange = (event) => {
    setProcessingType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleProcessorTypeChange = (event) => {
    setProcessorType(event.target.value);
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

  //get the Project  list
  const renderProjectList = () => {
    return projectList.map((item) => {
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

  //get the task list
  const renderTaskList = () => {
    return taskList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the activity list
  const renderActivityList = () => {
    return activityList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the processing type list
  const renderProcessingTypeList = () => {
    return processingTypeList.map((item) => {
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

  const renderProjectField = ({
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
            labelId="project"
            id="project"
            //defaultValue={schemeType}
            value={project}
            // onChange={props.handleCountryChange}
            onChange={handleProjectChange}
            label="Project"
            style={{ width: 400, marginTop: 10, height: 38 }}
          >
            {renderProjectList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Project
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

  const renderTaskField = ({
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
            labelId="task"
            id="task"
            //defaultValue={schemeType}
            value={task}
            // onChange={props.handleCountryChange}
            onChange={handleTaskChange}
            label="Task"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderTaskList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Task</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderActivityField = ({
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
            labelId="activity"
            id="activity"
            //defaultValue={schemeType}
            value={activity}
            // onChange={props.handleCountryChange}
            onChange={handleActivityChange}
            label="Activity"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderActivityList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Activity</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProcessingTypeField = ({
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
            labelId="processingType"
            id="processingType"
            //defaultValue={schemeType}
            value={processingType}
            // onChange={props.handleCountryChange}
            onChange={handleProcessingTypeChange}
            label="Processing Type"
            style={{ width: 180, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderProcessingTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Processing Type
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
            label="Processing Status"
            style={{ width: 200, marginTop: 5, marginLeft: 10, height: 38 }}
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

  const renderProcessorTypeField = ({
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
            labelId="processorType"
            id="processorType"
            //defaultValue={schemeType}
            value={processorType}
            // onChange={props.handleCountryChange}
            onChange={handleProcessorTypeChange}
            label="Processor Type"
            style={{ width: 190, marginTop: 5, marginLeft: 0, height: 38 }}
          >
            <MenuItem value="human">Human</MenuItem>
            <MenuItem value="machine">Machine</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Processor Type
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

  const buttonContent = () => {
    return <React.Fragment> Update Processing</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["project"] = project;
    formValues["status"] = status;
    formValues["operation"] = operation;
    formValues["task"] = task;
    formValues["activity"] = activity;
    formValues["processingType"] = processingType;
    formValues["processorType"] = processorType;
    formValues["currency"] = currency;

    if (!formValues["refNumber"]) {
      formValues["refNumber"] =
        "OP" + "-" + Math.floor(Math.random() * 1000000) + "-" + "OPS";
    }

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/operationprocessings/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_OPERATIONPROCESSING,
            payload: response.data.data.data,
          });

          //reset the status of the project to closed
          const dataValue = {
            status: "in-progress",
          };
          const newResponse = await api.patch(
            `/operationoperations/${operation}`,
            dataValue
          );

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.refNumber}-${response.data.data.data.label} Processing is updated successfully!!!`
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

  const currenProcessingDate = params.processingDate
    ? new Date(params.processingDate).toISOString().slice(0, 10)
    : "";

  return (
    <form id="operationsProcessingsProcessingsEditForm">
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
            <Typography variant="subtitle1">Processing</Typography>
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
          id="project"
          name="project"
          type="text"
          component={renderProjectField}
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
          id="task"
          name="task"
          type="text"
          component={renderTaskField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="activity"
          name="activity"
          type="text"
          component={renderActivityField}
          style={{ marginTop: 10 }}
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
              id="processingDate"
              name="processingDate"
              defaultValue={currenProcessingDate}
              type="date"
              component={renderProcessingDateField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="processingType"
              name="processingType"
              type="text"
              component={renderProcessingTypeField}
              // style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="processor"
              name="processor"
              defaultValue={params.processor}
              type="text"
              component={renderProcessorField}
              style={{ marginTop: 5 }}
            />
          </Grid>
        </Grid>

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="processorType"
              name="processorType"
              type="text"
              component={renderProcessorTypeField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="status"
              name="status"
              type="date"
              component={renderStatusField}
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
              style={{ marginTop: 5 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="processingCost"
              name="processingCost"
              defaultValue={params.processingCost}
              type="number"
              component={renderProcessingCostField}
              style={{ marginTop: 5 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="supervisor"
          name="supervisor"
          defaultValue={params.supervisor}
          type="text"
          component={renderSupervisorField}
          style={{ marginTop: 10 }}
        />

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
  form: "operationsProcessingsProcessingsEditForm",
})(OperationsProcessingsProcessingsEditForm);
