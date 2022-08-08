import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import AssetAssetSubClassTypesLayout from "./AssetAssetSubClassTypesLayout";
import AssetAssetTypesLayout from "./AssetAssetTypesLayout";
import AssetDepreciationTypesLayout from "./AssetDepreciationTypesLayout";
import AssetStoreTypesLayout from "./AssetStoreTypesLayout";
import AssetMaintenanceTypesLayout from "./AssetMaintenanceTypesLayout";
import AssetMeasurementUnitTypes from "./AssetMeasurementUnitTypes";
import AssetMovementTypesLayout from "./AssetMovementTypesLayout";
import AssetStoreMaintenanceTypesLayout from "./AssetStoreMaintenanceTypesLayout";
import AssetDispositionTypesLayout from "./AssetDispositionTypesLayout";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

function LinkTab(props) {
  return (
    <Tab
      component={Link}
      //to={route.link}
      //label={route.name}
      onClick={(event) => {
        event.preventDefault();
        history.push(`/orders`);
      }}
      {...props}
    />
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    //height: 180,
    marginTop: "-20px",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  tab: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

function AssetUtilityLayout({ token, userId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box className={classes.root}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label="Asset Subclass Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/subclasstypes`);
          }}
        />
        <Tab
          label="Asset Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/assettypes`);
          }}
        />
        <Tab
          label="Asset Depreciation Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/depreciationtypes`);
          }}
        />
        <Tab
          label="Store Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/storetypes`);
          }}
        />

        <Tab
          label="Maintenance Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/maintenancetypes`);
          }}
        />
        <Tab
          label="Asset Measurement Unit"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/measurementunits`);
          }}
        />
        <Tab
          label="Movement Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/movementtypes`);
          }}
        />
        <Tab
          label="Disposition Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/dispositiontypes`);
          }}
        />

        <Tab
          label="Store Maintenance Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/utilities/storemaintenancetypes`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AssetAssetSubClassTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssetAssetTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AssetDepreciationTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AssetStoreTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AssetMaintenanceTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AssetMeasurementUnitTypes token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AssetMovementTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={7}>
        <AssetDispositionTypesLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={8}>
        <AssetStoreMaintenanceTypesLayout token={token} userId={userId} />
      </TabPanel>
    </Box>
  );
}

export default AssetUtilityLayout;
