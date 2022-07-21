import React from "react";
import { connect } from "react-redux";
import { createLocation } from "../../../../actions";

import LocationForm from "./LocationForm";

class LocationFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}

  onSubmit = (formValues) => {
    this.props.createLocation(formValues, this.props.token);
    this.props.handleDialogOpenStatus();
  };
  render() {
    return (
      <div>
        <LocationForm onSubmit={this.onSubmit} userId={this.props.userId} />
      </div>
    );
  }
}

export default connect(null, { createLocation })(LocationFormContainer);
