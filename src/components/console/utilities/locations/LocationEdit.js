import React from "react";
import { connect } from "react-redux";
import { fetchLocation, editLocation } from "../../../../actions";
import LocationEditForm from "./LocationEditForm";

class LocationEdit extends React.Component {
  componentDidMount() {
    this.props.fetchLocation(this.props.params.id, this.props.token);
  }

  onSubmit = (formValues) => {
    this.props.editLocation(this.props.params.id, formValues, this.props.token);

    this.props.handleEditDialogOpenStatus();
  };

  render() {
    console.log("data payload is:", this.props.location);
    return (
      <>
        <LocationEditForm
          token={this.props.token}
          userId={this.props.userId}
          params={this.props.params}
          handleEditDialogOpenStatus={this.props.handleEditDialogOpenStatus}
          onSubmit={this.onSubmit}
        />
      </>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { location: state.location[ownProps.params.id] };
};

export default connect(mapStateToProps, { fetchLocation, editLocation })(
  LocationEdit
);
