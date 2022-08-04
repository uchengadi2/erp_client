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

import InventoryLocationFilters from "../../headerFilters/InventoryLocationFilters";
import AssetInventoryAllStockList from "../../../assets/inventory/allStock/AssetInventoryAllStockList";
import AssetInventoryInitaiteTransferForm from "../../../assets/inventory/allStock/AssetInventoryInitaiteTransferForm";
import AssetInventoryInitiateDispositionForm from "../../../assets/inventory/allStock/AssetInventoryInitiateDispositionForm";
import AssetInventoryInitiateRequisitionForm from "../../../assets/inventory/allStock/AssetInventoryInitiateRequisitionForm";
import AssetInventoryInitiateRetirementForm from "../../../assets/inventory/allStock/AssetInventoryInitiateRetirementForm";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: "-80px",
    width: 1050,
  },
  headerContainer: {
    height: 20,
    marginTop: 10,
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
    width: 170,
    marginLeft: 10,
    marginTop: 50,
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
  retirementButton: {
    borderRadius: 10,
    height: 30,
    width: 220,
    marginLeft: 10,
    marginTop: 50,
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
  disposalButton: {
    borderRadius: 10,
    height: 30,
    width: 200,
    marginLeft: 10,
    marginTop: 50,
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
  transferButton: {
    borderRadius: 10,
    height: 30,
    width: 250,
    marginLeft: 10,
    marginTop: 50,
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
    margin: -10,
  },
}));

function AssetInventoryAllStocksLayout(props) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openDispositionForm, setOpenDispositionForm] = useState(false);
  const [openRequisitionForm, setOpenRequisitionForm] = useState(false);
  const [openRetirementForm, setOpenRetirementForm] = useState(false);
  const [openTransferForm, setOpenTransferForm] = useState(false);
  const [alert, setAlert] = useState({
    open: false,
    message: "",
    backgroundColor: "",
  });

  const theme = useTheme();
  const matchesMD = useMediaQuery(theme.breakpoints.down("md"));
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const matchesXS = useMediaQuery(theme.breakpoints.down("xs"));

  const handleRequisitionDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenRequisitionForm(false);
  };

  const handleRetirementDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenRetirementForm(false);
  };

  const handleDispostionDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenDispositionForm(false);
  };

  const handleTransferDialogOpenStatus = () => {
    // history.push("/categories/new");
    setOpenTransferForm(false);
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
        <Grid item className={classes.selectField}>
          <InventoryLocationFilters />
        </Grid>
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
                  setOpenRequisitionForm(true),
                  history.push("/assets/inventories/allstocks/requistions/new"),
                ]}
              >
                Make Stock Requisition
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.retirementButton}
                onClick={() => [
                  setOpenRetirementForm(true),
                  history.push("/assets/inventories/allstocks/retirements/new"),
                ]}
              >
                Initiate Stock Retirement
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.disposalButton}
                onClick={() => [
                  setOpenDispositionForm(true),
                  history.push("/assets/inventories/allstocks/disposition/new"),
                ]}
              >
                Initiate Stock Disposition
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                className={classes.transferButton}
                onClick={() => [
                  setOpenTransferForm(true),
                  history.push("/assets/inventories/allstocks/transfers/new"),
                ]}
              >
                Initiate Stock Transfer or Leasing
              </Button>
            </Grid>
          </Toolbar>
        </Grid>
        <Grid item className={classes.contentContainer}>
          <AssetInventoryAllStockList token={props.token} />
          {/* {renderDataList()} */}
          {/* <DataGridText /> */}
        </Grid>
      </Grid>
      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openRequisitionForm}
        onClose={() => [
          setOpenRequisitionForm(false),
          history.push("/assets/inventories/allstocks/"),
        ]}
      >
        <DialogContent>
          <AssetInventoryInitiateRequisitionForm
            token={props.token}
            handleSuccessfulCreateSnackbar={handleSuccessfulCreateSnackbar}
            handleFailedSnackbar={handleFailedSnackbar}
            handleRequisitionDialogOpenStatus={
              handleRequisitionDialogOpenStatus
            }
          />
        </DialogContent>
      </Dialog>

      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openRetirementForm}
        onClose={() => [
          setOpenRetirementForm(false),
          history.push("/assets/inventories/allstocks/"),
        ]}
      >
        <DialogContent>
          <AssetInventoryInitiateRetirementForm
            token={props.token}
            handleRetirementDialogOpenStatus={handleRetirementDialogOpenStatus}
            handleSuccessfulCreateSnackbar={handleSuccessfulCreateSnackbar}
            handleFailedSnackbar={handleFailedSnackbar}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openDispositionForm}
        onClose={() => [
          setOpenDispositionForm(false),
          history.push("/assets/inventories/allstocks/"),
        ]}
      >
        <DialogContent>
          <AssetInventoryInitiateDispositionForm
            token={props.token}
            handleDispostionDialogOpenStatus={handleDispostionDialogOpenStatus}
            handleSuccessfulCreateSnackbar={handleSuccessfulCreateSnackbar}
            handleFailedSnackbar={handleFailedSnackbar}
          />
        </DialogContent>
      </Dialog>

      <Dialog
        //style={{ zIndex: 1302 }}
        fullScreen={matchesXS}
        open={openTransferForm}
        onClose={() => [
          setOpenTransferForm(false),
          history.push("/assets/inventories/allstocks/"),
        ]}
      >
        <DialogContent>
          <AssetInventoryInitaiteTransferForm
            token={props.token}
            handleTransferDialogOpenStatus={handleTransferDialogOpenStatus}
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

export default AssetInventoryAllStocksLayout;
