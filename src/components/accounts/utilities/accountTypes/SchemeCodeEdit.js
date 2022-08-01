import React from "react";
import { connect } from "react-redux";
import { fetchSchemeCode, editSchemeCode } from "../../../../actions";
import SchemeCodeEditForm from "./SchemeCodeEditForm";

class SchemeCodeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSchemeCode(this.props.params.id, this.props.token);
  }

  onSubmit = (formValues) => {
    this.props.editSchemeCode(
      this.props.params.id,
      formValues,
      this.props.token
    );

    this.props.handleEditDialogOpenStatus();
  };

  render() {
    return (
      <>
        <SchemeCodeEditForm
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
  return { schemeCode: state.schemeCode[ownProps.params.id] };
};

export default connect(mapStateToProps, {
  fetchSchemeCode,
  editSchemeCode,
})(SchemeCodeEdit);
