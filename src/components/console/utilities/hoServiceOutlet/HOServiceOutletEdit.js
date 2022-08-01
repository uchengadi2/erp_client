import React from "react";
import { connect } from "react-redux";
import { fetchHoServiceOutlet, editHoServiceOutlet } from "../../../../actions";
import HOServiceOutletEditForm from "./HOServiceOutletEditForm";

class HOServiceOutletEdit extends React.Component {
  componentDidMount() {
    this.props.fetchHoServiceOutlet(this.props.params.id, this.props.token);
  }

  onSubmit = (formValues) => {
    this.props.editHoServiceOutlet(
      this.props.params.id,
      formValues,
      this.props.token
    );

    this.props.handleEditDialogOpenStatus();
  };

  render() {
    return (
      <>
        <HOServiceOutletEditForm
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

export default connect(mapStateToProps, {
  fetchHoServiceOutlet,
  editHoServiceOutlet,
})(HOServiceOutletEdit);
