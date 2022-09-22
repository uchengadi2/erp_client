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
import { EDIT_STOCK } from "../../../../actions/types";
import { SelectUnstyledContext } from "@mui/base";

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
    marginLeft: 550,
    marginTop: 10,
    marginBottom: 5,
    color: "white",
    backgroundColor: theme.palette.common.blue,
    "&:hover": {
      backgroundColor: theme.palette.common.blue,
    },
  },
}));

const renderAssetNameField = ({
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
      helperText="Asset name"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderDatePlacedInStoreField = ({
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
      helperText="Date Placed in Store"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderSkuField = ({
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
      helperText="Sku"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderAssetQuantityField = ({
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
      helperText="Asset Quantity"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};
const renderHeightDimensionField = ({
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
      helperText="Asset Height(cm)"
      variant="outlined"
      placeholder="in centimeter"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLengthDimensionField = ({
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
      helperText="Asset Length(cm)"
      variant="outlined"
      placeholder="in centimeter"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}

      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderWidthDimensionField = ({
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
      helperText="Asset Width(cm)"
      variant="outlined"
      placeholder="in centimeter"
      label={label}
      id={input.name}
      defaultValue={input.value}
      fullWidth
      //required
      type={type}
      {...custom}
      // {...input}
      onChange={input.onChange}
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderTotalWeightField = ({
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
      helperText="Asset Total Weight(kg)"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderStoreDescriptionField = ({
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
      helperText="Describe Asset"
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

const renderCharcoalTypeField = ({
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
      helperText="Charcoal Type"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCharcoalOriginField = ({
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
      helperText="Charcoal Origin"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCharcoalVariantField = ({
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
      helperText="Charcoal Variant"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderPlantTypeField = ({
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
      helperText="Plant Type"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderPlantOriginField = ({
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
      helperText="Plant Origin"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderPlantVariantField = ({
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
      helperText="Plant Variant"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderPlantBreedField = ({
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
      helperText="Plant Breed"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderPlantAverageAgeInWeeksField = ({
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
      helperText="Plant Average Age(in weeks)"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCommodityOriginField = ({
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
      helperText="Commodity Origin"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCommodityBreedField = ({
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
      helperText="Commodity Breed"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCommodityColorField = ({
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
      helperText="Commodity Color"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCommodityVariantField = ({
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
      helperText="Commodity Variant"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderCommodityAverageWeightInKgField = ({
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
      helperText="Commodity Average Weight(in kg)"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLivestockOriginField = ({
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
      helperText="Livestock Origin"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLivestockBreedField = ({
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
      helperText="Livestock Breed"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLivestockColorField = ({
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
      helperText="Livestock Color"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLivestockVariantField = ({
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
      helperText="Livestock Variant"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLivestockAverageAgeInMonthsField = ({
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
      helperText="Livestock Average Age(in months)"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderLivestockAverageWeightInweeksField = ({
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
      helperText="Livestock Average Weight(in weeks)"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

const renderTotalAcquisitionCostField = ({
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
      helperText="Total Acquisition Cost"
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
      inputProps={{
        style: {
          height: 1,
        },
      }}
    />
  );
};

function AssetsStockEditForm(props) {
  const classes = useStyles();

  const params = props.params;

  const [serviceOutletList, setServiceOutletList] = useState([]);
  const [storeTypeList, setStoreTypeList] = useState([]);
  const [storeList, setStoreList] = useState([]);
  const [assetSetList, setAssetSetList] = useState([]);
  const [assetSubclassList, setAssetSubclassList] = useState([]);
  const [assetSetBatchList, setAssetSetBatchList] = useState([]);
  const [assetTypeList, setAssetTypeList] = useState([]);
  const [glHeadList, setGlHeadList] = useState([]);
  const [subGlHeadList, setSubGlHeadList] = useState([]);
  const [ledgerList, setLedgerList] = useState([]);
  const [assetMeasurementUnitList, setAssetMeasurementUnitList] = useState([]);

  const [assetSet, setAssetSet] = useState(params.assetSet);
  const [assetBatch, setAssetBatch] = useState(params.assetBatch);
  const [store, setStore] = useState(params.store);
  const [assetSubclass, setAssetSubclass] = useState(params.assetSubclass);
  const [assetType, setAssetType] = useState(params.assetType);
  const [assetMeasurementUnit, setAssetMeasurementUnit] = useState(
    params.assetMeasurementUnit
  );
  const [serviceOutlet, setServiceOutlet] = useState(params.serviceOutlet);
  const [storeType, setStoreType] = useState(params.storeType);
  const [glLedger, setGlLedger] = useState(params.glHead);
  const [glSubLedger, setGlSubledger] = useState(params.subGlHead);
  const [ledger, setLedger] = useState(params.ledger);
  const [assetTypeCode, setAssetTypeCode] = useState();
  const [remainingQuantityInBatch, setRemainingQuantityInBatch] = useState();
  const [batchAssetMeasurementUnit, setBatchAssetMeasurementUnit] = useState();
  const [commodityType, setCommodityType] = useState();
  const [livestockType, setLivestockType] = useState();
  const [livestockGender, setLivestockGender] = useState();
  const [currencyList, setCurrencyList] = useState([]);
  const [currency, setCurrency] = useState(params.currency);
  const [livestockHealthStatusOnArrival, setLivestockHealthStatusOnArrival] =
    useState();
  const [
    livestockPhysicalHealthOnArrival,
    setLivestockPhysicalHealthOnArrival,
  ] = useState();
  const [
    livestockPregnancyStatusOnArrival,
    setLivestockPregnancyStatusOnArrival,
  ] = useState();

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  //retrieve service outlets

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
      setServiceOutletList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //retrieve storage types

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
      const response = await api.get("/assettypes", {
        params: { assetSubclass: assetSubclass },
      });
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
  }, [assetSubclass]);

  //fetch asset subclass

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetsubclasses", {
        // params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setAssetSubclassList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch asset measurement units

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetmeasurementunits", {
        params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setAssetMeasurementUnitList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

  //fetch the glheads

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

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      //   const response = await api.get("/assetsets", {
      //     params: { assetType: assetType },
      //   });

      const response = await api.get(`/assettypes/${assetType}`);

      const item = response.data.data.data;
      allData.push({
        id: item._id,
        label: `${item.label}`,
        code: item.code,
      });

      setAssetTypeCode(allData[0].code);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetType]);

  //details of a batch
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      //   const response = await api.get("/assetsets", {
      //     params: { assetType: assetType },
      //   });

      const response = await api.get(`/assetsetbatches/${assetBatch}`);

      const item = response.data.data.data;
      allData.push({
        id: item._id,
        remainingQuantityInBatch: `${item.remainingQuantityInBatch}`,
        assetMeasurementUnit: item.assetMeasurementUnit,
      });

      setRemainingQuantityInBatch(allData[0].remainingQuantityInBatch);
      setBatchAssetMeasurementUnit(allData[0].assetMeasurementUnit);
    };

    //call the function

    fetchData().catch(console.error);
  }, [assetBatch]);

  //fetching currencies

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/currencies", {
        // params: { assetType: assetType },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setCurrencyList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  let subDoc = {};

  if (assetTypeCode === "livestock") {
    subDoc = params.livestock;
  }
  if (assetTypeCode === "plant") {
    subDoc = params.plant;
  }
  if (assetTypeCode === "commodity") {
    subDoc = params.commodity;
  }
  if (assetTypeCode === "charcoal") {
    subDoc = params.charcoal;
  }

  console.log("this is sub doc:", subDoc);

  const handleStoreTypeChange = (event) => {
    setStoreType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetTypeChange = (event) => {
    setAssetType(event.target.value);
  };

  const handleStoreChange = (event) => {
    setStore(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetSetChange = (event) => {
    setAssetSet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetSetBatchChange = (event) => {
    setAssetBatch(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetMeasurementUnitChange = (event) => {
    setAssetMeasurementUnit(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleAssetSubclassChange = (event) => {
    setAssetSubclass(event.target.value);
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

  const handleCommodityTypeChange = (event) => {
    setCommodityType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLivestockTypeChange = (event) => {
    setLivestockType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLivestockPhysicalHealthOnArrivalChange = (event) => {
    setLivestockPhysicalHealthOnArrival(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLivestockHealthStatusOnArrivalChange = (event) => {
    setLivestockHealthStatusOnArrival(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLivestockPregnancyStatusOnArrivalChange = (event) => {
    setLivestockPregnancyStatusOnArrival(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleLivestockGenderChange = (event) => {
    setLivestockGender(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    //     props.handleCountryChange(event.target.value);
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

  //get the asset subclass  list
  const renderAssetSubclassList = () => {
    return assetSubclassList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the asset measurement unit  list
  const renderAssetMeasurementUnitList = () => {
    return assetMeasurementUnitList.map((item) => {
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

  //get the currency  list
  const renderCurrencyList = () => {
    return currencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
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
            style={{ width: 170, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderStoreTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Store Type</FormHelperText>
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
            style={{ width: 170, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderStoreList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Select Store
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetTyperField = ({
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
            style={{ width: 180, marginTop: 0, marginLeft: 10, height: 38 }}
            //{...input}
            disabled
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Asset Type</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetSubclassField = ({
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
            labelId="assetSubclass"
            id="assetSubclass"
            //defaultValue={schemeType}
            value={assetSubclass}
            // onChange={props.handleCountryChange}
            onChange={handleAssetSubclassChange}
            label="Asset Subclass"
            style={{ width: 160, marginTop: 0, marginLeft: 10, height: 38 }}
            //{...input}
            disabled
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetSubclassList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Asset Subclass
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
            label="Service Outlet"
            style={{ width: 160, marginTop: 0, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderServiceOutletList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Service Outlet
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
            style={{ width: 260, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetSetList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Asset Set</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetMeasurementUnitField = ({
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
            labelId="assetMeasurementUnit"
            id="assetMeasurementUnit"
            //defaultValue={schemeType}
            value={batchAssetMeasurementUnit}
            // onChange={props.handleCountryChange}
            onChange={handleAssetMeasurementUnitChange}
            label="Asset Measurement Unit"
            style={{ width: 180, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
            disabled
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetMeasurementUnitList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Asset Measurement Unit
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
            labelId="assetBatch"
            id="assetBatch"
            //defaultValue={schemeType}
            value={assetBatch}
            // onChange={props.handleCountryChange}
            onChange={handleAssetSetBatchChange}
            label="Asset Batch"
            style={{ width: 250, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderAssetSetBatchList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Asset Batch
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAssetGlLedgerField = ({
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
            style={{ width: 120, marginTop: 5, marginLeft: 10, height: 38 }}
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

  const renderAssetGlSubledgerField = ({
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
            style={{ width: 140, marginTop: 5, marginLeft: 10, height: 38 }}
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
            style={{ width: 140, marginTop: 5, marginLeft: 10, height: 38 }}
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

  const renderCommodityTypeField = ({
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
            labelId="commodityType"
            id="commodityType"
            //defaultValue={schemeType}
            value={commodityType ? commodityType : subDoc.type}
            // onChange={props.handleCountryChange}
            onChange={handleCommodityTypeChange}
            label="Commodity Type"
            style={{ width: 180, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value="rice">Rice</MenuItem>
            <MenuItem value="beans">Beans</MenuItem>
            <MenuItem value="soyabeans">Soya Beans</MenuItem>
            <MenuItem value="cottons">Cottons</MenuItem>
            <MenuItem value="wheat">Wheat</MenuItem>
            <MenuItem value="maize">Maize</MenuItem>
            <MenuItem value="cocoa">Cocoa</MenuItem>
            <MenuItem value="cashewnut">Cashew Nut</MenuItem>
            <MenuItem value="coffee">Coffee</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Commodity Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };
  console.log("livestock type is:", livestockType);
  const renderLivestockTypeField = ({
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
            labelId="livestockType"
            id="livestockType"
            //defaultValue={schemeType}
            value={livestockType ? livestockType : subDoc.type}
            // onChange={props.handleCountryChange}
            onChange={handleLivestockTypeChange}
            label="Livestock Type"
            style={{ width: 180, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value="cow">Cow</MenuItem>
            <MenuItem value="calf">Calf</MenuItem>
            <MenuItem value="sheep">Sheep</MenuItem>
            <MenuItem value="ewe">Ewe</MenuItem>
            <MenuItem value="goat">Goat</MenuItem>
            <MenuItem value="kid">Kid</MenuItem>
            <MenuItem value="fish">Fish</MenuItem>
            <MenuItem value="fries">Fries</MenuItem>
            <MenuItem value="rabbit">Rabbit</MenuItem>
            <MenuItem value="pig">Pig</MenuItem>
            <MenuItem value="piglet">Piglet</MenuItem>
            <MenuItem value="chicks">Chicks</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Livestock Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderLivestockPhysicalHealthOnArrivalField = ({
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
            labelId="physicalHealthOnArrival"
            id="physicalHealthOnArrival"
            //defaultValue={schemeType}
            value={
              livestockPhysicalHealthOnArrival
                ? livestockPhysicalHealthOnArrival
                : subDoc.physicalHealthOnArrival
            }
            // onChange={props.handleCountryChange}
            onChange={handleLivestockPhysicalHealthOnArrivalChange}
            label="Physical Health Condition"
            style={{ width: 190, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value="healthy">Healthy</MenuItem>
            <MenuItem value="limping">Limping</MenuItem>
            <MenuItem value="withBodyInjuries">With Body Injuries</MenuItem>
            <MenuItem value="withHeadInjuries">With Head Injuries</MenuItem>
            <MenuItem value="withBothBodyAndHeadInjuries">
              With Both Body & Head Injuries
            </MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Physical Health Condition
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderLivetstockHealthStatusOnArrivalField = ({
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
            labelId="healthStatusOnArrival"
            id="healthStatusOnArrival"
            //defaultValue={schemeType}
            value={
              livestockHealthStatusOnArrival
                ? livestockHealthStatusOnArrival
                : subDoc.healthStatusOnArrival
            }
            // onChange={props.handleCountryChange}
            onChange={handleLivestockHealthStatusOnArrivalChange}
            label="Health Status Condition"
            style={{ width: 190, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value="healthy">Healthy</MenuItem>
            <MenuItem value="sickly">Sickly</MenuItem>
            <MenuItem value="unVerified">Not Verified</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Health Status Condition
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderPregnancyStatusOnArrivalField = ({
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
            labelId="pregnancyStatusOnArrival"
            id="pregnancyStatusOnArrival"
            //defaultValue={schemeType}
            value={
              livestockPregnancyStatusOnArrival
                ? livestockPregnancyStatusOnArrival
                : subDoc.pregnancyStatusOnArrival
            }
            // onChange={props.handleCountryChange}
            onChange={handleLivestockPregnancyStatusOnArrivalChange}
            label="Health Status Condition"
            style={{ width: 180, marginTop: 10, marginLeft: 10, height: 38 }}
            //{...input}
          >
            <MenuItem value="pregnant">Pregnant</MenuItem>
            <MenuItem value="notPregnant">Not Pregnant</MenuItem>
            <MenuItem value="unVerified">Not Verified</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Pregnancy Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderLiverstockGenderField = ({
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
            labelId="gender"
            id="gender"
            //defaultValue={schemeType}
            value={livestockGender ? livestockGender : subDoc.gender}
            // onChange={props.handleCountryChange}
            onChange={handleLivestockGenderChange}
            label="Livestock Gender"
            style={{ width: 180, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
          >
            <MenuItem value="male">Male</MenuItem>
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="unVerified">Not Verified</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Livestock Gender
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderRemainingAssetsInBatchField = ({
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
        helperText="Remaining Asset quantity in Batch"
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={input.value}
        fullWidth
        //required
        type={type}
        {...custom}
        disabled
        // {...input}
        onChange={input.onChange}
        inputProps={{
          style: {
            height: 1,
          },
        }}
      />
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
            labelId="currency"
            id="currency"
            //defaultValue={schemeType}
            value={currency}
            // onChange={props.handleCountryChange}
            onChange={handleCurrencyChange}
            label="Currency"
            style={{ width: 200, marginTop: 5, marginLeft: 10, height: 38 }}
            //{...input}
          >
            {/* <MenuItem value="tangible">Tangible Asset</MenuItem>
            <MenuItem value="inTangible">Intangible Asset</MenuItem> */}

            {renderCurrencyList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Acquisition Currency
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const datePlacedInStore = new Date(params.datePlacedInStore)
    .toISOString()
    .slice(0, 10);

  const renderUniqueAssetForm = () => {
    if (!assetTypeCode) {
      return <></>;
    }

    if (assetTypeCode === "livestock") {
      return (
        <Grid item>
          {/* <Typography>This is the first contaier</Typography> */}
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="type"
                name="type"
                defaultValue={subDoc.type}
                type="text"
                component={renderLivestockTypeField}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="breed"
                name="breed"
                defaultValue={subDoc.breed}
                type="text"
                // component={renderAssetSubclassField}
                component={renderLivestockBreedField}
                style={{ marginTop: 10, marginLeft: 10, width: 195 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="origin"
                name="origin"
                defaultValue={subDoc.origin}
                type="text"
                // component={renderAssetTypeField}
                component={renderLivestockOriginField}
                style={{ marginTop: 10, marginLeft: 10, width: 180 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="gender"
                name="gender"
                defaultValue={subDoc.gender}
                type="text"
                component={renderLiverstockGenderField}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="variant"
                name="variant"
                defaultValue={subDoc.variant}
                type="text"
                // component={renderAssetSubclassField}
                component={renderLivestockVariantField}
                style={{ marginTop: 10, marginLeft: 10, width: 195 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="color"
                name="color"
                defaultValue={subDoc.color}
                type="text"
                // component={renderAssetTypeField}
                component={renderLivestockColorField}
                style={{ marginTop: 10, marginLeft: 10, width: 180 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="averageAgeInMonths"
                name="averageAgeInMonths"
                defaultValue={subDoc.averageAgeInMonths}
                type="text"
                component={renderLivestockAverageAgeInMonthsField}
                style={{ marginTop: 10, marginLeft: 0, width: 285 }}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="averageWeightInweeks"
                name="averageWeightInweeks"
                defaultValue={subDoc.averageWeightInweeks}
                type="text"
                // component={renderAssetSubclassField}
                component={renderLivestockAverageWeightInweeksField}
                style={{ marginTop: 10, marginLeft: 10, width: 280 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="healthStatusOnArrival"
                name="healthStatusOnArrival"
                defaultValue={subDoc.healthStatusOnArrival}
                type="text"
                // component={renderAssetTypeField}
                component={renderLivetstockHealthStatusOnArrivalField}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="physicalHealthOnArrival"
                name="physicalHealthOnArrival"
                defaultValue={subDoc.physicalHealthOnArrival}
                type="text"
                // component={renderAssetTypeField}
                component={renderLivestockPhysicalHealthOnArrivalField}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="pregnancyStatusOnArrival"
                name="pregnancyStatusOnArrival"
                type="text"
                // component={renderAssetTypeField}
                component={renderPregnancyStatusOnArrivalField}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    if (assetTypeCode === "commodity") {
      return (
        <Grid item>
          {/* <Typography>This is the first contaier</Typography> */}
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="type"
                name="type"
                defaultValue={subDoc.type}
                type="text"
                component={renderCommodityTypeField}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="breed"
                name="breed"
                defaultValue={subDoc.breed}
                type="text"
                // component={renderAssetSubclassField}
                component={renderCommodityBreedField}
                style={{ marginTop: 10, width: 195, marginLeft: 10 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="origin"
                name="origin"
                defaultValue={subDoc.origin}
                type="text"
                // component={renderAssetTypeField}
                component={renderCommodityOriginField}
                style={{ marginTop: 10, marginLeft: 10, width: 180 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="averageWeightInKg"
                name="averageWeightInKg"
                defaultValue={subDoc.averageWeightInKg}
                type="number"
                component={renderCommodityAverageWeightInKgField}
                style={{ marginTop: 10, width: 200, marginLeft: 0 }}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="color"
                name="color"
                defaultValue={subDoc.color}
                type="text"
                // component={renderAssetSubclassField}
                component={renderCommodityColorField}
                style={{ marginTop: 10, width: 185, marginLeft: 10 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="variant"
                name="variant"
                defaultValue={subDoc.variant}
                type="text"
                // component={renderAssetSubclassField}
                component={renderCommodityVariantField}
                style={{ marginTop: 10, width: 170, marginLeft: 10 }}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    if (assetTypeCode === "charcoal") {
      return (
        <Grid item>
          {/* <Typography>This is the first contaier</Typography> */}
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="type"
                name="type"
                defaultValue={subDoc.type}
                type="text"
                component={renderCharcoalTypeField}
                style={{ marginTop: 10, width: 180 }}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="origin"
                name="origin"
                defaultValue={subDoc.origin}
                type="text"
                // component={renderAssetSubclassField}
                component={renderCharcoalOriginField}
                style={{ marginTop: 10, width: 195, marginLeft: 10 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="variant"
                name="variant"
                defaultValue={subDoc.variant}
                type="text"
                // component={renderAssetTypeField}
                component={renderCharcoalVariantField}
                style={{ marginTop: 10, marginLeft: 10, width: 180 }}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    if (assetTypeCode === "plant") {
      return (
        <Grid item>
          {/* <Typography>This is the first contaier</Typography> */}
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="type"
                name="type"
                type="text"
                defaultValue={subDoc.type}
                component={renderPlantTypeField}
                style={{ marginTop: 10, width: 180 }}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="origin"
                name="origin"
                defaultValue={subDoc.origin}
                type="text"
                // component={renderAssetSubclassField}
                component={renderPlantOriginField}
                style={{ marginTop: 10, width: 195, marginLeft: 10 }}
              />
            </Grid>
            <Grid item>
              <Field
                label=""
                id="averageAgeInWeeks"
                name="averageAgeInWeeks"
                defaultValue={subDoc.averageAgeInWeeks}
                type="text"
                // component={renderAssetTypeField}
                component={renderPlantAverageAgeInWeeksField}
                style={{ marginTop: 10, marginLeft: 10, width: 180 }}
              />
            </Grid>
          </Grid>
          <Grid container direction="row">
            <Grid item>
              <Field
                label=""
                id="breed"
                name="breed"
                defaultValue={subDoc.breed}
                type="text"
                component={renderPlantBreedField}
                style={{ marginTop: 10, marginLeft: 0, width: 250 }}
              />
            </Grid>

            <Grid item>
              <Field
                label=""
                id="variant"
                name="variant"
                defaultValue={subDoc.variant}
                type="text"
                // component={renderAssetSubclassField}
                component={renderPlantVariantField}
                style={{ marginTop: 10, marginLeft: 10, width: 250 }}
              />
            </Grid>
          </Grid>
        </Grid>
      );
    }

    if (assetTypeCode === "stock") {
      return <></>;
    }
    if (assetTypeCode === "asset") {
      return <></>;
    }

    if (assetTypeCode === "otherNonStock") {
      return <></>;
    }
  };

  const buttonContent = () => {
    return <React.Fragment> Update Stock</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;

    formValues["serviceOutlet"] = serviceOutlet;
    formValues["storeType"] = storeType;
    formValues["assetSet"] = assetSet;
    formValues["assetBatch"] = assetBatch;
    formValues["glHead"] = glLedger;
    formValues["subGlHead"] = glSubLedger;
    formValues["ledger"] = ledger;

    formValues["assetSubclass"] = assetSubclass;
    formValues["assetType"] = assetType;
    formValues["assetMeasurementUnit"] = batchAssetMeasurementUnit;
    formValues["store"] = store;
    formValues["currency"] = currency;

    if (assetTypeCode === "livestock") {
      const livestock = {
        type: livestockType ? livestockType : subDoc.type,
        breed: formValues["breed"] ? formValues["breed"] : subDoc.breed,
        averageAgeInMonths: formValues["averageAgeInMonths"]
          ? formValues["averageAgeInMonths"]
          : subDoc.averageAgeInMonths,
        color: formValues["color"] ? formValues["color"] : subDoc.color,
        averageWeightInweeks: formValues["averageWeightInweeks"]
          ? formValues["averageWeightInweeks"]
          : subDoc.averageWeightInweeks,
        healthStatusOnArrival: livestockHealthStatusOnArrival
          ? livestockHealthStatusOnArrival
          : subDoc.healthStatusOnArrival,
        physicalHealthOnArrival: livestockPhysicalHealthOnArrival
          ? livestockPhysicalHealthOnArrival
          : subDoc.physicalHealthOnArrival,
        gender: livestockGender ? livestockGender : subDoc.gender,
        pregnancyStatusOnArrival: livestockPregnancyStatusOnArrival
          ? livestockPregnancyStatusOnArrival
          : subDoc.pregnancyStatusOnArrival,
        origin: formValues["origin"] ? formValues["origin"] : subDoc.origin,
        variant: formValues["variant"] ? formValues["variant"] : subDoc.variant,
      };

      formValues["livestock"] = livestock;
    }

    if (assetTypeCode === "commodity") {
      const commodity = {
        type: commodityType,
        breed: formValues["breed"] ? formValues["breed"] : subDoc.breed,
        origin: formValues["origin"] ? formValues["origin"] : subDoc.origin,
        variant: formValues["variant"] ? formValues["variant"] : subDoc.variant,
        color: formValues["color"] ? formValues["color"] : subDoc.color,
        averageWeightInKg: formValues["averageWeightInKg"]
          ? formValues["averageWeightInKg"]
          : subDoc.averageWeightInKg,
      };
      formValues["commodity"] = commodity;
    }

    if (assetTypeCode === "charcoal") {
      const charcoal = {
        type: formValues["type"] ? formValues["type"] : subDoc.type,
        origin: formValues["origin"] ? formValues["origin"] : subDoc.origin,
        variant: formValues["variant"] ? formValues["variant"] : subDoc.variant,
      };
      formValues["charcoal"] = charcoal;
    }

    if (assetTypeCode === "plant") {
      const plant = {
        origin: formValues["origin"] ? formValues["origin"] : subDoc.origin,
        type: formValues["type"] ? formValues["type"] : subDoc.type,
        breed: formValues["breed"] ? formValues["breed"] : subDoc.breed,
        averageAgeInWeeks: formValues["averageAgeInWeeks"]
          ? formValues["averageAgeInWeeks"]
          : subDoc.averageAgeInWeeks,
        variant: formValues["variant"] ? formValues["variant"] : subDoc.variant,
      };
      formValues["plant"] = plant;
    }

    console.log("this os the formvalues:", formValues);

    if (formValues) {
      const editForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;

        const response = await api.patch(
          `/assetstocks/${props.params.id}`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: EDIT_STOCK,
            payload: response.data.data.data,
          });

          props.handleSuccessfulEditSnackbar(
            `${response.data.data.data.name} Stock & Asset is updated successfully!!!`
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
    <form id="assetsStockEditForm">
      <Box
        // component="form"
        // id="categoryForm"
        // onSubmit={onSubmit}
        sx={{
          width: 1150,
          height: 550,
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
            style={{ color: "blue", fontSize: "1.5em", marginTop: 20 }}
            component="legend"
          >
            <Typography variant="subtitle3"> Update Stock & Asset </Typography>
          </FormLabel>
        </Grid>
        <Grid container direction="row" style={{ width: "100%" }}>
          <Grid item container direction="column" style={{ width: 600 }}>
            <Grid item>
              {/* <Typography>This is the first contaier</Typography> */}
              <Grid container direction="row">
                <Grid item>
                  <Field
                    label=""
                    id="serviceOutlet"
                    name="serviceOutlet"
                    defaultValue={params.serviceOutlet}
                    type="text"
                    component={renderServiceOutletField}
                  />
                </Grid>

                <Grid item>
                  <Field
                    label=""
                    id="assetSubclass"
                    name="assetSubclass"
                    defaultValue={params.assetSubclass}
                    type="text"
                    // component={renderAssetSubclassField}
                    component={renderAssetSubclassField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item>
                  <Field
                    label=""
                    id="assetType"
                    name="assetType"
                    defaultValue={params.assetType}
                    type="text"
                    // component={renderAssetTypeField}
                    component={renderAssetTyperField}
                    style={{ marginTop: 10, marginLeft: 10 }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography>This is the first contaier</Typography> */}
              <Grid container direction="row">
                <Grid item>
                  <Field
                    label=""
                    id="assetSet"
                    name="assetSet"
                    type="text"
                    component={renderAssetSetField}
                  />
                </Grid>

                <Grid item>
                  <Field
                    label=""
                    id="assetBatch"
                    name="assetBatch"
                    type="text"
                    // component={renderAssetSubclassField}
                    component={renderAssetSetBatchField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                {/* <Grid item>
                  <Field
                    label=""
                    id="name"
                    name="name"
                    type="text"
                    // component={renderAssetTypeField}
                    component={renderAssetNameField}
                    style={{ marginTop: 10, marginLeft: 10, width: 180 }}
                  />
                </Grid> */}
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography>This is the first contaier</Typography> */}
              <Grid container direction="row">
                <Grid item>
                  <Field
                    label=""
                    id="remainingQuantityInBatch"
                    name="remainingQuantityInBatch"
                    defaultValue={remainingQuantityInBatch}
                    type="text"
                    component={renderRemainingAssetsInBatchField}
                    style={{ marginTop: 10, width: 250 }}
                  />
                </Grid>

                <Grid item>
                  <Field
                    label=""
                    id="name"
                    name="name"
                    type="text"
                    defaultValue={params.name}
                    component={renderAssetNameField}
                    style={{ marginTop: 10, width: 260, marginLeft: 10 }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography>This is the first contaier</Typography> */}
              <Grid container direction="row">
                <Grid item>
                  <Field
                    label=""
                    id="sku"
                    name="sku"
                    defaultValue={params.sku}
                    type="text"
                    component={renderSkuField}
                    style={{ marginTop: 10, width: 160 }}
                  />
                </Grid>

                <Grid item>
                  <Field
                    label=""
                    id="quantity"
                    name="quantity"
                    defaultValue={params.quantity}
                    type="number"
                    disabled
                    // component={renderAssetSubclassField}
                    component={renderAssetQuantityField}
                    style={{ marginTop: 10, marginLeft: 10, width: 160 }}
                  />
                </Grid>
                <Grid item>
                  <Field
                    label=""
                    id="assetMeasurementUnit"
                    name="assetMeasurementUnit"
                    defaultValue={params.assetMeasurementUnit}
                    type="text"
                    // component={renderAssetTypeField}
                    component={renderAssetMeasurementUnitField}
                    //style={{ marginTop: 10, marginLeft: 10 }}
                  />
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              {/* <Typography>This is the first contaier</Typography> */}
              <Grid container direction="row">
                <Grid item>
                  <Field
                    label=""
                    id="storeType"
                    name="storeType"
                    defaultValue={params.storeType}
                    type="text"
                    component={renderStoreTypeField}
                  />
                </Grid>

                <Grid item>
                  <Field
                    label=""
                    id="store"
                    name="store"
                    defaultValue={params.store}
                    type="text"
                    // component={renderAssetSubclassField}
                    component={renderStoreField}
                    style={{ marginTop: 10 }}
                  />
                </Grid>
                <Grid item>
                  <Field
                    label=""
                    id="datePlacedInStore"
                    name="datePlacedInStore"
                    defaultValue={datePlacedInStore}
                    type="date"
                    // component={renderAssetTypeField}
                    component={renderDatePlacedInStoreField}
                    style={{ marginTop: 10, marginLeft: 10 }}
                  />
                </Grid>
              </Grid>
            </Grid>

            <Field
              label=""
              id="description"
              name="description"
              defaultValue={params.description}
              type="text"
              component={renderStoreDescriptionField}
              style={{ marginTop: 10, width: 527 }}
            />
          </Grid>
          {/* <Grid
            item
            container
            direction="column"
            style={{ width: 380, marginLeft: 10 }}
          >
            <Grid item>
              <Typography>This is the second contaier</Typography>
            </Grid>
          </Grid> */}
          <Grid
            item
            container
            direction="column"
            style={{ width: 520, marginLeft: 10 }}
          >
            {/* <Grid item>
              <Typography>This is the third contaier</Typography>
            </Grid> */}
            <Grid item container direction="column" style={{ width: 600 }}>
              <Grid item>
                {/* <Typography>This is the first contaier</Typography> */}
                <Grid container direction="row">
                  <Grid item>
                    <Field
                      label=""
                      id="totalWeight"
                      name="totalWeight"
                      defaultValue={params.totalWeight}
                      type="number"
                      component={renderTotalWeightField}
                      style={{ marginTop: 0, width: 190 }}
                    />
                  </Grid>

                  <Grid item>
                    <Field
                      label=""
                      id="heightDimension"
                      name="heightDimension"
                      defaultValue={params.heightDimension}
                      type="number"
                      // component={renderAssetSubclassField}
                      component={renderHeightDimensionField}
                      style={{ marginTop: 0, marginLeft: 10, width: 190 }}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      label=""
                      id="lengthDimension"
                      name="lengthDimension"
                      defaultValue={params.lengthDimension}
                      type="number"
                      // component={renderAssetTypeField}
                      component={renderLengthDimensionField}
                      style={{ marginTop: 0, marginLeft: 10, width: 170 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                {/* <Typography>This is the first contaier</Typography> */}
                <Grid container direction="row">
                  <Grid item>
                    <Field
                      label=""
                      id="widthDimension"
                      name="widthDimension"
                      defaultValue={params.widthDimension}
                      type="number"
                      component={renderWidthDimensionField}
                      style={{ marginTop: 5, width: 140 }}
                    />
                  </Grid>

                  <Grid item>
                    <Field
                      label=""
                      id="glHead"
                      name="glHead"
                      defaultValue={params.glHead}
                      type="text"
                      // component={renderAssetSubclassField}
                      component={renderAssetGlLedgerField}
                      style={{ marginTop: 0, width: 150 }}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      label=""
                      id="subGlHead"
                      name="subGlHead"
                      defaultValue={params.subGlHead}
                      type="text"
                      // component={renderAssetTypeField}
                      component={renderAssetGlSubledgerField}
                      style={{ marginTop: 0, marginLeft: 10, width: 150 }}
                    />
                  </Grid>
                  <Grid item>
                    <Field
                      label=""
                      id="ledger"
                      name="ledger"
                      defaultValue={params.ledger}
                      type="text"
                      component={renderLedgerField}
                      style={{ marginTop: 10, width: 160 }}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item>
                {/* <Typography>This is the first contaier</Typography> */}
                <Grid container direction="row"></Grid>
              </Grid>
              <Grid item>
                {/* <Typography>This is the first contaier</Typography> */}
                <Grid container direction="row">
                  <Grid item>
                    <Field
                      label=""
                      id="totalAcquisitionCost"
                      name="totalAcquisitionCost"
                      defaultValue={params.totalAcquisitionCost}
                      type="number"
                      component={renderTotalAcquisitionCostField}
                      style={{ marginTop: 5, width: 250 }}
                    />
                  </Grid>

                  <Grid item>
                    <Field
                      label=""
                      id="currency"
                      name="currency"
                      type="text"
                      // component={renderAssetSubclassField}
                      component={renderCurrencyField}
                      style={{ marginTop: 0 }}
                    />
                  </Grid>
                  {/* <Grid item>
                    <Field
                      label=""
                      id="subGlHead"
                      name="subGlHead"
                      type="text"
                      // component={renderAssetTypeField}
                      component={renderAssetGlSubledgerField}
                      style={{ marginTop: 0, marginLeft: 10, width: 150 }}
                    />
                  </Grid> */}
                  {/* <Grid item>
                    <Field
                      label=""
                      id="ledger"
                      name="ledger"
                      type="text"
                      component={renderLedgerField}
                      style={{ marginTop: 10, width: 160 }}
                    />
                  </Grid> */}
                </Grid>
              </Grid>
              <Grid item>
                {/* <Typography>This is the first contaier</Typography> */}

                {renderUniqueAssetForm()}
              </Grid>

              {/* <Field
                label=""
                id="description"
                name="description"
                type="text"
                component={renderStoreDescriptionField}
                style={{ marginTop: 10, width: 519 }}
              /> */}
            </Grid>
          </Grid>
        </Grid>
        {/* //end of the entire form block */}

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
  form: "assetsStockEditForm",
})(AssetsStockEditForm);
