import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import history from "./../../../../history";

import HrCompensationBonusesLayout from "./HrCompensationBonusesLayout";
import HrCompensationCertificateRefundsLayout from "./HrCompensationCertificateRefundsLayout";
import HrCompensationLeaveAllowancesLayout from "./HrCompensationLeaveAllowancesLayout";
import HrCompensationOvertimesLayout from "./HrCompensationOvertimesLayout";
import HrCompensationSalaryAdvanceLayout from "./HrCompensationSalaryAdvanceLayout";
import HrCompensationSalaryLayout from "./HrCompensationSalaryLayout";
import HrCompensationStaffLoansLayout from "./HrCompensationStaffLoansLayout";

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
        history.push(`/crm`);
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

function HrCompensationsLayout({ token }) {
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
          label="Salary"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/salaries`);
          }}
        />
        <Tab
          label="Bonuses"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/bonuses`);
          }}
        />
        <Tab
          label="Leave Allowances"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/leaveallowances`);
          }}
        />
        <Tab
          label="Overtimes"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/overtimes`);
          }}
        />
        <Tab
          label="Staff Loans"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/staffloans`);
          }}
        />
        <Tab
          label="Salary Advance"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/salaryadvances`);
          }}
        />
        <Tab
          label="Certificate Refunds"
          {...a11yProps(0)}
          onClick={(event) => {
            event.preventDefault();
            history.push(`/hr/compensations/certificaterefunds`);
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <HrCompensationSalaryLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <HrCompensationBonusesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <HrCompensationLeaveAllowancesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <HrCompensationOvertimesLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <HrCompensationStaffLoansLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <HrCompensationSalaryAdvanceLayout token={token} />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <HrCompensationCertificateRefundsLayout token={token} />
      </TabPanel>
    </div>
  );
}

export default HrCompensationsLayout;
