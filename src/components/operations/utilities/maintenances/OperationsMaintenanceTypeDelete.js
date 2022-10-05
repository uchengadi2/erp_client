import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import {
  fetchOperationMaintenanceType,
  deleteOperationMaintenanceType,
} from "../../../../actions";

class OperationsMaintenanceTypeDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteOperationMaintenanceType(
        this.props.id,
        this.props.token
      );
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/operations/utilities/maintenancetypes");
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
          <AlertTitle>Delete Operation Maintenance Type?</AlertTitle>
          Are you sure you want to delete this maintenance type?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    operationMaintenanceType:
      state.operationMaintenanceType[ownProps.params.id],
  };
};

export default connect(null, {
  fetchOperationMaintenanceType,
  deleteOperationMaintenanceType,
})(OperationsMaintenanceTypeDelete);
