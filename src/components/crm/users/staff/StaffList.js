import React from "react";
import { connect } from "react-redux";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import EditRoundedIcon from "@material-ui/icons/EditRounded";
import DeleteRoundedIcon from "@material-ui/icons/DeleteRounded";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import Typography from "@material-ui/core/Typography";
import history from "../../../../history";
import { fetchUsers } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";

class StaffList extends React.Component {
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
    this.props.fetchUsers(this.props.token);
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
          //style={{ zIndex: 1302 }}
          open={this.state.editOpen}
          onClose={() => [
            this.setState({ editOpen: false }),
            history.push("/crm/users/staffers"),
          ]}
        >
          <DialogContent>
            {/* <CityEdit
              token={this.props.token}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
            /> */}
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
            history.push(`/crm/users/staffers`),
          ]}
        >
          <DialogContent>
            {/* <CityDelete
              token={this.props.token}
              id={this.state.id}
              handleDialogOpenStatus={this.handleDialogOpenStatus}
            /> */}
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
            history.push(`/crm/users/staffers`),
          ]}
        >
          <DialogContent>
            <Typography>This is the blacklist dialog</Typography>
          </DialogContent>
        </Dialog>
      </>
    );
  };
  renderCitiesList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 100 },
      { field: "name", headerName: "Name", width: 300 },
      { field: "email", headerName: "Email", width: 350 },
      { field: "role", headerName: "Role", width: 250 },
      { field: "userType", headerName: "User Type", width: 100 },
      { field: "serviceOutlet", headerName: "Service Outlet", width: 100 },
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
                history.push(`/crm/users/staffers/edit/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
      // {
      //   field: "blacklistaction",
      //   headerName: "",
      //   width: 30,
      //   description: "Blacklist city",
      //   renderCell: (params) => (
      //     <strong>
      //       {/* {params.value.getFullYear()} */}
      //       <CancelRoundedIcon
      //         style={{ color: "black" }}
      //         onClick={() => [
      //           this.setState({ blacklistOpen: true, id: params.id }),
      //           history.push(`/crm/users/staffers/blacklist/${params.id}`),
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
                history.push(`/crm/users/staffers/delete/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.users.map((user) => {
      let row = {
        numbering: ++counter,
        id: user._id,
        name: user.name,
        role: user.role,
        serviceOutlet: user.staffUserDetail.currentServiceOutlet,
        servedServiceOutlets: user.staffUserDetail.servedServiceOutlets,
        userType: user.userType,
        email: user.email,
        staffNumber: user.staffUserDetail.staffNumber,
        gender: user.staffUserDetail.gender,
        maritalStatus: user.staffUserDetail.maritalStatus,
        dateOfBirth: user.staffUserDetail.dateOfBirth,
        highestLevelOfEducationAttained:
          user.staffUserDetail.highestLevelOfEducationAttained,
        courseOfStudy: user.staffUserDetail.courseOfStudy,
        References: user.staffUserDetail.References,
        yearsOfExperience: user.staffUserDetail.yearsOfExperience,
        houseAddress: user.staffUserDetail.houseAddress,
        // nextOfKinName: user.staffUserDetail.nextOfKin.name || "",
        // nextOfKinAddress: user.staffUserDetail.nextOfKin.address || "",
        // nextOfKinRelationship:
        //   user.staffUserDetail.nextOfKin.relationship || "",
        // guarantorName: user.staffUserDetail.guarantor.name || "",
        // guarantorAddress: user.staffUserDetail.guarantor.address || "",
        // guarantorGender: user.staffUserDetail.guarantor.gender || "",
        // guarantorRelationship:
        //   user.staffUserDetail.guarantor.relationship || "",
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
        {this.renderCitiesList()}
        {this.renderBlackListDialogForm()}
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: Object.values(state.user) };
};

export default connect(mapStateToProps, { fetchUsers })(StaffList);
