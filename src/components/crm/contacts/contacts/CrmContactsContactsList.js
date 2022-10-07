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
import { fetchContacts } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";

import CrmContactsContactsDelete from "./CrmContactsContactsDelete";
import CrmContactsContactsEditForm from "./CrmContactsContactsEditForm";

class CrmContactsContactsList extends React.Component {
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
    this.props.fetchContacts(this.props.token);
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
            history.push("/crm/contacts/contacts"),
          ]}
        >
          <DialogContent>
            <CrmContactsContactsEditForm
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
            history.push(`/crm/contacts/contacts`),
          ]}
        >
          <DialogContent>
            <CrmContactsContactsDelete
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
            history.push(`/crm/contacts/contacts`),
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
            history.push(`/crm/contacts/contacts`),
          ]}
        ></Dialog>
      </>
    );
  };

  renderDataList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 100 },
      {
        field: "contactRefNumber",
        headerName: "Contact Information Number",
        width: 180,
      },
      { field: "name", headerName: "Name", width: 180 },
      { field: "titles", headerName: "Titles", width: 180 },
      {
        field: "placeOfEmployment",
        headerName: "Place of Employmet",
        width: 150,
      },
      { field: "gender", headerName: "Gender", width: 150 },

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
                history.push(`/crm/contacts/contacts/edit/${params.id}`),
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
                history.push(`/crm/contacts/contacts/delete/${params.id}`),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.crmContacts.map((crmContact) => {
      let row = {
        numbering: ++counter,
        id: crmContact.id,
        titles: crmContact.titles,
        contactRefNumber: crmContact.contactRefNumber,
        name: crmContact.name,
        officeAddress: crmContact.officeAddress,
        homeAddress: crmContact.homeAddress,
        facebookProfile: crmContact.facebookProfile,
        twitterProfile: crmContact.twitterProfile,
        linkedInProfile: crmContact.linkedInProfile,
        occupation: crmContact.occupation,
        placeOfEmployment: crmContact.placeOfEmployment,
        officeDesignation: crmContact.officeDesignation,
        emailAddresses: crmContact.emailAddresses,
        phoneNumbers: crmContact.phoneNumbers,
        hobby: crmContact.hobby,
        placesOfInterest: crmContact.placesOfInterest,
        clubMemberships: crmContact.clubMemberships,
        religion: crmContact.religion,
        gender: crmContact.gender,
        highestEducationLevel: crmContact.highestEducationLevel,
        birthday: crmContact.birthday,
        placeOfOrigin: crmContact.placeOfOrigin,
        politicalPartyAffiliation: crmContact.politicalPartyAffiliation,
        maritalStatus: crmContact.maritalStatus,
        comment: crmContact.comment,
        marriageAnniversary: crmContact.marriageAnniversary,
        memo: crmContact.memo,
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
  return { crmContacts: Object.values(state.crmContact) };
};

export default connect(mapStateToProps, { fetchContacts })(
  CrmContactsContactsList
);
