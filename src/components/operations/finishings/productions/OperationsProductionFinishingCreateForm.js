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
import { CREATE_PRODUCTIONFINISHING } from "../../../../actions/types";

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
      helperText="Enter a Label"
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

const renderExtraFinishingCostField = ({
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
      helperText="Extra Finishing Cost"
      variant="outlined"
      label={label}
      id={input.name}
      defaultValue={0}
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

const renderFinishingDateField = ({
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
      helperText="Finishing Date"
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
      helperText="Describe Finishing"
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

const renderCommentField = ({
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
      helperText="Comment"
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

const renderOutputField = ({
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
      helperText="Output"
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

const renderInventoryAllocationUnitField = ({
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
      helperText="Allocated Inventory Quantity"
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

const renderProcessorField = ({
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
      helperText="Enter Processor"
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

const renderSupervisorField = ({
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
      helperText="Enter Supervisor"
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

function OperationsProductionFinishingCreateForm(props) {
  const classes = useStyles();
  const [project, setProject] = useState();
  const [user, setUser] = useState();
  const [status, setStatus] = useState("in-progress");
  const [processingType, setProcessingType] = useState();
  const [process, setProcess] = useState();
  const [maintenanceType, setMaintenanceType] = useState();
  const [currency, setCurrency] = useState();
  const [inventoryUnitCurrency, setInventoryUnitCurrency] = useState();
  const [serviceOutlet, setServiceOutlet] = useState();
  const [inventoryType, setInventoryType] = useState();
  const [inventory, setInventory] = useState();
  const [task, setTask] = useState();
  const [activity, setActivity] = useState();
  const [operation, setOperation] = useState();
  const [processorType, setProcessorType] = useState();
  const [processingTypeList, setProcessingTypeList] = useState([]);
  const [processList, setProcessList] = useState([]);
  const [userList, setUserList] = useState([]);
  const [serviceOutletList, setServiceOutList] = useState([]);
  const [glHeadList, setGlHeadList] = useState([]);
  const [subGlHeadList, setSubGlHeadList] = useState([]);
  const [currencyList, setCurrencyList] = useState([]);
  const [inventoryUnitCurrencyList, setInventoryUnitCurrencyList] = useState(
    []
  );
  const [taskList, setTaskList] = useState([]);
  const [activityList, setActivityList] = useState([]);
  const [operationList, setOperationList] = useState([]);
  const [inventoryTypeList, setInventoryTypeList] = useState([]);
  const [inventoryList, setInventoryList] = useState([]);
  const [processorTypeList, setProcessorTypeList] = useState([]);

  const [maintenanceTypeList, setMaintenanceTypeList] = useState([]);
  const [loading, setLoading] = useState(false);

  const [totalAvailableInventory, setTotalAvailableInventory] = useState();
  const [availableInventoryUnit, setAvailableInventoryUnit] = useState();
  const [allocatedInventoryUnit, setAllocatedInventoryUnit] = useState();
  const [inventoryCostPerUnit, setInventoryCostPerUnit] = useState();

  const dispatch = useDispatch();

  //service outlet

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

  //fetch project users

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationfinishingtypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setMaintenanceTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  //fetch the asset store subglheads

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationoperations", {
        params: { serviceOutlet: serviceOutlet },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.label}`,
        });
      });
      setOperationList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [serviceOutlet]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationprocessingtypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setProcessingTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [props]);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/operationprocessings", {
        params: {
          operation: operation,
          processingType: processingType,
        },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.label}`,
        });
      });
      setProcessList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [processingType, operation]);

  //retrieve currencies
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/currencies");
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

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetinventorytypes");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setInventoryTypeList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/assetinventories", {
        params: {
          inventoryType: inventoryType,
        },
      });
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.sku}-${item.name}`,
        });
      });
      setInventoryList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, [inventoryType]);

  //retrieve inventory unit cost currencies
  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get("/currencies");
      const workingData = response.data.data.data;
      workingData.map((item) => {
        allData.push({
          id: item._id,
          name: `${item.name}`,
        });
      });
      setInventoryUnitCurrencyList(allData);
    };

    //call the function

    fetchData().catch(console.error);
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      let allData = [];
      api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
      const response = await api.get(`/assetinventories/${inventory}`);
      const item = response.data.data.data;
      allData.push({
        id: item._id,
        name: `${item.sku}-${item.name}`,
        remainingCapacity: item.remainingCapacity,
        capacityUnit: item.capacityUnit,
        costPerUnit: item.costPerUnit,
        currency: item.currency,
      });
      setTotalAvailableInventory(allData[0].remainingCapacity);
      setAvailableInventoryUnit(allData[0].capacityUnit);
      setAllocatedInventoryUnit(allData[0].capacityUnit);
      setInventoryCostPerUnit(allData[0].costPerUnit);
      setInventoryUnitCurrency(allData[0].currency);
      setCurrency(allData[0].currency);
    };

    //call the function

    fetchData().catch(console.error);
  }, [inventory]);

  const handleOperationChange = (event) => {
    setOperation(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleProcessingTypeChange = (event) => {
    setProcessingType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleProcessChange = (event) => {
    setProcess(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleServiceOutletChange = (event) => {
    setServiceOutlet(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleMaintenanceTypeChange = (event) => {
    setMaintenanceType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleStatusChange = (event) => {
    setStatus(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleCurrencyChange = (event) => {
    setCurrency(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleInventoryTypeChange = (event) => {
    setInventoryType(event.target.value);
  };

  const handleInventoryChange = (event) => {
    setInventory(event.target.value);
  };

  const handleProcessorTypeChange = (event) => {
    setProcessorType(event.target.value);
    //     props.handleCountryChange(event.target.value);
  };

  const handleInventoryUnitCostCurrencyChange = (event) => {
    setInventoryUnitCurrency(event.target.value);
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

  //get the operation list
  const renderOperationList = () => {
    return operationList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the processing type list
  const renderMaintenanceTypeList = () => {
    return maintenanceTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the currency list
  const renderCurrencyList = () => {
    return currencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the processing type list
  const renderProcessingTypeList = () => {
    return processingTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the process list
  const renderProcessList = () => {
    return processList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the inventory type list
  const renderInventoryTypeList = () => {
    return inventoryTypeList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the inventory list
  const renderInventoryList = () => {
    return inventoryList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  //get the inventory unit currency list
  const renderInventoryUnitCurrencyList = () => {
    return inventoryUnitCurrencyList.map((item) => {
      return (
        <MenuItem key={item.id} value={item.id}>
          {item.name}
        </MenuItem>
      );
    });
  };

  const renderExtraFinishingCostCurrencyField = ({
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
            labelId="inventoryUnitCurrency"
            id="inventoryUnitCurrency"
            //defaultValue={schemeType}
            value={inventoryUnitCurrency}
            // onChange={props.handleCountryChange}
            onChange={handleInventoryUnitCostCurrencyChange}
            label="Inventory Unit Currency"
            style={{ width: 210, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
            readOnly
          >
            {renderInventoryUnitCurrencyList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Currency</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderInventoryTypeField = ({
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
            labelId="inventoryType"
            id="inventoryType"
            //defaultValue={schemeType}
            value={inventoryType}
            // onChange={props.handleCountryChange}
            onChange={handleInventoryTypeChange}
            label="Inventory Type"
            style={{ width: 400, marginTop: 10, marginLeft: 0, height: 38 }}
          >
            {renderInventoryTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Inventory Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderInventoryField = ({
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
            labelId="inventory"
            id="inventory"
            //defaultValue={schemeType}
            value={inventory}
            // onChange={props.handleCountryChange}
            onChange={handleInventoryChange}
            label="inventory"
            style={{ width: 400, marginTop: 10, marginLeft: 0, height: 38 }}
          >
            {renderInventoryList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Inventory</FormHelperText>
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
            Service Outlet
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderOperationField = ({
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
            labelId="operation"
            id="operation"
            //defaultValue={schemeType}
            value={operation}
            // onChange={props.handleCountryChange}
            onChange={handleOperationChange}
            label="Operation"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderOperationList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Operation</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProcessingTypeField = ({
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
            labelId="processingType"
            id="processingType"
            //defaultValue={schemeType}
            value={processingType}
            // onChange={props.handleCountryChange}
            onChange={handleProcessingTypeChange}
            label="Processing Type"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderProcessingTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Processing Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProcessField = ({
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
            labelId="process"
            id="process"
            //defaultValue={schemeType}
            value={process}
            // onChange={props.handleCountryChange}
            onChange={handleProcessChange}
            label="Process"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderProcessList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Process</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderFinishingTypeField = ({
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
            labelId="maintenanceType"
            id="maintenanceType"
            //defaultValue={schemeType}
            value={maintenanceType}
            // onChange={props.handleCountryChange}
            onChange={handleMaintenanceTypeChange}
            label="Maintenance Type"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
            //{...input}
          >
            {renderMaintenanceTypeList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Finishing Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderAllocatedUnitCostCurrencyField = ({
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
            style={{ width: 210, marginTop: 10, marginLeft: 0, height: 38 }}
            //{...input}
            readOnly
          >
            {renderCurrencyList()}
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>Currency</FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderStatusField = ({
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
            labelId="status"
            id="status"
            //defaultValue={schemeType}
            value={status}
            // onChange={props.handleCountryChange}
            onChange={handleStatusChange}
            label="Maintenance Status"
            style={{ width: 400, marginTop: 5, marginLeft: 0, height: 38 }}
          >
            <MenuItem value="in-progress">In Progress</MenuItem>
            <MenuItem value="completed">Completed</MenuItem>
            <MenuItem value="suspended">Suspended</MenuItem>
            <MenuItem value="waived">Waived</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Finishing Status
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderProcessorTypeField = ({
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
            labelId="processorType"
            id="processorType"
            //defaultValue={schemeType}
            value={processorType}
            // onChange={props.handleCountryChange}
            onChange={handleProcessorTypeChange}
            label="Processor Type"
            style={{ width: 200, marginTop: 10, marginLeft: 0, height: 38 }}
          >
            <MenuItem value="human">Human</MenuItem>
            <MenuItem value="machine">Machine</MenuItem>
          </Select>
          <FormHelperText style={{ marginLeft: 20 }}>
            Processor Type
          </FormHelperText>
        </FormControl>
      </Box>
    );
  };

  const renderInventoryRemainingCapacityField = ({
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
        helperText="Quantity of Available Inventory"
        variant="outlined"
        label={label}
        id={input.name}
        defaultValue={totalAvailableInventory}
        fullWidth
        //required
        type={type}
        {...custom}
        disabled
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

  const renderInventoryUnitCostField = ({
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
        helperText="Inventory Cost Per Unit"
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
        InputProps={{
          inputProps: {},
          style: {
            height: 38,
          },
        }}
      />
    );
  };

  const renderAvailableInventoryUnitField = ({
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
        helperText="Unit"
        variant="outlined"
        label={label}
        id={input.name}
        //defaultValue={input.value}
        fullWidth
        //required
        type={type}
        disabled
        {...custom}
        defaultValue={availableInventoryUnit}
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

  const renderAllocatedInventoryUnitField = ({
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
        helperText="Unit"
        variant="outlined"
        label={label}
        id={input.name}
        //defaultValue={input.value}
        fullWidth
        //required
        type={type}
        {...custom}
        disabled
        defaultValue={allocatedInventoryUnit}
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

  const buttonContent = () => {
    return <React.Fragment> Add Finishing</React.Fragment>;
  };

  const onSubmit = (formValues) => {
    setLoading(true);

    if (!serviceOutlet) {
      props.handleFailedSnackbar(
        "Please select the Service outlet and try again"
      );
      setLoading(false);
      return;
    }
    if (!operation) {
      props.handleFailedSnackbar("Please select an Operation and try again");
      setLoading(false);
      return;
    }
    if (!maintenanceType) {
      props.handleFailedSnackbar(
        "Please select the Finishing Type and try again"
      );
      setLoading(false);
      return;
    }
    if (!currency) {
      props.handleFailedSnackbar("Please select the  Currency and try again");
      setLoading(false);
      return;
    }

    if (!processingType) {
      props.handleFailedSnackbar(
        "Please select the Processing Type  and try again"
      );
      setLoading(false);
      return;
    }

    if (!process) {
      props.handleFailedSnackbar("Please select a Process and try again");
      setLoading(false);
      return;
    }

    if (!inventoryType) {
      props.handleFailedSnackbar(
        "Please select an inventory Type and try again"
      );
      setLoading(false);
      return;
    }
    if (!inventory) {
      props.handleFailedSnackbar("Please select an inventory and try again");
      setLoading(false);
      return;
    }
    if (!processorType) {
      props.handleFailedSnackbar(
        "Please select a Processor Type and try again"
      );
      setLoading(false);
      return;
    }

    if (!processorType) {
      props.handleFailedSnackbar(
        "Please select a Processor Type and try again"
      );
      setLoading(false);
      return;
    }

    if (!formValues["label"]) {
      props.handleFailedSnackbar("Please enter the Label field and try again");
      setLoading(false);
      return;
    }

    if (!formValues["inventoryQuantityAllocated"]) {
      props.handleFailedSnackbar(
        "Please enter the Inventory Quantity Allocated and try again"
      );
      setLoading(false);
      return;
    }

    const diff =
      +totalAvailableInventory - +formValues["inventoryQuantityAllocated"];

    if (diff < 0) {
      props.handleFailedSnackbar(
        "You are allocating more inventory than is available. Please correct this and try again"
      );
      setLoading(false);
      return;
    }

    const Str = require("@supercharge/strings");
    // formValues["code"] = Str(formValues.code).limit(4).get();
    formValues["createdBy"] = props.userId;
    formValues["serviceOutlet"] = serviceOutlet;
    formValues["status"] = status;
    formValues["operation"] = operation;
    formValues["finishingType"] = maintenanceType;
    formValues["extraFinishingCostCurrency"] = currency;
    formValues["processingType"] = processingType;
    formValues["process"] = process;
    formValues["inventoryType"] = inventoryType;
    formValues["inventory"] = inventory;
    formValues["processorType"] = processorType;
    formValues["availableInventoryQuantity"] = totalAvailableInventory;
    formValues["availableInventoryUnit"] = availableInventoryUnit;
    formValues["inventoryCostPerUnit"] = inventoryCostPerUnit;
    formValues["inventoryUnitCostCurrency"] = inventoryUnitCurrency;
    formValues["allocatedInventoryUnit"] = availableInventoryUnit;

    if (!formValues["refNumber"]) {
      formValues["refNumber"] =
        "OP" + "-" + Math.floor(Math.random() * 100000000000) + "-" + "FSH";
    }

    if (formValues) {
      const createForm = async () => {
        api.defaults.headers.common["Authorization"] = `Bearer ${props.token}`;
        const response = await api.post(
          `/operationproductionfinishings`,
          formValues
        );

        if (response.data.status === "success") {
          dispatch({
            type: CREATE_PRODUCTIONFINISHING,
            payload: response.data.data.data,
          });

          //deduct the inventory quantity

          const remainingAvailableInventory =
            +totalAvailableInventory -
            +formValues["inventoryQuantityAllocated"];

          const dataValue = {
            remainingCapacity: remainingAvailableInventory,
          };

          const responseInventory = await api.patch(
            `/assetinventories/${inventory}`,
            dataValue
          );

          props.handleSuccessfulCreateSnackbar(
            `${response.data.data.data.refNumber}-${response.data.data.data.label} Finishing is added successfully!!!`
          );
          props.handleDialogOpenStatus();
          setLoading(false);
        } else {
          props.handleFailedSnackbar(
            "Something went wrong, please try again!!!"
          );
        }
      };
      createForm().catch((err) => {
        props.handleFailedSnackbar();
        console.log("err:", err.message);
      });
    } else {
      props.handleFailedSnackbar("Something went wrong, please try again!!!");
    }
  };

  return (
    <form id="operationsProductionFinishingCreateForm">
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
            <Typography variant="subtitle1"> Finishing</Typography>
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

        <Field
          label=""
          id="operation"
          name="operation"
          type="text"
          component={renderOperationField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="processingType"
          name="processingType"
          type="text"
          component={renderProcessingTypeField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="process"
          name="process"
          type="text"
          component={renderProcessField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="finishingType"
          name="finishingType"
          type="text"
          component={renderFinishingTypeField}
          // style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="label"
          name="label"
          type="text"
          component={renderLabelField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="inventoryType"
          name="inventoryType"
          type="text"
          component={renderInventoryTypeField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="inventory"
          name="inventory"
          type="text"
          component={renderInventoryField}
          style={{ marginTop: 10 }}
        />

        <Grid container="row">
          <Grid item style={{ width: "52%" }}>
            <Field
              label=""
              id="availableInventoryQuantity"
              name="availableInventoryQuantity"
              default={totalAvailableInventory}
              type="number"
              component={renderInventoryRemainingCapacityField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "45%", marginLeft: 10 }}>
            <Field
              label=""
              id="availableInventoryUnit"
              name="availableInventoryUnit"
              default={availableInventoryUnit}
              type="text"
              component={renderAvailableInventoryUnitField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="inventoryCostPerUnit"
              name="inventoryCostPerUnit"
              defaultValue={inventoryCostPerUnit}
              type="number"
              component={renderInventoryUnitCostField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="inventoryUnitCostCurrency"
              name="inventoryUnitCostCurrency"
              defaultValue={currency}
              type="text"
              component={renderAllocatedUnitCostCurrencyField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container="row">
          <Grid item style={{ width: "52%" }}>
            <Field
              label=""
              id="inventoryQuantityAllocated"
              name="inventoryQuantityAllocated"
              type="number"
              component={renderInventoryAllocationUnitField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "45%", marginLeft: 10 }}>
            <Field
              label=""
              id="allocatedInventoryUnit"
              name="allocatedInventoryUnit"
              defaultValue={allocatedInventoryUnit}
              type="text"
              component={renderAllocatedInventoryUnitField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>
        <Grid container="row">
          <Grid item style={{ width: "45%", marginLeft: 0 }}>
            <Field
              label=""
              id="extraFinishingCost"
              name="extraFinishingCost"
              type="number"
              component={renderExtraFinishingCostField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="extraFinishingCostCurrency"
              name="extraFinishingCostCurrency"
              defaultValue={inventoryUnitCurrency}
              type="text"
              component={renderExtraFinishingCostCurrencyField}
              style={{ marginTop: 5 }}
            />
          </Grid>
        </Grid>

        <Grid container="row">
          <Grid item style={{ width: "45%" }}>
            <Field
              label=""
              id="refNumber"
              name="refNumber"
              type="text"
              component={renderReferenceNumberField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "52%", marginLeft: 10 }}>
            <Field
              label=""
              id="finishingDate"
              name="finishingDate"
              type="date"
              component={renderFinishingDateField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="status"
          name="status"
          type="text"
          component={renderStatusField}
          style={{ marginTop: 10 }}
        />

        <Grid container="row">
          <Grid item style={{ width: "52%" }}>
            <Field
              label=""
              id="processorType"
              name="processorType"
              type="text"
              component={renderProcessorTypeField}
              style={{ marginTop: 10 }}
            />
          </Grid>
          <Grid item style={{ width: "45%", marginLeft: 10 }}>
            <Field
              label=""
              id="processor"
              name="processor"
              type="text"
              component={renderProcessorField}
              style={{ marginTop: 10 }}
            />
          </Grid>
        </Grid>

        <Field
          label=""
          id="supervisor"
          name="supervisor"
          type="text"
          component={renderSupervisorField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="output"
          name="output"
          type="text"
          component={renderOutputField}
          style={{ marginTop: 10 }}
        />
        <Field
          label=""
          id="comment"
          name="comment"
          type="text"
          component={renderCommentField}
          style={{ marginTop: 10 }}
        />

        <Field
          label=""
          id="description"
          name="description"
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
  form: "operationsProductionFinishingCreateForm",
})(OperationsProductionFinishingCreateForm);
