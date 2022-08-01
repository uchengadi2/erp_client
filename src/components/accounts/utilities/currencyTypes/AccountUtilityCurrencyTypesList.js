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
import { fetchCurrencies } from "../../../../actions";
import DataGridContainer from "../../../DataGridContainer";
import AccountUtilityCurrencyTypeContainerForm from "./AccountUtilityCurrencyTypeContainerForm";
import AccountUtilityCurrencyTypeDelete from "./AccountUtilityCurrencyTypeDelete";
import AccountUtilityCurrencyTypeEdit from "./AccountUtilityCurrencyTypeEdit";
import AccountUtilityCurrencyTypeEditForm from "./AccountUtilityCurrencyTypeEditForm";

class AccountUtilityCurrencyTypesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editOpen: false,
      deleteOpen: false,
      cancelOpen: false,
      assignOpen: false,
      alert: {
        open: false,
        message: "",
        backgroundColor: "",
      },
      id: null,
      params: {},
    };
  }
  componentDidMount() {
    this.props.fetchCurrencies(this.props.token);
  }

  handleDialogOpenStatus = () => {
    this.setState({ deleteOpen: false });
  };

  handleEditDialogOpenStatus = () => {
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

  handleSuccessfulFailedSnackbar = (message) => {
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
            history.push("/accounts/utilities/currencytypes"),
          ]}
        >
          <DialogContent>
            {/* <AccountUtilityCurrencyTypeEdit
              token={this.props.token}
              userId={this.props.userId}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
            /> */}
            <AccountUtilityCurrencyTypeEditForm
              token={this.props.token}
              userId={this.props.userId}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
              handleSuccessfulEditSnackbar={this.handleSuccessfulEditSnackbar}
              handleSuccessfulFailedSnackbar={
                this.handleSuccessfulFailedSnackbar
              }
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
            history.push(`/accounts/utilities/currencytypes`),
          ]}
        >
          <DialogContent>
            <AccountUtilityCurrencyTypeDelete
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
            history.push(`/accounts/utilities/currencytypes`),
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
            history.push(`/accounts/utilities/currencytypes`),
          ]}
        >
          <DialogContent>
            <AccountUtilityCurrencyTypeContainerForm
              token={this.props.token}
              userId={this.props.token}
              params={this.state.params}
              handleEditDialogOpenStatus={this.handleEditDialogOpenStatus}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  };

  renderCurrenciesList = () => {
    let rows = [];
    let counter = 0;
    const columns = [
      { field: "numbering", headerName: "S/n", width: 60 },
      { field: "name", headerName: "Name", width: 150 },
      { field: "code", headerName: "Currency Code", width: 150 },
      { field: "country", headerName: "Country", width: 150 },

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
                  `/accounts/utilities/currencytypes/edit/${params.id}`
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
                  `/accounts/utilities/currencytypes/delete/${params.id}`
                ),
              ]}
            />
          </strong>
        ),
      },
    ];
    this.props.currencies.map((currency) => {
      let row = {
        numbering: ++counter,
        id: currency.id,
        name: currency.name,
        code: currency.code,
        symbol: currency.symbol,
        description: currency.description,
        country: currency.country,
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
        {this.renderCurrenciesList()}
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
  return { currencies: Object.values(state.currency) };
};

export default connect(mapStateToProps, { fetchCurrencies })(
  AccountUtilityCurrencyTypesList
);
