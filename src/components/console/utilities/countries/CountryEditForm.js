import React, { useEffect, useState } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField, Typography } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";

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
    width: 160,
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

const renderCountryNameField = ({
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
      helperText="Enter Country Name"
      variant="outlined"
      //label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // style={{ marginTop: 10 }}

      onChange={input.onChange}
    />
  );
};

const renderCountryCodeField = ({
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
      helperText="Enter Country Code"
      variant="outlined"
      //label={label}
      id={input.code}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // style={{ marginTop: 10 }}

      onChange={input.onChange}
    />
  );
};

const renderCountryDescriptionField = ({
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
      helperText="Provide a description of this country"
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
      // style={{ marginTop: 10 }}

      onChange={input.onChange}
    />
  );
};

const renderCountryFlagField = ({
  input,
  label,
  meta: { touched, error, invalid },
  type,
  id,
  ...custom
}) => {
  return (
    <TextField
      id={input.name}
      variant="outlined"
      type={type}
      defaultValue={input.value}
      fullWidth
      style={{ marginTop: 20 }}
      helperText="Upload Country Flag"
      onChange={input.onChange}
    />
  );
};

function CountryEditForm(props) {
  const classes = useStyles();

  const [continent, setContinent] = useState();
  const [region, setRegion] = useState();

  const handleContinentChange = (event) => {
    setContinent(event.target.value);
  };

  const handleRegionChange = (event) => {
    setRegion(event.target.value);
  };

  const params = props.params;

  useEffect(() => {
    setContinent(props.params.continent);
    setRegion(props.params.region);
  }, []);

  const renderContinentField = ({
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
            labelId="continent"
            id="continent"
            value={continent}
            onChange={handleContinentChange}
            label="Prefered Currency"
            style={{ width: 300 }}
            //{...input}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"africa"}>Africa</MenuItem>
            <MenuItem value={"europe"}>Europe</MenuItem>
            <MenuItem value={"asia"}>Asia</MenuItem>
            <MenuItem value={"north-america"}>North America</MenuItem>
            <MenuItem value={"south-america"}>South America</MenuItem>
          </Select>
          <FormHelperText>Select Continent</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderContinentRegionsField = ({
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
            labelId="region"
            id="region"
            value={region}
            onChange={handleRegionChange}
            label="Continent Region"
            style={{ width: 190 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={"west"}>West</MenuItem>
            <MenuItem value={"east"}>East</MenuItem>
            <MenuItem value={"north"}>North</MenuItem>
            <MenuItem value={"south"}>South</MenuItem>
            <MenuItem value={"central"}>Central</MenuItem>
            <MenuItem value={"south-east"}>South East</MenuItem>
            <MenuItem value={"south-west"}>South West</MenuItem>
            <MenuItem value={"south-central"}>South Central</MenuItem>
            <MenuItem value={"south-south"}>South South</MenuItem>
            <MenuItem value={"north-east"}>North East</MenuItem>
            <MenuItem value={"north-west"}>North West</MenuItem>
            <MenuItem value={"north-central"}>North Central</MenuItem>
            <MenuItem value={"north-north"}>North North</MenuItem>
          </Select>
          <FormHelperText>Select Continent Region</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const onSubmit = (formValues) => {
    const form = new FormData();
    if (formValues.name) {
      form.append("name", formValues.name);
    } else {
      form.append("name", params.name);
    }

    if (formValues.code) {
      form.append("code", formValues.code);
    }

    if (formValues.description) {
      form.append("description", formValues.description);
    }
    form.append("continent", continent);
    form.append("region", region);

    form.append("createdBy", props.userId);
    if (formValues.flag) {
      form.append("flag", formValues.flag[0]);
    }

    props.onSubmit(form);
  };

  return (
    <div className={classes.root}>
      <Grid item container justifyContent="center">
        <FormLabel
          style={{ color: "blue", fontSize: "1.5em" }}
          component="legend"
        >
          <Typography variant="subtitle1">Country Details</Typography>
        </FormLabel>
      </Grid>
      <Box
        component="form"
        id="countryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 500,
          // height: 420,
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
              type="text"
              defaultValue={params.name}
              component={renderCountryNameField}
            />
          </Grid>
          <Grid item style={{ width: "28%", marginLeft: 10 }}>
            <Field
              label=""
              id="code"
              name="code"
              type="text"
              defaultValue={params.code}
              component={renderCountryCodeField}
            />
          </Grid>
        </Grid>
        <Grid container direction="row" style={{ marginTop: 10 }}>
          <Grid item style={{ width: "60%" }}>
            <Field
              label=""
              id="continent"
              name="continent"
              type="text"
              component={renderContinentField}
            />
          </Grid>
          <Grid item style={{ width: "37%", marginLeft: 10 }}>
            <Field
              label=""
              id="region"
              name="region"
              type="text"
              //onChange={handleRegionChange}
              component={renderContinentRegionsField}
            />
          </Grid>
        </Grid>
        <Field
          label=""
          id="description"
          name="description"
          type="text"
          defaultValue={params.description}
          component={renderCountryDescriptionField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="flag"
          name="flag"
          type="file"
          defaultValue={params.flag}
          component={renderCountryFlagField}
          style={{ marginTop: 10 }}
        />

        <Button
          variant="contained"
          className={classes.submitButton}
          onClick={props.handleSubmit(onSubmit)}
        >
          Update Country
        </Button>
      </Box>
      {/* </form> */}
    </div>
  );
}

export default reduxForm({
  form: "countryForm",
})(CountryEditForm);
