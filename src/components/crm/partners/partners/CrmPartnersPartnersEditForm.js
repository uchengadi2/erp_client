import React, { useState, useEffect } from "react";
import { Field, reduxForm } from "redux-form";
import { useDispatch } from "react-redux";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";
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

import { EDIT_PARTNER } from "../../../../actions/types";

import api from "./../../../../apis/local";

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
    width: 150,
    marginLeft: 200,
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
      helperText="Enter the name of the Partner"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
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
      helperText="Describe the Partner"
      label={label}
      id={input.name}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={6}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderSupplierProductsField = ({
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
      helperText="Products"
      label={label}
      id={input.name}
      fullWidth
      type={type}
      style={{ marginTop: 20 }}
      multiline={true}
      minRows={6}
      {...custom}
      onChange={input.onChange}
    />
  );
};

const renderVendorAddressField = ({
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
      helperText="Enter the Partner Address Location"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      multiline={true}
      minRows={2}
      //required
      type={type}
      {...custom}
      onChange={input.onChange}

      //onChange={handleInput}
    />
  );
};

const renderVendorContactNameField = ({
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
      helperText="Enter the contact Person's Name"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderVendorPhoneNumberField = ({
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
      helperText="Enter the contact person's phone numbers"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderVendorEmailAddressField = ({
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
      helperText="Enter the contact Person's email address"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderBankAccountNumberField = ({
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
      helperText="Enter the bank account number"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderBankAccountNameField = ({
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
      helperText="Enter the bank account name"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderBankSwiftCodeNumberField = ({
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
      helperText="Enter the bank Swift code"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderBankIBANField = ({
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
      helperText="Enter the bank IBAN number"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

const renderBankNameField = ({
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
      helperText="Enter the bank name"
      variant="outlined"
      label={label}
      id={input.name}
      fullWidth
      //required
      type={type}
      {...custom}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}

      //onChange={handleInput}
    />
  );
};

function CrmPartnersPartnersEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [locationCity, setLocationCity] = useState(
    params.location.locationCity
  );
  const [locationState, setLocationState] = useState(
    params.location.locationState
  );
  const [locationCountry, setLocationCountry] = useState(
    params.location.locationCountry
  );

  const [bankCountry, setBankCountry] = useState(
    params.bankDetails.bankCountry
  );
  const [cityList, setCityList] = useState([]);
  const [stateList, setStateList] = useState([]);
  const [countryList, setCountryList] = useState([]);
  const [bankAccountType, setBankAccountType] = useState(
    params.bankDetails.bankAccountType
  );
  const [partnerType, setPartnerType] = useState(params.type);

  const [loading, setLoading] = useState(false);

  //spool the vendor document & data

  const dispatch = useDispatch();

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

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/states", {
        params: { country: locationCountry },
      });

      const workingData = response.data.data.data;
      workingData.map((state) => {
        allData.push({ id: state._id, name: state.name });
      });
      setStateList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [locationCountry]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/cities", {
        params: { state: locationState },
      });
      const workingData = response.data.data.data;
      workingData.map((city) => {
        allData.push({ id: city._id, name: city.name });
      });
      setCityList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [locationState]);

  const handlePartnerTypeChange = (event) => {
    setPartnerType(event.target.value);
  };

  const handleLocationCityChange = (event) => {
    setLocationCity(event.target.value);
  };

  const handleLocationStateChange = (event) => {
    setLocationState(event.target.value);
    setCityList([]);
  };

  const handleLocationCountryChange = (event) => {
    setLocationCountry(event.target.value);
    setStateList([]);
    setCityList([]);
  };

  const handleAccountTypeChange = (event) => {
    setBankAccountType(event.target.value);
  };

  const handleBankCountryChange = (event) => {
    setBankCountry(event.target.value);
  };

  //get the city list
  const renderCityList = () => {
    return cityList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the state list
  const renderStateList = () => {
    return stateList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
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

  const renderTypeRadioField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl component="fieldset">
          <FormLabel style={{ color: "blue" }} component="legend">
            Supplier Type
          </FormLabel>
          <RadioGroup
            aria-label="type"
            name="type"
            value={partnerType}
            onChange={handlePartnerTypeChange}
            style={{ height: 38 }}
          >
            <Grid item container direction="row">
              <Grid item>
                <FormControlLabel
                  value="corporate"
                  control={<Radio />}
                  label="Corporate"
                />
              </Grid>

              <Grid item></Grid>
              <FormControlLabel
                value="individual"
                control={<Radio />}
                label="individual"
              />
            </Grid>
          </RadioGroup>
        </FormControl>
      </Box>
    );
  };

  const renderVendorLocationCityField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="city"
            id="city"
            value={locationCity}
            onChange={handleLocationCityChange}
            label="City"
            style={{ height: 38 }}
          >
            {renderCityList()}
          </Select>
          <FormHelperText>Select City</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVendorLocationStateField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="locationState"
            id="locationState"
            value={locationState}
            onChange={handleLocationStateChange}
            label="State"
            style={{ height: 38 }}
          >
            {renderStateList()}
          </Select>
          <FormHelperText>Select State/Region/Province</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderVendorLocationCountryField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.formControl}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="locationCountry"
            id="locationCountry"
            value={locationCountry}
            onChange={handleLocationCountryChange}
            label="Country"
            style={{ height: 38 }}
          >
            {renderCountryList()}
          </Select>
          <FormHelperText>Select Country</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderBankAccountTypeField = ({
    input,
    label,
    meta: { touched, error, invalid },
    type,
    id,
    ...custom
  }) => {
    return (
      <Box>
        <FormControl variant="outlined" className={classes.accountType}>
          {/* <InputLabel id="vendor_city">City</InputLabel> */}
          <Select
            labelId="bankAccountType"
            id="bankAccountType"
            value={bankAccountType}
            onChange={handleAccountTypeChange}
            label="Account Type"
            style={{ height: 38 }}
          >
            <MenuItem value={"savings"}>Savings</MenuItem>
            <MenuItem value={"current"}>Current</MenuItem>
            <MenuItem value={"domicilary"}>Domicilary</MenuItem>
          </Select>
          <FormHelperText>Select Account Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderBankCountryField = ({
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
            labelId="backCountry"
            id="bankCountry"
            value={bankCountry}
            onChange={handleBankCountryChange}
            label="Bank Country"
            style={{ height: 38 }}
          >
            {renderCountryList()}
          </Select>
          <FormHelperText>Select Bank Country</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const onSubmit = (formValues) => {
    setLoading(true);
    const data = {
      partnerNumber: formValues["partnerNumber"]
        ? formValues["partnerNumber"]
        : params.supplierNumber,
      name: formValues["name"] ? formValues["name"] : params.name,
      description: formValues["description"]
        ? formValues["description"]
        : params.description,
      products: formValues["products"]
        ? formValues["products"]
        : params.products,
      type: partnerType,
      partnerCountry: locationCountry,
      location: {
        locationAddress: formValues["locationAddress"]
          ? formValues["locationAddress"]
          : params.location.locationAddress,
        locationCity: locationCity,
        locationState: locationState,
        locationCountry: locationCountry,
        locationCoordinates: [],
        officePhoneNumber: "",
      },
      contactPerson: {
        contactPersonName: formValues["contactPersonName"]
          ? formValues["contactPersonName"]
          : params.contactPerson.contactPersonName,
        contactPersonPhoneNumber: formValues["contactPersonPhoneNumber"]
          ? formValues["contactPersonPhoneNumber"]
          : params.contactPerson.contactPersonPhoneNumber,
        contactPersonEmailAddress: formValues["contactPersonEmailAddress"]
          ? formValues["contactPersonEmailAddress"]
          : params.contactPerson.contactPersonEmailAddress,
      },
      bankDetails: {
        bankName: formValues["bankName"]
          ? formValues["bankName"]
          : params.bankDetails.bankName,
        bankAccountNumber: formValues["bankAccountNumber"]
          ? formValues["bankAccountNumber"]
          : params.bankDetails.bankAccountNumber,
        bankAccountType: bankAccountType,
        bankAccountName: formValues["bankAccountName"]
          ? formValues["bankAccountName"]
          : params.bankDetails.bankAccountName,
        bankCountry: bankCountry,
        bankAccountSwiftCode: formValues["bankAccountSwiftCode"]
          ? formValues["bankAccountSwiftCode"]
          : params.bankDetails.bankAccountSwiftCode,
        bankAccountIBAN: formValues["bankAccountIBAN"]
          ? formValues["bankAccountIBAN"]
          : params.bankDetails.bankAccountIBAN,
      },
    };

    if (data) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(`/crmpartners/${params.id}`, data);

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_PARTNER,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Partner is updated successfully!!!`
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

  const buttonContent = () => {
    return <React.Fragment>Submit</React.Fragment>;
  };

  return (
    <div className={classes.root}>
      <form id="crmPartnersPartnersEditForm" className={classes.formStyles}>
        <Grid container style={{ marginTop: 20 }} justifyContent="center">
          <FormLabel
            style={{ color: "blue", fontSize: "1.5em" }}
            component="legend"
          >
            Partner Details
          </FormLabel>
        </Grid>
        <Box
          sx={{
            width: 550,
            height: 420,
          }}
          noValidate
          autoComplete="off"
        >
          <Field
            label=""
            id="name"
            name="name"
            defaultValue={params.name}
            type="text"
            component={renderNameField}
            autoComplete="off"
            style={{ marginTop: 20 }}
          />

          <Grid container direction="column" style={{ marginTop: 30 }}>
            <Grid item>
              <Field
                label=""
                id="vendorType"
                name="vendorType"
                component={renderTypeRadioField}
              />
            </Grid>

            <Grid container style={{ marginTop: 20 }}>
              <FormLabel style={{ color: "blue" }} component="legend">
                Enter Partner Details
              </FormLabel>
            </Grid>
            <Grid container direction="column" style={{ marginTop: 30 }}>
              <Grid item>
                <Field
                  label=""
                  id="locationAddress"
                  name="locationAddress"
                  defaultValue={params.location.locationAddress}
                  type="text"
                  component={renderVendorAddressField}
                />
              </Grid>
              <Grid item container direction="row" style={{ marginTop: 20 }}>
                <Grid item>
                  <Field
                    label=""
                    id="locationCountry"
                    name="locationCountry"
                    component={renderVendorLocationCountryField}
                  />
                </Grid>
                <Grid item style={{ marginLeft: 30 }}>
                  <Field
                    label=""
                    id="locationState"
                    name="locationState"
                    component={renderVendorLocationStateField}
                  />
                </Grid>

                <Grid item style={{ marginLeft: 30 }}>
                  <Field
                    label=""
                    id="locationCity"
                    name="locationCity"
                    component={renderVendorLocationCityField}
                  />
                </Grid>
              </Grid>
              <Grid item style={{ marginTop: 30 }}>
                <Field
                  label=""
                  id="contactPersonName"
                  name="contactPersonName"
                  defaultValue={params.contactPerson.contactPersonName}
                  component={renderVendorContactNameField}
                />
              </Grid>
              <Grid item container direction="row" style={{ marginTop: 30 }}>
                <Grid item>
                  <Field
                    label=""
                    id="contactPersonPhoneNumber"
                    name="contactPersonPhoneNumber"
                    defaultValue={params.contactPerson.contactPersonPhoneNumber}
                    component={renderVendorPhoneNumberField}
                  />
                </Grid>
                <Grid item style={{ marginLeft: 30, minWidth: "50%" }}>
                  <Field
                    label=""
                    id="contactPersonEmailAddress"
                    name="contactPersonEmailAddress"
                    defaultValue={
                      params.contactPerson.contactPersonEmailAddress
                    }
                    type="email"
                    component={renderVendorEmailAddressField}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid container style={{ marginTop: 20 }}>
              <FormLabel style={{ color: "blue" }} component="legend">
                Enter Partner Bank Details
              </FormLabel>
            </Grid>
            <Grid container direction="row" style={{ marginTop: 20 }}>
              <Grid item style={{ marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountType"
                  name="bankAccountType"
                  component={renderBankAccountTypeField}
                  className={classes.dropDown}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountNumber"
                  name="bankAccountNumber"
                  defaultValue={params.bankDetails.bankAccountNumber}
                  type="text"
                  component={renderBankAccountNumberField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountName"
                  name="bankAccountName"
                  defaultValue={params.bankDetails.bankAccountName}
                  type="text"
                  component={renderBankAccountNameField}
                />
              </Grid>
            </Grid>
            <Grid container direction="row">
              <Grid item style={{ marginTop: 20 }}>
                <Field
                  label=""
                  id="bankCountry"
                  name="bankCountry"
                  component={renderBankCountryField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountSwiftCode"
                  name="bankAccountSwiftCode"
                  defaultValue={params.bankDetails.bankAccountSwiftCode}
                  type="text"
                  component={renderBankSwiftCodeNumberField}
                />
              </Grid>
              <Grid item style={{ marginLeft: 20, marginTop: 20 }}>
                <Field
                  label=""
                  id="bankAccountIBAN"
                  name="bankAccountIBAN"
                  defaultValue={params.bankDetails.bankAccountIBAN}
                  type="text"
                  component={renderBankIBANField}
                />
              </Grid>
            </Grid>
            <Grid item style={{ marginTop: 20 }}>
              <Field
                label=""
                id="bankName"
                name="bankName"
                defaultValue={params.bankDetails.bankName}
                type="text"
                component={renderBankNameField}
              />
            </Grid>
          </Grid>
          <Field
            label=""
            id="products"
            name="products"
            defaultValue={params.products}
            type="text"
            component={renderSupplierProductsField}
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
            {/* Update Vendor */}
            {loading ? (
              <CircularProgress size={30} color="inherit" />
            ) : (
              buttonContent()
            )}
          </Button>
        </Box>
      </form>
    </div>
  );
}

export default reduxForm({
  form: "crmPartnersPartnersEditForm",
})(CrmPartnersPartnersEditForm);
