import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import { fetchGlHeads, deleteGlHead } from "../../../../actions";

class AccountUtilityGLHeadDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteGlHead(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/accounts/utilities/glheads");
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
          <AlertTitle>Delete Gl Head?</AlertTitle>
          Are you sure you want to delete this gl head?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { glHead: state.glHead[ownProps.params.id] };
};

export default connect(null, { fetchGlHeads, deleteGlHead })(
  AccountUtilityGLHeadDelete
);
