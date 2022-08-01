import React from "react";
import { connect } from "react-redux";
import { createServiceOutlet } from "../../../../actions";

import ServiceOutletForm from "./ServiceOutletForm";

class ServiceOutletFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}

  onSubmit = (formValues) => {
    this.props.createServiceOutlet(formValues, this.props.token);
    this.props.handleDialogOpenStatus();
  };
  render() {
    return (
      <div>
        <ServiceOutletForm
          onSubmit={this.onSubmit}
          userId={this.props.userId}
          token={this.props.token}
        />
      </div>
    );
  }
}

export default connect(null, { createServiceOutlet })(
  ServiceOutletFormContainer
);
