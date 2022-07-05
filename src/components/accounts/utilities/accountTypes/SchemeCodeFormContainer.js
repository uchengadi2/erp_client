import React from "react";
import { connect } from "react-redux";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

import { createSchemeCode } from "./../../../../../src/actions";
import SchemeForm from "./SchemeCodeForm";

class SchemeCodeFormContainer extends React.Component {
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
    this.props.createSchemeCode(formValues, this.props.token);
    this.props.handleDialogOpenStatus();

    //console.log("the form values areeeee:", formValues);
  };
  render() {
    return (
      <Box>
        <SchemeForm onSubmit={this.onSubmit} userId={this.props.userId} />
      </Box>
    );
  }
}

// CategoryFormContainer.propTypes = {
//   setToken: PropTypes.func.isRequired,
// };

// const mapStateToProps = (state) => {
//   //return { token: state.auth.token };
//   return null;
// };

export default connect(null, { createSchemeCode })(SchemeCodeFormContainer);
