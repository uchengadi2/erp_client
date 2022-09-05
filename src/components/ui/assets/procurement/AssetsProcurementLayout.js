import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import AssetsApprovedProcurementsLayout from "./AssetsApprovedProcurementsLayout";
import AssetsExecutedProcurementsLayout from "./AssetsExecutedProcurementsLayout";
import AssetsUnapprovedProcurementLayout from "./AssetsUnapprovedProcurementLayout";

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
        history.push(`/assets/procurements`);
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

function AssetsProcurementLayout({ token, userId }) {
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
          label="Asset Procurements"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/procurements/assetprocurements`);
          }}
        />
        <Tab
          label="Unapproved Procurement Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/procurements/unapprovedprocurements`);
          }}
        />
        {/* <Tab
          label="Approved Procurement Request"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/assets/procurements/approvedprocurements`);
          }}
        /> */}
      </Tabs>
      <TabPanel value={value} index={0}>
        <AssetsExecutedProcurementsLayout token={token} userId={userId} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssetsUnapprovedProcurementLayout token={token} userId={userId} />
      </TabPanel>
      {/* <TabPanel value={value} index={2}>
        <AssetsApprovedProcurementsLayout token={token} userId={userId} />
      </TabPanel> */}
    </div>
  );
}

export default AssetsProcurementLayout;
