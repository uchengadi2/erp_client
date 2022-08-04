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
import { SettingsSystemDaydreamTwoTone } from "@material-ui/icons";

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
    height: 40,
    width: 100,
    marginLeft: 220,
    //marginTop: 20,
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

function ServiceOutletsAndTransactionTypesFilter(props) {
  const classes = useStyles();
  const [serviceOutlet, setServiceOutlet] = useState();
  const [transType, setTransType] = useState();

  //   useEffect(() => {
  //     setValue(props.selectedCountry);
  //     props.handleCountryChange(props.selectedCountry);
  //   }, [props]);

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleTransactionTypeChange = (event) => {
    setTransType(event.target.value);
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
            value={serviceOutlet}
            // onChange={props.handleCountryChange}
            onChange={handleServiceOutletChange}
            label="Service Outlet"
            style={{ width: 250, marginLeft: 10, height: 40 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Service Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderTransactionTypeField = ({
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
            labelId="transType"
            id="transType"
            value={transType}
            // onChange={props.handleCountryChange}
            onChange={handleTransactionTypeChange}
            label="Transaction Type"
            style={{ width: 200, marginLeft: 30, height: 40 }}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
            {/* {renderItemList()} */}
          </Select>
          <FormHelperText style={{ marginLeft: 50 }}>
            Select Transaction Type
          </FormHelperText>
        </FormControl>
      </Box>
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
            width: 500,
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
            <Grid item style={{ width: "50%" }}>
              <Field
                label=""
                id="serviceOutlet"
                name="serviceOutlet"
                type="text"
                component={renderServiceOutletField}
                autoComplete="off"
                //style={{ marginTop: 20 }}
              />
            </Grid>
            <Grid item style={{ width: "40%" }}>
              <Field
                label=""
                id="transType"
                name="transType"
                type="text"
                component={renderTransactionTypeField}
                autoComplete="off"
                // style={{ marginLeft: 20 }}
              />
            </Grid>
          </Grid>
        </Box>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "selectForm",
})(ServiceOutletsAndTransactionTypesFilter);
