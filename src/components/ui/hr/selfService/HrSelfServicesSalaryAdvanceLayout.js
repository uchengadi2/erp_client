import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import history from "../../../../history";
import CrmPartnerTypeFilter from "../../headerFilters/CrmPartnerTypeFilter";

import HrSelfServiceSalaryAdvanceCreateForm from "../../../hr/selfService/salaryAdvance/HrSelfServiceSalaryAdvanceCreateForm";
import HrSelfServiceSalaryAdvanceList from "../../../hr/selfService/salaryAdvance/HrSelfServiceSalaryAdvanceList";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    width: 1000,
  },
  headerContainer: {
    height: 20,
    marginTop: 0,
    height: 40,
  },
  secondContainer: {
    // backgroundColor: "red",
    marginTop: 30,
    padding: 10,
    display: "none",
  },
  contentContainer: {
    // backgroundColor: "#ccab",
    height: "auto",
    marginTop: 60,
  },
  addButton: {
    borderRadius: 10,
    height: 30,
    width: 200,
    marginLeft: 10,
    marginTop: 50,
    marginBottom: 20,
    fontSize: "0.75rem",
    backgroundColor: theme.palette.common.orange,
    color: "white",
    "&:hover": {
      backgroundColor: theme.palette.common.grey,
    },
    [theme.breakpoints.down("sm")]: {
      height: 40,
      width: 225,
    },
  },
  toolbar: {
    padding: 5,
    margin: -10,
  },
  selectField: {
    marginTop: 0,
  },
}));

function HrSelfServicesSalaryAdvanceLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpen(false);
  };

  const handleSuccessfulCreateSnackbar = (message) => {
    // history.push("/categories/new");
    setOpen({ open: false });
    setAlert({
      open: true,
      message: message,
      backgroundColor: "#4BB543",
    });
  };

  const handleFailedSnackbar = (message) => {
    setAlert({
      open: true,
      message,
      backgroundColor: "#FF3232",
    });
    setOpen({ open: false });
  };

  const width = 12;

  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className={classes.root}
      spacing={2}
    >
      <Grid item container direction="column" sm={width}>
        {/* <Grid item className={classes.selectField}>
          <CrmPartnerTypeFilter />
        </Grid> */}
        <Grid
          item
          container
          direction="row"
          className={classes.headerContainer}
        >
          <Toolbar disableGutters className={classes.toolbar}>
            <Grid item>
              <Button
                variant="contained"
                className={classes.addButton}
                onClick={() => [
                  setOpen(true),
                  history.push("/hr/selfservices/salaryadvances/new"),
                ]}
              >
                Apply for Salary Advance
              </Button>
            </Grid>
            <Grid item></Grid>
          </Toolbar>
        </Grid>
        <Grid item className={classes.contentContainer}>
          <HrSelfServiceSalaryAdvanceList
            token={props.token}
            userId={props.userId}
          />
          {/* {renderDataList()} */}
          {/* <DataGridText /> */}
        </Grid>
      </Grid>
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => [
          setOpen(false),
          history.push("/hr/selfservices/salaryadvances"),
        ]}
      >
        <DialogContent>
          <HrSelfServiceSalaryAdvanceCreateForm
            token={props.token}
            userId={props.userId}
            handleDialogOpenStatus={handleDialogOpenStatus}
            handleSuccessfulCreateSnackbar={handleSuccessfulCreateSnackbar}
            handleFailedSnackbar={handleFailedSnackbar}
          />
        </DialogContent>
      </Dialog>
      <Grid
        item
        container
        // sm={12 - width}
        direction="column"
        className={classes.secondContainer}
        justifyContent="center"
      >
        <Grid item>
          <Typography>This is the secong Inner Container</Typography>
        </Grid>
        <Grid item>
          <Typography>This is the third Inner Container</Typography>
        </Grid>
        <Grid item>
          <Typography>This is the fourth Inner Container</Typography>
        </Grid>
      </Grid>
      <Snackbar
        open={alert.open}
        message={alert.message}
        ContentProps={{
          style: { backgroundColor: alert.backgroundColor },
        }}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        onClose={() => setAlert({ ...alert, open: false })}
        autoHideDuration={4000}
      />
    </Grid>
  );
}

export default HrSelfServicesSalaryAdvanceLayout;
