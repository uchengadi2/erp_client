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
import { fetchHrDesignations } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";

import HrUtilityDesignationDelete from "./HrUtilityDesignationDelete";
import HrUtilityDesignationEditForm from "./HrUtilityDesignationEditForm";

class HrUtilityDesignationList extends React.Component {
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
    this.props.fetchHrDesignations(this.props.token);
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
            history.push("/hr/utilities/designations"),
          ]}
        >
          <DialogContent>
            <HrUtilityDesignationEditForm
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
            history.push(`/hr/utilities/designations`),
          ]}
        >
          <DialogContent>
            <HrUtilityDesignationDelete
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
            history.push(`/hr/utilities/designations`),
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
            history.push(`/hr/utilities/designations`),
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
      { field: "code", headerName: "Transaction Code", width: 150 },
      { field: "name", headerName: "Transaction Name", width: 200 },

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
                history.push(`/hr/utilities/designations/edit/${params.id}`),
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
                history.push(`/hr/utilities/designations/delete/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.hrDesignations.map((hrDesignation) => {
      let row = {
        numbering: ++counter,
        id: hrDesignation.id,
        code: hrDesignation.code,
        name: hrDesignation.name,
        description: hrDesignation.description,
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
  return { hrDesignations: Object.values(state.hrDesignation) };
};

export default connect(mapStateToProps, { fetchHrDesignations })(
  HrUtilityDesignationList
);
