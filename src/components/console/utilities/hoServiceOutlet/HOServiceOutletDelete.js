import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  fetchHoServiceOutlet,
  deleteHoServiceOutlet,
} from "../../../../actions";

class HOServiceOutletDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteHoServiceOutlet(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/systems/utilities/hoserviceoutlet");
    };
    return (
      <>
        {/* <Alert onClose={() => {}}>This is a success alert — check it out!</Alert> */}

        <Alert
          severity="warning"
          action={[
            <Button
              variant="contained"
              color="inherit"
              size="small"
              onClick={handleDelete}
            >
              Yes
            </Button>,
            <Button
              variant="contained"
              color="inherit"
              size="small"
              onClick={handleNoDelete}
              style={{ marginLeft: 10 }}
            >
              No
            </Button>,
          ]}
        >
          <AlertTitle>Delete Location?</AlertTitle>
          Are you sure you want to delete this Headoffice Service Outlet?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { location: state.location[ownProps.params.id] };
};

export default connect(null, { fetchHoServiceOutlet, deleteHoServiceOutlet })(
  HOServiceOutletDelete
);
