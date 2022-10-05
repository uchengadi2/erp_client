import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import { fetchFinishingType, deleteFinishingType } from "../../../../actions";

class OperationsFinishingTypeDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteFinishingType(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/operations/utilities/finishingtypes");
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
          <AlertTitle>Delete Finishing Type?</AlertTitle>
          Are you sure you want to delete this finishing type?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { transformationType: state.transformationType[ownProps.params.id] };
};

export default connect(null, {
  fetchFinishingType,
  deleteFinishingType,
})(OperationsFinishingTypeDelete);
