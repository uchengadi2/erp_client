import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";

import Typography from "@material-ui/core/Typography";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Toolbar } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import history from "../../../../history";

import CurrencyFilter from "./../../headerFilters/CurrencyFilter";
import AccountEmployeeLoans from "../../../accounts/employees/AccountEmployeeLoans";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
  },
  headerContainer: {
    height: 20,
    marginTop: 10,
    height: 40,
  },
  secondContainer: {
    // backgroundColor: "red",
    marginTop: 10,
    padding: 10,
    display: "none",
  },
  contentContainer: {
    // backgroundColor: "#ccab",
    height: "auto",
    marginTop: 0,
    width: 1000,
    marginLeft: 50,
  },
  addButton: {
    borderRadius: 10,
    height: 30,
    width: 130,
    marginLeft: 10,
    marginTop: 2,
    marginBottom: 5,
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
    margin: 25,
  },
  selectField: {
    marginLeft: 50,
  },
}));

function AccountEmployeeLoansLayout({ token }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpen(false);
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
        <Grid item className={classes.selectField}>
          <CurrencyFilter
          // token={props.token}
          // selectList={countryList}
          // selectedCountry={selectedCountry}
          // handleCountryChange={handleCountryChange}
          />
        </Grid>
        <Grid item className={classes.headerContainer}>
          <Toolbar disableGutters className={classes.toolbar}>
            {/* <Button
              variant="contained"
              className={classes.addButton}
              onClick={() => [
                setOpen(true),
                history.push("/utilities/currencies/new"),
              ]}
            >
              Add Currency
            </Button> */}
          </Toolbar>
        </Grid>
        <Grid item className={classes.contentContainer}>
          <AccountEmployeeLoans token={token} />
        </Grid>
      </Grid>
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={open}
        onClose={() => [
          setOpen(false),
          history.push("/accounts/employees/loans"),
        ]}
      >
        <DialogContent>
          {/* <CurrencyFormContainer
            token={token}
            handleDialogOpenStatus={handleDialogOpenStatus}
          /> */}
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
    </Grid>
  );
}

export default AccountEmployeeLoansLayout;
