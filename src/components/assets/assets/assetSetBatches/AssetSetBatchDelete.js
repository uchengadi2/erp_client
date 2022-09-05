import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import { fetchAssetSetBatch, deleteAssetSetBatch } from "../../../../actions";

class AssetSetBatchDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteAssetSetBatch(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
      history.push("/assets/assets/batches");
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/assets/assets/batches");
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
          <AlertTitle>Delete Asset Batch?</AlertTitle>
          Are you sure you want to delete this asset batch?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { assetSetBatch: state.assetSetBatch[ownProps.params.id] };
};

export default connect(null, { fetchAssetSetBatch, deleteAssetSetBatch })(
  AssetSetBatchDelete
);
