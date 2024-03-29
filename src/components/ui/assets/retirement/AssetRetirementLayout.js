import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import AssetRetirementsAllRetirementsLayout from "./AssetRetirementsAllRetirementsLayout";
import AssetRetirementsPendingRetirementLayout from "./AssetRetirementsPendingRetirementLayout";
import AssetRetirementsReturnAssetLayout from "./AssetRetirementsReturnAssetLayout";
import AssetRetirementsWithdrawnRetirementLayout from "./AssetRetirementsWithdrawnRetirementLayout";

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
        history.push(`/assets/retirements`);
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

function AssetRetirementLayout({ token }) {
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
          label="Retirements"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/retirements/allretirements`);
          }}
        />
        {/* <Tab
          label="Pending Retirements"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/retirements/pendingretirements`);
          }}
        />

        <Tab
          label="Withdrawn Retirements"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/retirements/withdrawnretirements`);
          }}
        />

        <Tab
          label="Asset Returns"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/retirements/assetreturns`);
          }}
        /> */}
      </Tabs>

      <TabPanel value={value} index={0}>
        <AssetRetirementsAllRetirementsLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssetRetirementsPendingRetirementLayout token={token} />
      </TabPanel>

      <TabPanel value={value} index={2}>
        <AssetRetirementsWithdrawnRetirementLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AssetRetirementsReturnAssetLayout token={token} />
      </TabPanel>
    </Box>
  );
}

export default AssetRetirementLayout;
