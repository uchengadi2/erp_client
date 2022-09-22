import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import {
  fetchAssetProcurement,
  deleteAssetProcurement,
} from "../../../../actions";

class AssetExecutedProcurementDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteAssetProcurement(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
      history.push("/assets/procurements/assetprocurements");
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/assets/procurements/assetprocurements");
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
          <AlertTitle>Delete Asset Procurement?</AlertTitle>
          Are you sure you want to delete this asset procurement?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    assetProcurements: state.assetAssetProcurements[ownProps.params.id],
  };
};

export default connect(null, { fetchAssetProcurement, deleteAssetProcurement })(
  AssetExecutedProcurementDelete
);
