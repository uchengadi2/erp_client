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
import { EDIT_PROJECTPLANNINGACTIVITY } from "../../../../actions/types";

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

const renderActivityField = ({
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
      helperText="Enter the Activity"
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
      helperText="Describe Activity"
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

const renderExpextedOutcomeField = ({
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
      helperText="Expected Outcome"
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

function ProjectsPlanningActivitiesEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [project, setProject] = useState(params.project);
  const [task, setTask] = useState(params.task);
  const [status, setStatus] = useState(params.status);
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [projectList, setProjectList] = useState([]);
  const [taskList, setTaskList] = useState([]);
  const [serviceOutletList, setServiceOutList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/projects");
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
  }, []);

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

  //fetch project tasks

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

  const handleProjectChange = (event) => {
    setProject(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleTaskChange = (event) => {
    setTask(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
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

  //get the Task  list
  const renderTaskList = () => {
    return taskList.map((item) => {
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
            style={{ width: 400, marginTop: 10, height: 38 }}
          >
            {renderTaskList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Task
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
            label="Task Status"
            style={{ width: 210, marginTop: 10, marginLeft: 0, height: 38 }}
            readOnly
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
            <MenuItem value="waived">Waived</MenuItem>
            <MenuItem value="dropped">Dropped</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Task Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Activity</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["status"] = status;
    formValues["project"] = project;
    formValues["task"] = task;

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/projectplanningactivities/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_PROJECTPLANNINGACTIVITY,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.activity} Activity is updated successfully!!!`
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

  const activityStartDate = params.startDate
    ? new Date(params.startDate).toISOString().slice(0, 10)
    : "";

  const activityEndDate = params.endDate
    ? new Date(params.endDate).toISOString().slice(0, 10)
    : "";

  return (
    <form id="projectsPlanningActivitiesEditForm">
      <Box
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
            <Typography variant="subtitle1"> Update Activity</Typography>
          </FormLabel>
        </Grid>

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
          id="task"
          name="task"
          type="text"
          component={renderTaskField}
          style={{ marginTop: 10 }}
        />
        <Grid container="row">
          <Grid item style={{ width: "52%" }}>
            <Field
              label=""
              id="status"
              name="status"
              type="text"
              component={renderStatusField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "45%", marginLeft: 10 }}>
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
        </Grid>

        <Field
          label=""
          id="activity"
          name="activity"
          defaultValue={params.activity}
          type="text"
          component={renderActivityField}
          style={{ marginTop: 10 }}
        />

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="startDate"
              name="startDate"
              defaultValue={activityStartDate}
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
              defaultValue={activityEndDate}
              type="date"
              component={renderEndDateField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="expectedOutcome"
          name="expectedOutcome"
          defaultValue={params.expectedOutcome}
          type="text"
          component={renderExpextedOutcomeField}
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
  form: "projectsPlanningActivitiesEditForm",
})(ProjectsPlanningActivitiesEditForm);
