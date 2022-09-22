import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import Snackbar from "@material-ui/core/Snackbar";
import DialogContent from "@material-ui/core/DialogContent";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import AssignmentIcon from "@material-ui/icons/Assignment";
import Typography from "@material-ui/core/Typography";
import history from "../../../../history";
import { fetchAssetMovements } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";

import AssetMovementsAllMovementDelete from "./AssetMovementsAllMovementDelete";
import AssetMovementsAllMovementEditForm from "./AssetMovementsAllMovementEditForm";

class AssetMovementsAllMovementsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      deleteOpen: false,
      cancelOpen: false,
      assignOpen: false,
      id: null,
      params: {},
      alert: {
        open: false,
        message: "",
        backgroundColor: "",
      },
    };
  }
  componentDidMount() {
    this.props.fetchAssetMovements(this.props.token);
  }

  handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ deleteOpen: false });
  };

  handleEditDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ editOpen: false });
  };

  handleSuccessfulEditSnackbar = (message) => {
    // history.push("/categories/new");
    this.setState({ editOpen: false });
    this.setState({
      alert: {
        open: true,
        message: message,
        backgroundColor: "#4BB543",
      },
    });
  };

  handleFailedSnackbar = (message) => {
    this.setState({
      alert: {
        open: true,
        message: message,
        backgroundColor: "#FF3232",
      },
    });
    this.setState({ editOpen: false });
  };

  renderEditDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.editOpen}
          onClose={() => [
            this.setState({ editOpen: false }),
            history.push("/assets/movements/allmovements"),
          ]}
        >
          <DialogContent>
            <AssetMovementsAllMovementEditForm
              token={this.props.token}
              userId={this.props.userId}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
              handleSuccessfulEditSnackbar={this.handleSuccessfulEditSnackbar}
              handleFailedSnackbar={this.handleFailedSnackbar}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderDeleteDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.deleteOpen}
          onClose={() => [
            this.setState({ deleteOpen: false }),
            history.push(`/assets/movements/allmovements`),
          ]}
        >
          <DialogContent>
            <AssetMovementsAllMovementDelete
              token={this.props.token}
              userId={this.props.userId}
              id={this.state.id}
              handleDialogOpenStatus={this.handleDialogOpenStatus}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderCancelDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.cancelOpen}
          onClose={() => [
            this.setState({ cancelOpen: false }),
            history.push(`/assets/movements/allmovements`),
          ]}
        >
          <DialogContent>
            <Typography>This is the cancel dialog</Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderAssignOrderDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.assignOpen}
          onClose={() => [
            this.setState({ assignOpen: false }),
            history.push(`/assets/movements/allmovements`),
          ]}
        ></Dialog>
      </>
    );
  };

  renderAssetMovementsList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 60 },
      { field: "serviceOutlet", headerName: "Service Outlet", width: 150 },
      { field: "label", headerName: "Movement Label", width: 200 },
      {
        field: "movementRefNumber",
        headerName: "Reference Number",
        width: 160,
      },
      { field: "assetType", headerName: "Asset Type", width: 160 },
      { field: "assetStock", headerName: "Stock", width: 200 },

      {
        field: "editaction",
        headerName: "",
        width: 30,
        description: "Update row",
        renderCell: (params) => (
          <strong>
            {/* {params.value.getFullYear()} */}
            <EditRoundedIcon
              onClick={() => [
                this.setState({
                  editOpen: true,
                  id: params.id,
                  params: params.row,
                }),
                history.push(
                  `/assets/movements/allmovements/edit/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },

      {
        field: "deleteaction",
        headerName: "",
        width: 30,
        description: "Delete row",
        renderCell: (params) => (
          <strong>
            {/* {params.value.getFullYear()} */}
            <DeleteRoundedIcon
              style={{ color: "red" }}
              onClick={() => [
                this.setState({ deleteOpen: true, id: params.id }),
                history.push(
                  `/assets/movements/allmovements/delete/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.assetMovements.map((assetMovement) => {
      let row = {
        numbering: ++counter,
        id: assetMovement.id,
        serviceOutlet: assetMovement.serviceOutlet,
        label: assetMovement.label,
        movementRefNumber: assetMovement.movementRefNumber,
        purpose: assetMovement.purpose,
        movementType: assetMovement.movementType,
        assetType: assetMovement.assetType,
        assetStock: assetMovement.assetStock,
        store: assetMovement.store,
        movementDate: assetMovement.movementDate,
        totalMovementCost: assetMovement.totalMovementCost,
        currency: assetMovement.currency,
        quantity: assetMovement.quantity,
        assetMeasurementUnit: assetMovement.assetMeasurementUnit,
        createdBy: assetMovement.createdBy,
        dateCreated: assetMovement.dateCreated,
        description: assetMovement.description,
        destination: assetMovement.destination,
        assetReturnDate: assetMovement.assetReturnDate,
        destination: assetMovement.destination,
        expectedDateOfAssetReturn: assetMovement.expectedDateOfAssetReturn,
        actualDateOfAssetReturn: assetMovement.actualDateOfAssetReturn,
      };
      rows.push(row);
    });
    return <DataGridContainer columns={columns} rows={rows} />;
  };

  render() {
    return (
      <>
        {this.renderDeleteDialogForm()}
        {this.renderEditDialogForm()}
        {this.renderAssetMovementsList()}
        <Snackbar
          open={this.state.alert.open}
          message={this.state.alert.message}
          ContentProps={{
            style: { backgroundColor: this.state.alert.backgroundColor },
          }}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
          onClose={() => this.setState({ alert: { ...alert, open: false } })}
          autoHideDuration={4000}
        />
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    assetMovements: Object.values(state.assetMovement),
  };
};

export default connect(mapStateToProps, { fetchAssetMovements })(
  AssetMovementsAllMovementsList
);
