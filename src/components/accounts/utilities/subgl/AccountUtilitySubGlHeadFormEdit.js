import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { useDispatch } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";
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
import { EDIT_GLSUBCODE } from "../../../../actions/types";

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
    width: 190,
    marginLeft: 110,
    marginTop: 20,
    marginBottom: 10,
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
      helperText="GL SubHead Code name"
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

const renderSubHeadCodeField = ({
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
      helperText="GL SubHead Code"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={input.value}
      //value={input.value}
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
      helperText="Description of this GL SubHead Code"
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

function AccountUtilitySubGlHeadFormEdit(props) {
  const classes = useStyles();
  const [glHeadCode, setGlHeadCode] = useState(props.params.glHead);
  const [currency, setCurrency] = useState(props.params.currency);
  const [serviceOutlet, setServiceOutlet] = useState(
    props.params.serviceOutlet
  );
  const [glHeadList, setGlHeadList] = useState([]);
  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [currencytList, setCurrencyList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const params = props.params;

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/glheadaccounts");
      const workingData = response.data.data.data;
      workingData.map((glHead) => {
        allData.push({
          id: glHead._id,
          name: `${glHead.glHead} - ${glHead.name}`,
        });
      });
      setGlHeadList(allData);
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
      workingData.map((sol) => {
        allData.push({
          id: sol._id,
          name: `${sol.solId} - ${sol.name}`,
        });
      });
      setServiceOutletList(allData);
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
      workingData.map((curr) => {
        allData.push({
          id: curr._id,
          name: `${curr.code} - ${curr.name}`,
        });
      });
      setCurrencyList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //get the glhead list
  const renderGlHeadListList = () => {
    return glHeadList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the service outlet list
  const renderServiceOutletListList = () => {
    return serviceOutletList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the currency list
  const renderCurrencyListList = () => {
    return currencytList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderGlHeadChange = (event) => {
    setGlHeadCode(event.target.value);
  };

  const renderServiceOuitletChange = (event) => {
    setServiceOutlet(event.target.value);
  };

  const renderCurrencyChange = (event) => {
    setCurrency(event.target.value);
  };

  const renderGlHeadCodeField = ({
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
            labelId="value"
            id="value"
            //defaultValue={schemeType}
            value={glHeadCode}
            // onChange={props.handleCountryChange}
            onChange={renderGlHeadChange}
            label="Scheme Type"
            style={{ width: 400, marginTop: 10, height: 50 }}
            //{...input}
          >
            {renderGlHeadListList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select GL Head Code
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
            labelId="value"
            id="value"
            //defaultValue={schemeType}
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={renderServiceOuitletChange}
            label="Service Outlet"
            style={{ width: 200, marginTop: 10, height: 50 }}
            //{...input}
          >
            {renderServiceOutletListList()}
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
            labelId="value"
            id="value"
            //defaultValue={schemeType}
            value={currency}
            // onChange={props.handleCountryChange}
            onChange={renderCurrencyChange}
            label="Currency"
            style={{ width: 190, marginLeft: 20, marginTop: 10, height: 50 }}
            // {...input}
          >
            {renderCurrencyListList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Currency
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> update SubGl Head</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    formValues["createdBy"] = props.userId;
    formValues["glHead"] = glHeadCode;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["currency"] = currency;

    const Str = require("@supercharge/strings");
    formValues["subGlHead"] = Str(formValues.subGlHead).limit(4).get();

    console.log("this is the form values:", formValues);
    if (formValues) {
      const updateSubGlHeadForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/subglheadaccounts/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          //const currency = response.data.data.data;

          dispatch({
            type: EDIT_GLSUBCODE,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.subGlHead} SubGl Head is updated successfully!!!`
          );
          props.handleEditDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      updateSubGlHeadForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
    //props.onSubmit(form);
  };

  return (
    <form id="accountUtilitySubGlHeadFormEdit">
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
          style={{ marginTop: 10, marginBottom: 5 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            <Typography variant="subtitle1">Update Gl SubHead</Typography>
          </FormLabel>
        </Grid>
        <Field
          label=""
          id="glHead"
          name="glHead"
          defaultValue={params.glHead}
          type="text"
          component={renderGlHeadCodeField}
        />
        <Grid container direction="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="serviceOutlet"
              name="serviceOutlet"
              defaultValue={params.serviceOutlet}
              type="text"
              component={renderServiceOutletField}
              style={{ marginTop: 20 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="currency"
              name="currency"
              defaultValue={params.currency}
              type="text"
              component={renderCurrencyField}
              style={{ marginTop: 20 }}
            />
          </Grid>
        </Grid>
        <Grid container direction="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="subGlHead"
              name="subGlHead"
              defaultValue={params.subGlHead}
              type="text"
              component={renderSubHeadCodeField}
              style={{ marginTop: 20 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="name"
              name="name"
              defaultValue={params.name}
              type="text"
              component={renderNameField}
              style={{ marginTop: 20 }}
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
  form: "accountUtilitySubGlHeadFormEdit",
})(AccountUtilitySubGlHeadFormEdit);
