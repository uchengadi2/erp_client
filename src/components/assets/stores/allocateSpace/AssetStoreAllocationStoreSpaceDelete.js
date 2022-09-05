import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import {
  fetchAssetStoreSpaceAllocation,
  deleteAssetStoreSpaceAllocation,
} from "../../../../actions";

class AssetStoreAllocationStoreSpaceDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      if (this.props.spaceAllocated) {
        this.props.deleteAssetStoreSpaceAllocation(
          this.props.id,
          this.props.token
        );
        this.props.handleDialogOpenStatus();
        history.push("/assets/stores/spaceallocations");
      } else {
        console.log("cant delete an allocation with space allocation");
        this.props.handleDialogOpenStatus();
        history.push("/assets/stores/spaceallocations");
      }
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/assets/stores/spaceallocations");
      console.log("store props:", this.props);
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
          <AlertTitle>Delete Store Space Allocation?</AlertTitle>
          Are you sure you want to delete this Store Space Allocation?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    assetStoreAllocation: state.assetStoreAllocation[ownProps.params.id],
  };
};

export default connect(null, {
  fetchAssetStoreSpaceAllocation,
  deleteAssetStoreSpaceAllocation,
})(AssetStoreAllocationStoreSpaceDelete);
