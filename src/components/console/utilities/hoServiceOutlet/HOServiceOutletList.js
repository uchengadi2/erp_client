import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Typography from "@material-ui/core/Typography";
import history from "../../../../history";
import { fetchHoServiceOutlets } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";
import HOServiceOutletDelete from "./HOServiceOutletDelete";
import HOServiceOutletEdit from "./HOServiceOutletEdit";

class HOServiceOutletList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      deleteOpen: false,
      blacklistOpen: false,
      id: null,
      params: {},
    };
  }
  componentDidMount() {
    this.props.fetchHoServiceOutlets(this.props.token);
  }

  handleDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ deleteOpen: false });
  };

  handleEditDialogOpenStatus = () => {
    // history.push("/categories/new");
    this.setState({ editOpen: false });
  };

  renderEditDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          // style={{ zIndex: 1302 }}
          open={this.state.editOpen}
          onClose={() => [
            this.setState({ editOpen: false }),
            history.push("/systems/utilities/hoserviceoutlets"),
          ]}
        >
          <DialogContent>
            <HOServiceOutletEdit
              token={this.props.token}
              userId={this.props.userId}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
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
          // style={{ zIndex: 1302 }}
          open={this.state.deleteOpen}
          onClose={() => [
            this.setState({ deleteOpen: false }),
            history.push(`/systems/utilities/hoserviceoutlets`),
          ]}
        >
          <DialogContent>
            <HOServiceOutletDelete
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

  renderBlackListDialogForm = () => {
    //token will be used here
    return (
      <>
        <Dialog
          //style={{ zIndex: 1302 }}
          open={this.state.blacklistOpen}
          onClose={() => [
            this.setState({ blacklistOpen: false }),
            history.push(`/systems/utilities/hoserviceoutlets`),
          ]}
        >
          <DialogContent>
            <Typography>This is the blacklist dialog</Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  };
  renderProductList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 100 },
      { field: "name", headerName: "Service Outlet Name", width: 200 },
      { field: "solId", headerName: "SolId", width: 200 },
      { field: "address", headerName: "Address", width: 200 },
      { field: "city", headerName: "City", width: 200 },
      { field: "location", headerName: "Location", width: 200 },

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
                  `/systems/utilities/hoserviceoutlets/edit/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },
      // {
      //   field: "blacklistaction",
      //   headerName: "",
      //   width: 30,
      //   description: "Blacklist state",
      //   renderCell: (params) => (
      //     <strong>
      //       {/* {params.value.getFullYear()} */}
      //       <CancelRoundedIcon
      //         style={{ color: "black" }}
      //         onClick={() => [
      //           this.setState({ blacklistOpen: true, id: params.id }),
      //           history.push(
      //             `/systems/utilities/hoserviceoutlets/blacklist/${params.id}`
      //           ),
      //         ]}
      //       />
      //     </strong>
      //   ),
      // },
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
                  `/systems/utilities/hoserviceoutlets/delete/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.hoServiceOutlets.map((serviceOutlet) => {
      let row = {
        numbering: ++counter,
        id: serviceOutlet.id,
        name: serviceOutlet.name,
        solId: serviceOutlet.solId,
        description: serviceOutlet.description,
        address: serviceOutlet.address,
        city: serviceOutlet.city,
        location: serviceOutlet.location,
        isHeadofficeOutlet: serviceOutlet.isHeadofficeOutlet,
        createdBy: serviceOutlet.createdBy,
        dateCreated: serviceOutlet.dateCreated,
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
        {this.renderProductList()}
        {this.renderBlackListDialogForm()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("ho sol state:", state.hoServiceOutlet);
  return { hoServiceOutlets: Object.values(state.hoServiceOutlet) };
};

export default connect(mapStateToProps, { fetchHoServiceOutlets })(
  HOServiceOutletList
);
