import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import {
  fetchQualityAssuranceType,
  deleteQualityAssuranceType,
} from "../../../../actions";

class OperationsQualityAssuranceTypeDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteQualityAssuranceType(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/operations/utilities/qualityassurancetypes");
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
          <AlertTitle>Delete Quality Assurance Type?</AlertTitle>
          Are you sure you want to delete this quality assurance type?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    qualityAssuranceType: state.qualityAssuranceType[ownProps.params.id],
  };
};

export default connect(null, {
  fetchQualityAssuranceType,
  deleteQualityAssuranceType,
})(OperationsQualityAssuranceTypeDelete);
