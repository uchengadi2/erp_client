import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import api from "./../../../../apis/local";
import { EDIT_CURRENCY } from "../../../../actions/types";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 10,
  },
  formStyles: {
    width: 600,
  },
  submitButton: {
    borderRadius: 10,
    height: 40,
    width: 170,
    marginLeft: 170,
    marginTop: 20,
    marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderCurrencyNameField = ({
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
      helperText="Enter Currency Name"
      variant="outlined"
      //label={label}
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

const renderCurrencyCodeField = ({
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
      helperText="Enter Currency Code"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderCurrencyDescriptionField = ({
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
      helperText="Provide a description of this currency"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      multiline={true}
      minRows={4}
      onChange={input.onChange}

      // style={{ marginTop: 10 }}

      //onChange={handleInput}
    />
  );
};

const renderCurrencySymbolField = ({
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
      id={input.name}
      variant="outlined"
      type={type}
      defaultValue={input.value}
      fullWidth
      style={{ marginTop: 20 }}
      helperText="Upload Currency Symbol"
      // {...input}
      onChange={input.onChange}
    />
  );
};

function AccountUtilityCurrencyTypeEditForm(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [country, setCountry] = useState(props.params.country);
  const [countryList, setCountryList] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = props.params;

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/countries");
      const workingData = response.data.data.data;
      workingData.map((country) => {
        allData.push({ id: country._id, name: country.name });
      });
      setCountryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  //get the country list
  const renderCountryList = () => {
    return countryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderCurrencyCountryField = ({
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
            labelId="country"
            id="country"
            value={country}
            onChange={handleCountryChange}
            label="Country"
            style={{ width: 500 }}
            // {...input}
          >
            {renderCountryList()}
          </Select>
          <FormHelperText>Select Country</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const buttonContent = () => {
    return <React.Fragment> Update Currency</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    // const form = new FormData();
    // form.append("name", formValues.name);
    // form.append("code", formValues.code);
    // form.append("description", formValues.description);
    // form.append("country", formValues.country);
    // if (formValues.symbol) {
    //   form.append("symbol", formValues.symbol[0]);
    // }

    if (formValues) {
      const editcurrencyForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/currencies/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          //const currency = response.data.data.data;

          dispatch({ type: EDIT_CURRENCY, payload: response.data.data.data });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Currency is editted successfully!!!`
          );
          props.handleEditDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleSuccessfulFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      editcurrencyForm().catch((err) => {
        props.handleSuccessfulFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleSuccessfulFailedSnackbar(
        "Something went wrong, please try again!!!"
      );
    }
  };

  return (
    <Box className={classes.root}>
      <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          <Typography variant="subtitle1">Update Currency Details</Typography>
        </FormLabel>
      </Grid>
      <Box
        component="form"
        id="accountUtilityCurrencyEditForm"
        // onSubmit={onSubmit}
        sx={{
          width: 500,
          height: 460,
        }}
        noValidate
        autoComplete="off"
        style={{ marginTop: 10 }}
      >
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "70%" }}>
            <Field
              label=""
              id="name"
              name="name"
              defaultValue={params.name}
              type="text"
              component={renderCurrencyNameField}
            />
          </Grid>
          <Grid item style={{ width: "28%", marginLeft: 10 }}>
            <Field
              label=""
              id="code"
              name="code"
              defaultValue={params.code}
              type="text"
              component={renderCurrencyCodeField}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item>
            <Field
              label=""
              id="country"
              name="country"
              defaultValue={params.country}
              type="text"
              component={renderCurrencyCountryField}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="description"
          name="description"
          defaultValue={params.description}
          type="text"
          component={renderCurrencyDescriptionField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="symbol"
          name="symbol"
          type="file"
          accept="image/*"
          component={renderCurrencySymbolField}
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
      {/* </form> */}
    </Box>
  );
}

export default reduxForm({
  form: "accountUtilityCurrencyEditForm",
})(AccountUtilityCurrencyTypeEditForm);
