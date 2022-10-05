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
import { EDIT_TRANSFORMATIONTYPE } from "../../../../actions/types";

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
      helperText="Enter Processing Type"
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
        inputProps: {
          style: {
            height: 1,
          },
        },
      }}
    />
  );
};

const renderRefNumberField = ({
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
        inputProps: {
          style: {
            height: 1,
          },
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
      helperText="Describe Processing Type"
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

function OperationsTransformationTypeEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  const buttonContent = () => {
    return <React.Fragment> Update Processing Type</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/operationprocessingtypes/${params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_TRANSFORMATIONTYPE,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Processing Type is updated successfully!!!`
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

  return (
    <form id="operationsTransformationTypeEditForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 400,
          height: 450,
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
            <Typography variant="subtitle1">
              {" "}
              Operation Processing Type
            </Typography>
          </FormLabel>
        </Grid>
        {/* <Field
          label=""
          id="assetSubclass"
          name="assetSubclass"
          type="text"
          component={renderAssetSubclassField}
        /> */}
        <Field
          label=""
          id="name"
          name="name"
          defaultValue={params.name}
          type="text"
          component={renderNameField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="refNumber"
          name="refNumber"
          defaultValue={params.refNumber}
          type="text"
          component={renderRefNumberField}
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
  form: "operationsTransformationTypeEditForm",
})(OperationsTransformationTypeEditForm);
