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
import { fetchAssetStoreSpaceAllocations } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";

import AssetStoreAllocationStoreSpaceDelete from "./AssetStoreAllocationStoreSpaceDelete";
import AssetStoreAllocationStoreSpaceEditForm from "./AssetStoreAllocationStoreSpaceEditForm";

class AssetStoreAllocateStoreSpaceList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      deleteOpen: false,
      cancelOpen: false,
      assignOpen: false,
      id: null,
      storeId: null,
      storeAllocatedSpace: null,

      params: {},
      alert: {
        open: false,
        message: "",
        backgroundColor: "",
      },
    };
  }
  componentDidMount() {
    this.props.fetchAssetStoreSpaceAllocations(this.props.token);
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
            history.push("/assets/stores/spaceallocations"),
          ]}
        >
          <DialogContent>
            <AssetStoreAllocationStoreSpaceEditForm
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
            history.push(`/assets/stores/spaceallocations`),
          ]}
        >
          <DialogContent>
            <AssetStoreAllocationStoreSpaceDelete
              token={this.props.token}
              userId={this.props.userId}
              id={this.state.id}
              storeId={this.state.storeId}
              storeAllocatedSpace={this.state.storeAllocatedSpace}
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
            history.push(`/assets/stores/spaceallocations`),
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
            history.push(`/assets/stores/spaceallocations`),
          ]}
        ></Dialog>
      </>
    );
  };

  renderAssetStoreSpaceAllocationList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 60 },
      {
        field: "serviceOutlet",
        headerName: "Owner Service Outlet",
        width: 150,
      },
      { field: "store", headerName: "Store", width: 200 },
      { field: "storeType", headerName: "Store Type", width: 200 },
      { field: "spaceAllocated", headerName: "Space Allocated", width: 200 },
      {
        field: "beneficiaryServiceOutlet",
        headerName: "Allocation Beneficiary",
        width: 200,
      },
      { field: "dateAllocated", headerName: "Allocation Date", width: 200 },
      { field: "allocationCost", headerName: "Allocation Cost", width: 200 },

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
                  `/assets/stores/spaceallocations/edit/${params.id}`
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
            {/* {console.log("inside list params:", params)} */}
            <DeleteRoundedIcon
              style={{ color: "red" }}
              onClick={() => [
                this.setState({
                  deleteOpen: true,
                  id: params.id,
                  storeId: params.row.store,
                  storeAllocatedSpace: params.row.spaceAllocated,
                }),
                history.push(
                  `/assets/stores/spaceallocations/delete/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.assetStoreSpaceAllocations.map((assetStoreSpaceAllocation) => {
      let row = {
        numbering: ++counter,
        id: assetStoreSpaceAllocation.id,
        serviceOutlet: assetStoreSpaceAllocation.serviceOutlet,
        storeType: assetStoreSpaceAllocation.storeType,
        store: assetStoreSpaceAllocation.store,
        beneficiaryServiceOutlet:
          assetStoreSpaceAllocation.beneficiaryServiceOutlet,
        allocationCost: assetStoreSpaceAllocation.allocationCost,
        dateAllocated: assetStoreSpaceAllocation.dateAllocated,
        spaceAllocated: assetStoreSpaceAllocation.spaceAllocated,
        allocationCommencementDate:
          assetStoreSpaceAllocation.allocationCommencementDate,
        allocationEndDate: assetStoreSpaceAllocation.allocationEndDate,
        description: assetStoreSpaceAllocation.description,
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
        {this.renderAssetStoreSpaceAllocationList()}
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
    assetStoreSpaceAllocations: Object.values(state.assetStoreSpaceAllocation),
  };
};

export default connect(mapStateToProps, { fetchAssetStoreSpaceAllocations })(
  AssetStoreAllocateStoreSpaceList
);
