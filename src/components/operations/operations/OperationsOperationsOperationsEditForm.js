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
import { EDIT_OPERATIONOPERATION } from "../../../actions/types";

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

const renderCommencementDateField = ({
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
      helperText="Commencement Date"
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
      helperText="Describe Operation"
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

function OperationsOperationsOperationsEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [project, setProject] = useState(params.project);
  const [task, setTask] = useState();
  const [user, setUser] = useState();
  const [status, setStatus] = useState(params.status);
  const [glLedger, setGlLedger] = useState(params.glHead);
  const [glSubLedger, setGlSubledger] = useState(params.subGlHead);
  const [ledger, setLedger] = useState(params.ledger);
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [projectList, setProjectList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [serviceOutletList, setServiceOutList] = useState([]);
  const [glHeadList, setGlHeadList] = useState([]);
  const [subGlHeadList, setSubGlHeadList] = useState([]);
  const [ledgerList, setLedgerList] = useState([]);
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
      const response = await api.get("/users");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setUserList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [project]);

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

  const handleProjectChange = (event) => {
    setProject(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleClosedByChange = (event) => {
    setUser(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
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

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
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

  const renderGlHeadField = ({
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
            style={{ width: 190, marginTop: 5, marginLeft: 0, height: 38 }}
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

  const renderGlSubHeadField = ({
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
            style={{ width: 200, marginTop: 5, marginLeft: 10, height: 38 }}
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

  const renderLedgerField = ({
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
            style={{ width: 190, marginTop: 5, marginLeft: 0, height: 38 }}
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
            label="Operation Status"
            style={{ width: 200, marginTop: 5, marginLeft: 10, height: 38 }}
            readOnly
          >
            <MenuItem value="pending">Pending</MenuItem>
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Operation Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Operation</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["project"] = project;
    formValues["status"] = status;
    formValues["ledger"] = ledger;
    formValues["subGlHead"] = glSubLedger;
    formValues["glHead"] = glLedger;

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/operationoperations/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_OPERATIONOPERATION,
            payload: response.data.data.data,
          });

          //reset the status of the project to closed
          const dataValue = {
            status: "in-progress",
          };
          const newResponse = await api.patch(
            `/projects/${project}`,
            dataValue
          );

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.refNumber}-${response.data.data.data.label} Operation is updated successfully!!!`
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

  const operationCommencementDate = params.commencementDate
    ? new Date(params.commencementDate).toISOString().slice(0, 10)
    : "";

  return (
    <form id="operationsOperationsOperationsEditForm">
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
            <Typography variant="subtitle1"> Update Operation</Typography>
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
              id="commencementDate"
              name="commencementDate"
              defaultValue={operationCommencementDate}
              type="date"
              component={renderCommencementDateField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="glHead"
              name="glHead"
              type="text"
              component={renderGlHeadField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="subGlHead"
              name="subGlHead"
              type="date"
              component={renderGlSubHeadField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="ledger"
              name="ledger"
              type="text"
              component={renderLedgerField}
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
  form: "operationsOperationsOperationsEditForm",
})(OperationsOperationsOperationsEditForm);
