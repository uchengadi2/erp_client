import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";
import AccountUtilityAccountTypesLayout from "./AccountUtilityAccountTypesLayout";
import AccountUtilityCurrencyTypeLayout from "./AccountUtilityCurrencyTypeLayout";
import AccountUtilityGeneralLedgerLayout from "./AccountUtilityGeneralLedgerLayout";
import AccountUtilitySubLedgerLayout from "./AccountUtilitySubLedgerLayout";
import AccountUtilityTransactionTypeLayout from "./AccountUtilityTransactionTypeLayout";
import AccountUtilityRatesLayout from "./AccountUtilityRatesLayout";

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

function AccountUtilitiesLayout({ token }) {
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
          label="Account Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/accounttypes`);
          }}
        />
        <Tab
          label="Currency Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/currencytypes`);
          }}
        />

        <Tab
          label="General Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/gls`);
          }}
        />
        <Tab
          label="Subsidiary Ledgers"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/subgls`);
          }}
        />
        <Tab
          label="Transaction Types"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/transactiontypes`);
          }}
        />
        <Tab
          label="Rates"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/rates`);
          }}
        />
        <Tab
          label=""
          {...a11yProps(0)}
          disabled
          //   onClick={(event) => {
          //     event.preventDefault();
          //     history.push(`/accounts/utilities/subgls`);
          //   }}
        />
        <Tab
          label="====== FUNDING ======"
          {...a11yProps(0)}
          disabled
          //   onClick={(event) => {
          //     event.preventDefault();
          //     history.push(`/accounts/utilities/subgls`);
          //   }}
        />
        <Tab
          label="Equity Account Funding"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/equityfunding`);
          }}
        />
        <Tab
          label="Cash Accounts Funding"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/cashaccounts`);
          }}
        />
        <Tab
          label="Staff Accounts Funding"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/accounts/utilities/staffaccounts`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <AccountUtilityAccountTypesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AccountUtilityCurrencyTypeLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AccountUtilityGeneralLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AccountUtilitySubLedgerLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <AccountUtilityTransactionTypeLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <AccountUtilityRatesLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default AccountUtilitiesLayout;
