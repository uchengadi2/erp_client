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
import { fetchOperationProductionMaintenances } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";

import OperationsProductionMaintenanceDelete from "./OperationsProductionMaintenanceDelete";
import OperationsProductionMaintenanceEditForm from "./OperationsProductionMaintenanceEditForm";

class OperationsProductionMaintenanceList extends React.Component {
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
    this.props.fetchOperationProductionMaintenances(this.props.token);
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
            history.push("/operations/maintenances/productionmaintenances"),
          ]}
        >
          <DialogContent>
            <OperationsProductionMaintenanceEditForm
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
            history.push(`/operations/maintenances/productionmaintenances`),
          ]}
        >
          <DialogContent>
            <OperationsProductionMaintenanceDelete
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
            history.push(`/operations/maintenances/productionmaintenances`),
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
            history.push(`/operations/maintenances/productionmaintenances`),
          ]}
        ></Dialog>
      </>
    );
  };

  renderDataList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 60 },
      { field: "serviceOutlet", headerName: "Service Outlet", width: 150 },
      { field: "refNumber", headerName: "Reference Number", width: 150 },
      { field: "label", headerName: "Label", width: 150 },
      { field: "status", headerName: "Status", width: 150 },
      { field: "operation", headerName: "Operation", width: 200 },

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
                  `/operations/maintenances/productionmaintenances/edit/${params.id}`
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
                  `/operations/maintenances/productionmaintenances/delete/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.operationProductionMaintenances.map(
      (operationProductionMaintenance) => {
        let row = {
          numbering: ++counter,
          id: operationProductionMaintenance.id,
          refNumber: operationProductionMaintenance.refNumber,
          label: operationProductionMaintenance.label,
          serviceOutlet: operationProductionMaintenance.serviceOutlet,
          status: operationProductionMaintenance.status,
          maintenanceType: operationProductionMaintenance.maintenanceType,
          description: operationProductionMaintenance.description,
          comment: operationProductionMaintenance.comment,
          operation: operationProductionMaintenance.operation,
          maintenanceDate: operationProductionMaintenance.maintenanceDate,
          output: operationProductionMaintenance.output,
          extraMaintenanceCost:
            operationProductionMaintenance.extraMaintenanceCost,
          extraMaintenanceCostCurrency:
            operationProductionMaintenance.extraMaintenanceCostCurrency,
          dateLastModified: operationProductionMaintenance.dateLastModified,
          processingType: operationProductionMaintenance.processingType,
          process: operationProductionMaintenance.process,
          inventoryType: operationProductionMaintenance.inventoryType,
          inventory: operationProductionMaintenance.inventory,
          availableInventoryQuantity:
            operationProductionMaintenance.availableInventoryQuantity,
          availableInventoryUnit:
            operationProductionMaintenance.availableInventoryUnit,
          inventoryCostPerUnit:
            operationProductionMaintenance.inventoryCostPerUnit,
          inventoryQuantityAllocated:
            operationProductionMaintenance.inventoryQuantityAllocated,
          inventoryUnitCostCurrency:
            operationProductionMaintenance.inventoryUnitCostCurrency,
          allocatedInventoryUnit:
            operationProductionMaintenance.allocatedInventoryUnit,
          inventoryUnitCostCurrency:
            operationProductionMaintenance.inventoryUnitCostCurrency,
          processorType: operationProductionMaintenance.processorType,
          processor: operationProductionMaintenance.processor,
          supervisor: operationProductionMaintenance.supervisor,
        };
        rows.push(row);
      }
    );
    return <DataGridContainer columns={columns} rows={rows} />;
  };

  render() {
    return (
      <>
        {this.renderDeleteDialogForm()}
        {this.renderEditDialogForm()}
        {this.renderDataList()}
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
    operationProductionMaintenances: Object.values(
      state.operationProductionMaintenance
    ),
  };
};

export default connect(mapStateToProps, {
  fetchOperationProductionMaintenances,
})(OperationsProductionMaintenanceList);
