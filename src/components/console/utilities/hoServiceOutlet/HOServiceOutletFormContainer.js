import React from "react";
import { connect } from "react-redux";
import { createHoServiceOutlet } from "../../../../actions";

import HOServiceOutletForm from "./HOServiceOutletForm";

class HOServiceOutletFormContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {}

  onSubmit = (formValues) => {
    this.props.createHoServiceOutlet(formValues, this.props.token);
    this.props.handleDialogOpenStatus();
  };
  render() {
    return (
      <div>
        <HOServiceOutletForm
          onSubmit={this.onSubmit}
          userId={this.props.userId}
          token={this.props.token}
        />
      </div>
    );
  }
}

export default connect(null, { createHoServiceOutlet })(
  HOServiceOutletFormContainer
);
