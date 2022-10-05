import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import {
  fetchOperationProductionQualityAssurance,
  deleteOperationProductionQualityAssurance,
} from "../../../../actions";

class OperationsProductionQualityAssuranceDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteOperationProductionQualityAssurance(
        this.props.id,
        this.props.token
      );
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/operations/qualityassurances/productionqualityassurances");
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
          <AlertTitle>Delete Quality Assurance?</AlertTitle>
          Are you sure you want to delete this quality assurance?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    operationQualityAssurance:
      state.operationQualityAssurance[ownProps.params.id],
  };
};

export default connect(null, {
  fetchOperationProductionQualityAssurance,
  deleteOperationProductionQualityAssurance,
})(OperationsProductionQualityAssuranceDelete);
