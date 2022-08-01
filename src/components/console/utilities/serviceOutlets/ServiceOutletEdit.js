import React from "react";
import { connect } from "react-redux";
import { fetchServiceOutlet, editServiceOutlet } from "../../../../actions";
import ServiceOutletEditForm from "./ServiceOutletEditForm";

class ServiceOutletEdit extends React.Component {
  componentDidMount() {
    this.props.fetchServiceOutlet(this.props.params.id, this.props.token);
  }

  onSubmit = (formValues) => {
    this.props.editServiceOutlet(
      this.props.params.id,
      formValues,
      this.props.token
    );

    this.props.handleEditDialogOpenStatus();
  };

  render() {
    return (
      <>
        <ServiceOutletEditForm
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
  return { serviceOutlet: state.serviceOutlet[ownProps.params.id] };
};

export default connect(mapStateToProps, {
  fetchServiceOutlet,
  editServiceOutlet,
})(ServiceOutletEdit);
