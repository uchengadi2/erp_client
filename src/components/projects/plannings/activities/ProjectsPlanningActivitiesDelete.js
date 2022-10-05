import React from "react";
import { connect } from "react-redux";
import { Alert, AlertTitle } from "@material-ui/lab";
import Button from "@material-ui/core/Button";
import history from "../../../../history";
import {
  fetchProjectPlanningActivity,
  deleteProjectPlanningActivity,
} from "../../../../actions";

class ProjectsPlanningActivitiesDelete extends React.Component {
  componentDidMount() {
    // console.log("the item id is:", this.props.id);
    // console.log("the token is:", this.props.token);
  }

  render() {
    const handleDelete = () => {
      this.props.deleteProjectPlanningActivity(this.props.id, this.props.token);
      this.props.handleDialogOpenStatus();
    };

    const handleNoDelete = () => {
      this.props.handleDialogOpenStatus();
      history.push("/projects/plannings/activities");
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
          <AlertTitle>Delete Project Activity?</AlertTitle>
          Are you sure you want to delete this project activity?
        </Alert>
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { projectActivity: state.projectActivity[ownProps.params.id] };
};

export default connect(null, {
  fetchProjectPlanningActivity,
  deleteProjectPlanningActivity,
})(ProjectsPlanningActivitiesDelete);
