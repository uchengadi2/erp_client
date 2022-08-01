import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import { createCurrency } from "./../../../../../src/actions";
import AccountUtilityCurrencyForm from "./AccountUtilityCurrencyForm";

class AccountUtilityCurrencyTypeContainerForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }
  componentDidMount() {
    console.log(" the props are:", this.props);
  }

  handleDialogOpenStatus = () => {
    this.setState({
      open: true,
    });
  };

  onSubmit = (formValues) => {
    this.props.createCurrency(formValues, this.props.token);
    this.props.handleDialogOpenStatus();
  };
  render() {
    return (
      <Box>
        <AccountUtilityCurrencyForm
          onSubmit={this.onSubmit}
          userId={this.props.userId}
          token={this.props.token}
        />
      </Box>
    );
  }
}

export default connect(null, { createCurrency })(
  AccountUtilityCurrencyTypeContainerForm
);
