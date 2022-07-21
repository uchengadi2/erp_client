import React from "react";
import { connect } from "react-redux";
import { fetchCity, editCity } from "../../../../actions";
import CityEditForm from "./CityEditForm";

class CityEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCity(this.props.params.id, this.props.token);
  }

  onSubmit = (formValues) => {
    this.props.editCity(this.props.params.id, formValues, this.props.token);
    this.props.handleEditDialogOpenStatus();
  };

  render() {
    return (
      <>
        <CityEditForm
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
  return { city: state.city[ownProps.params.id] };
};

export default connect(mapStateToProps, { fetchCity, editCity })(CityEdit);
