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
import { EDIT_GLCODE } from "../../../../actions/types";

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
    width: 150,
    marginLeft: 130,
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
      helperText="GL Head Code name"
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

const renderGlHeadField = ({
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
      helperText="GL Head Code"
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
  delete input.value;
  return (
    <TextField
      key={id}
      error={touched && invalid}
      //placeholder="enter your description "
      variant="outlined"
      helperText="GL Head Description"
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

function AccountUtilityGlCodeEditForm(props) {
  const [schemeCode, setSchemeCode] = useState(props.params.schemeCode);
  const [schemeType, setSchemeType] = useState();
  const [schemeCodeList, setSchemeCodeList] = useState([]);

  const [accountClass, setAccountClass] = useState(props.params.accountClass);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const params = props.params;

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/schemecodes");
      const workingData = response.data.data.data;
      workingData.map((schemeCode) => {
        allData.push({
          id: schemeCode._id,
          name: `${schemeCode.code} - ${schemeCode.name}`,
        });
      });
      setSchemeCodeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  const handleAccountClassChange = (event) => {
    setAccountClass(event.target.value);
  };
  const classes = useStyles();

  const handleSchemeCodeChange = (event) => {
    setSchemeCode(event.target.value);
  };

  //get the scheme codes list
  const renderSchemeCodeList = () => {
    return schemeCodeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderSchemeCodeField = ({
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
            value={schemeCode}
            // onChange={props.handleCountryChange}
            onChange={handleSchemeCodeChange}
            label="Scheme Code"
            style={{ width: 400, marginTop: 10, height: 50 }}
            //{...input}
          >
            {renderSchemeCodeList()}
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Scheme Code
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAccountClassField = ({
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
            labelId="accountClass"
            id="accountClass"
            //defaultValue={schemeType}
            value={accountClass}
            // onChange={props.handleCountryChange}
            onChange={handleAccountClassChange}
            label="Account Class"
            style={{ width: 400, marginTop: 10, height: 50 }}
            //{...input}
          >
            <MenuItem value="assets">Assets</MenuItem>
            <MenuItem value="liabilities">Liabilities</MenuItem>
            <MenuItem value="equity">Equity</MenuItem>
            <MenuItem value="revenue">Revenue</MenuItem>
            <MenuItem value="expense">Expense</MenuItem>

            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Account Class
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Gl Head</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    formValues["accountClass"] = accountClass;
    formValues["schemeCode"] = schemeCode;
    formValues["updatedBy"] = props.userId;

    console.log("this is the form values:", formValues);

    if (formValues) {
      const editGlHeadForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/glheadaccounts/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          //const currency = response.data.data.data;

          dispatch({ type: EDIT_GLCODE, payload: response.data.data.data });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.glHead} GlHead is updated successfully!!!`
          );
          props.handleEditDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      editGlHeadForm().catch((err) => {
        props.handleFailedSnackbar();
        //console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar(
        "No field was changed, so there was nothing to update"
      );
    }
    //props.onSubmit(form);
  };

  return (
    <form id="accountUtilityGlCodeEditForm">
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
          style={{ marginTop: 10, marginBottom: 5 }}
          justifyContent="center"
        >
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            <Typography variant="subtitle1">Edit Gl Code Head</Typography>
          </FormLabel>
        </Grid>
        <Grid container direction="row">
          {/* <Grid item style={{ width: "40%" }}>
            <Field
              label=""
              id="schemeType"
              name="schemeType"
              type="text"
              component={renderSchemeTypeField}
            />
          </Grid> */}
          <Grid item style={{ width: "100%", marginLeft: 0 }}>
            <Field
              label=""
              id="schemeCode"
              name="schemeCode"
              defaultValue={params.schemeCode}
              type="text"
              component={renderSchemeCodeField}
            />
          </Grid>
        </Grid>

        <Grid container direction="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="glHead"
              name="glHead"
              defaultValue={params.glHead}
              type="text"
              component={renderGlHeadField}
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
          id="accountClass"
          name="accountClass"
          defaultValue={params.accountClass}
          type="text"
          component={renderAccountClassField}
        />

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
  form: "accountUtilityGlCodeEditForm",
})(AccountUtilityGlCodeEditForm);
