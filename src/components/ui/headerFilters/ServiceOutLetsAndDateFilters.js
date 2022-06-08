import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { TextField } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Typography } from "@mui/material";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Select from "@material-ui/core/Select";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import data from "./../../../apis/local";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
  },
  formStyles: {
    width: 550,
  },
  formControl: {
    //margin: theme.spacing(1),
    minWidth: 150,
    marginTop: 20,
  },

  submitButton: {
    borderRadius: 10,
    height: 42,
    width: 50,
    marginLeft: 30,
    marginTop: 15,
    // marginBottom: 20,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
    accountType: {
      minWidth: 150,
      marginTop: 30,
    },
    formSectionHeader: {
      color: theme.palette.common.blue,
    },
  },
}));

function ServiceOutLetsAndDateFilters(props) {
  const classes = useStyles();
  const [value, setValue] = useState();

  //   useEffect(() => {
  //     setValue(props.selectedCountry);
  //     props.handleCountryChange(props.selectedCountry);
  //   }, [props]);

  const handleChange = (event) => {
    console.log("this is the valuettttt:", value);
    setValue(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const onStuffSelected = () => {
    console.log("some naughty stuff was actually selected");
  };

  console.log("the props are:", props);
  const renderItemList = () => {
    return props.selectList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderSelectField = ({
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
            value={props.selectedCountry}
            // onChange={props.handleCountryChange}
            onChange={handleChange}
            label="Country"
            style={{ width: 200, marginLeft: 10, marginTop: 18, height: 40 }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  //   const renderSelectSubGLField = ({
  //     input,
  //     label,
  //     meta: { touched, error, invalid },
  //     type,
  //     id,
  //     ...custom
  //   }) => {
  //     return (
  //       <Box>
  //         <FormControl variant="outlined">
  //           {/* <InputLabel id="vendor_city">City</InputLabel> */}

  //           <Select
  //             labelId="value"
  //             id="value"
  //             value={props.selectedCountry}
  //             // onChange={props.handleCountryChange}
  //             onChange={handleChange}
  //             label="Country"
  //             style={{ width: 200, marginLeft: 10, marginTop: 18, height: 40 }}
  //           >
  //             <MenuItem value="">
  //               <em>None</em>
  //             </MenuItem>
  //             <MenuItem value={10}>Ten</MenuItem>
  //             <MenuItem value={20}>Twenty</MenuItem>
  //             <MenuItem value={30}>Thirty</MenuItem>
  //             {/* {renderItemList()} */}
  //           </Select>
  //           <FormHelperText style={{ marginLeft: 20 }}>
  //             Select Sub-Ledger
  //           </FormHelperText>
  //         </FormControl>
  //       </Box>
  //     );
  //   };

  const renderStartingDateTextField = ({
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
        helperText="Starting Date"
        variant="outlined"
        label={label}
        id={input.name}
        fullWidth
        type={type}
        {...custom}
        {...input}
        inputProps={{ style: { height: 5 } }}
      />
    );
  };

  const renderEndDateTextField = ({
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
        helperText="Ending Date"
        variant="outlined"
        label={label}
        id={input.name}
        fullWidth
        type={type}
        {...custom}
        {...input}
        inputProps={{ style: { height: 5 } }}
      />
    );
  };

  const onSubmit = (formValues) => {
    props.onSubmit(formValues);
  };

  return (
    <div className={classes.root}>
      <form id="selectForm" className={classes.formStyles}>
        <Box
          sx={{
            width: 1000,
            height: 50,
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            direction="row"
            //style={{ marginTop: 20 }}
            //justifyContent="center"
            //style={{ width: 1000 }}
          >
            <Grid item>
              <Field
                label=""
                id="value"
                name="value"
                type="text"
                component={renderSelectField}
                autoComplete="off"
                //style={{ marginTop: 50 }}
              />
            </Grid>
            {/* <Grid item>
              <Field
                label=""
                id="subLedger"
                name="subLedger"
                type="text"
                component={renderSelectSubGLField}
                autoComplete="off"
                //style={{ marginTop: 50 }}
              />
            </Grid> */}
            <Grid item>
              <Field
                label=""
                id="startingDate"
                name="startingDate"
                type="date"
                component={renderStartingDateTextField}
                autoComplete="off"
                style={{ marginTop: 15, marginLeft: 10 }}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="endingDate"
                name="endingDate"
                type="date"
                component={renderEndDateTextField}
                autoComplete="off"
                style={{ marginTop: 15, marginLeft: 20 }}
              />
            </Grid>

            <Grid item>
              <Button
                variant="contained"
                className={classes.submitButton}
                onClick={props.handleSubmit(onSubmit)}
              >
                Go
              </Button>
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "selectForm",
})(ServiceOutLetsAndDateFilters);
