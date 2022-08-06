import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import AssetStoresAllStoresLayout from "./AssetStoresAllStoresLayout";
import AssetStoresAllocateSpaceLayout from "./AssetStoresAllocateSpaceLayout";
import AssetStoresClosuresLayout from "./AssetStoresClosuresLayout";
import AssetStoresLeaseLayout from "./AssetStoresLeaseLayout";
import AssetStoresMaintenanceLayout from "./AssetStoresMaintenanceLayout";
import AssetsStoresOwnershipLayout from "./AssetStoresOwnershipLayout";
import AssetStoresSellLayout from "./AssetStoresSellLayout";

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
        history.push(`/assets/inventories`);
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

function AssetStoresLayout({ token, userId }) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Tabs
        orientation="vertical"
        //variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        className={classes.tabs}
      >
        <Tab
          label="Stores"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/allstores`);
          }}
        />
        <Tab
          label="Maintenances"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/maintenances`);
          }}
        />

        <Tab
          label="Lease & Rent"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/lease`);
          }}
        />

        <Tab
          label="Change Ownership"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/ownership`);
          }}
        />
        <Tab
          label="Allocate Space"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/spaceallocations`);
          }}
        />
        <Tab
          label="sell"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/sell`);
          }}
        />
        <Tab
          label="Closures"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/stores/closures`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AssetStoresAllStoresLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssetStoresMaintenanceLayout token={token} userId={userId} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <AssetStoresLeaseLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AssetsStoresOwnershipLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AssetStoresAllocateSpaceLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AssetStoresSellLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <AssetStoresClosuresLayout token={token} userId={userId} />
      </TabPanel>
    </div>
  );
}

export default AssetStoresLayout;
