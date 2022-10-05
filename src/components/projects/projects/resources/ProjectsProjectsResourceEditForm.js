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
import { EDIT_PROJECTPROJECTRESOURCE } from "../../../../actions/types";
import { editStock } from "../../../../actions";

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
      helperText="Give Resource a label"
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

const renderStockQuantityField = ({
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
      helperText="Enter Required Stock Quantity"
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
      helperText="Describe Resource"
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

function ProjectsProjectsResourceEditForm(props) {
  const { params } = props;
  const classes = useStyles();
  const [assetType, setAssetType] = useState(params.assetType);
  const [assetSet, setAssetSet] = useState(params.assetSet);
  const [assetSetBatch, setAssetSetBatch] = useState(params.assetSetBatch);
  const [stock, setStock] = useState(params.stock);
  const [storeType, setStoreType] = useState(params.storeType);
  const [store, setStore] = useState(params.store);
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [availableStockQuantity, setAvailableStockQuantity] = useState();
  const [currentStockQuantity, setCurrentStockQuantity] = useState(
    params.stockQuantity
  );
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [serviceOutletList, setServiceOutList] = useState([]);
  const [assetSetList, setAssetSetList] = useState([]);
  const [assetSetBatchList, setAssetSetBatchList] = useState([]);
  const [stockList, setStockList] = useState([]);
  const [storeTypeList, setStoreTypeList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/storetypes", {
        //params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setStoreTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch store list

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/stores", {
        params: { storeType: storeType, serviceOutlet: serviceOutlet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setStoreList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [storeType, serviceOutlet]);

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

  //fetch asset sets

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetsets", {
        params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.label}`,
        });
      });
      setAssetSetList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

  //fetsh the asset batches

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetsetbatches", {
        params: { assetSet: assetSet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.label}`,
        });
      });
      setAssetSetBatchList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetSet]);

  //fetch asset type

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assettypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setAssetTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //retrieve aset stock

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetstocks", {
        params: {
          assetType: assetType,
          store: store,
        },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setStockList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [store]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/assetstocks/${stock}`);
      const item = response.data.data.data;
      allData.push({
        id: item._id,
        quantity: `${item.quantity}`,
      });
      setAvailableStockQuantity(allData[0].quantity);
      console.log("all data:", allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [stock]);

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetSetChange = (event) => {
    setAssetSet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetSetBatchChange = (event) => {
    setAssetSetBatch(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStoreTypeChange = (event) => {
    setStoreType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };
  const handleStoreChange = (event) => {
    setStore(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStockChange = (event) => {
    setStock(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  //get the store tyoes
  const renderStoreTypeList = () => {
    return storeTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the location  list
  const renderStoreList = () => {
    return storeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the asset set  list
  const renderAssetSetList = () => {
    return assetSetList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the asset set batches  list
  const renderAssetSetBatchList = () => {
    return assetSetBatchList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the asset type  list
  const renderAssetTypeList = () => {
    return assetTypeList.map((item) => {
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

  //get the Service Outlet list
  const renderStockList = () => {
    return stockList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderAssetTypeField = ({
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
            labelId="assetType"
            id="assetType"
            //defaultValue={schemeType}
            value={assetType}
            // onChange={props.handleCountryChange}
            onChange={handleAssetTypeChange}
            label="Asset Type"
            style={{ width: 400, marginTop: 10, height: 38 }}
          >
            {renderAssetTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Asset Type
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

  const renderAssetSetField = ({
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
            labelId="assetSet"
            id="assetSet"
            //defaultValue={schemeType}
            value={assetSet}
            // onChange={props.handleCountryChange}
            onChange={handleAssetSetChange}
            label="Asset Set"
            style={{ width: 190, marginTop: 10, height: 38 }}
          >
            {renderAssetSetList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Asset Set
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetSetBatchField = ({
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
            labelId="assetSetBatch"
            id="assetSetBatch"
            //defaultValue={schemeType}
            value={assetSetBatch}
            // onChange={props.handleCountryChange}
            onChange={handleAssetSetBatchChange}
            label="Asset Batch"
            style={{ width: 200, marginTop: 10, marginLeft: 10, height: 38 }}
          >
            {renderAssetSetBatchList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Asset Batch
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStoreTypeField = ({
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
            labelId="storeType"
            id="storeType"
            //defaultValue={schemeType}
            value={storeType}
            // onChange={props.handleCountryChange}
            onChange={handleStoreTypeChange}
            label="Store Type"
            style={{ width: 190, marginTop: 10, height: 38 }}
          >
            {renderStoreTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Store Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStoreField = ({
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
            labelId="store"
            id="store"
            //defaultValue={schemeType}
            value={store}
            // onChange={props.handleCountryChange}
            onChange={handleStoreChange}
            label="Store"
            style={{ width: 200, marginTop: 10, marginLeft: 10, height: 38 }}
          >
            {renderStoreList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Store
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStockField = ({
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
            labelId="stock"
            id="stock"
            //defaultValue={schemeType}
            value={stock}
            // onChange={props.handleCountryChange}
            onChange={handleStockChange}
            label="Stock"
            style={{ width: 400, marginTop: 10, height: 38 }}
          >
            {renderStockList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Stock
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAvailableQuantityInStoreField = ({
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
        helperText="Available Stock Quantity"
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={availableStockQuantity}
        fullWidth
        //required
        type={type}
        {...custom}
        // {...input}
        disabled
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

  const buttonContent = () => {
    return <React.Fragment> Update Resource</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["assetType"] = assetType;
    formValues["assetSet"] = assetSet;
    formValues["assetSetBatch"] = assetSetBatch;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["storeType"] = storeType;
    formValues["store"] = store;
    formValues["stock"] = stock;

    const diff =
      parseFloat(currentStockQuantity) -
      parseFloat(formValues["stockQuantity"]);
    if (
      parseFloat(availableStockQuantity) - parseFloat(diff) <
      parseFloat(formValues["stockQuantity"])
    ) {
      formValues["stockQuantity"] =
        parseFloat(availableStockQuantity) - parseFloat(diff);
    }

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.patch(
          `/projectresources/${params.id}`,
          formValues
        );

        console.log("new stock quantity:", formValues["stockQuantity"]);
        console.log("new stock diff:", diff);

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_PROJECTPROJECTRESOURCE,
            payload: response.data.data.data,
          });

          //reduce that qauntity from the store

          if (formValues["stockQuantity"]) {
            const newDiff =
              parseFloat(currentStockQuantity) -
              parseFloat(formValues["stockQuantity"]);
            const newAvailableQuantity =
              parseFloat(availableStockQuantity) + parseFloat(newDiff);

            console.log("new available quantity:", newAvailableQuantity);
            console.log("new stock new diff:", newDiff);

            const dataValue = {
              quantity: newAvailableQuantity,
            };

            const newResponse = await api.patch(
              `/assetstocks/${stock}`,
              dataValue
            );
          }

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.refNumber}-${response.data.data.data.label} Resource is updated successfully!!!`
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
    <form id="projectsProjectsResourceEditForm">
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
            <Typography variant="subtitle1">
              {" "}
              Update Project Resource
            </Typography>
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
        <Grid container="row">
          <Grid item style={{ width: "52%" }}>
            <Field
              label=""
              id="label"
              name="label"
              defaultValue={params.label}
              type="text"
              component={renderLabelField}
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
          id="assetType"
          name="assetType"
          type="text"
          component={renderAssetTypeField}
          style={{ marginTop: 10 }}
        />

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="assetSet"
              name="assetSet"
              type="number"
              component={renderAssetSetField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="assetSetBatch"
              name="assetSetBatch"
              type="number"
              component={renderAssetSetBatchField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="storeType"
              name="storeType"
              type="text"
              component={renderStoreTypeField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="store"
              name="store"
              type="text"
              component={renderStoreField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="stock"
          name="stock"
          type="date"
          component={renderStockField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="quantity"
          name="quantity"
          defaultValue={availableStockQuantity}
          type="number"
          component={renderAvailableQuantityInStoreField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="stockQuantity"
          name="stockQuantity"
          defaultValue={params.stockQuantity}
          type="number"
          component={renderStockQuantityField}
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
  form: "projectsProjectsResourceEditForm",
})(ProjectsProjectsResourceEditForm);
