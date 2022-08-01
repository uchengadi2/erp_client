import React from "react";
import { connect } from "react-redux";
import { fetchCurrency, editCurrency } from "../../../../actions";

import AccountUtilityCurrencyTypeEditForm from "./AccountUtilityCurrencyTypeEditForm";

class AccountUtilityCurrencyTypeEdit extends React.Component {
  componentDidMount() {
    this.props.fetchCurrency(this.props.params.id, this.props.token);
  }

  onSubmit = (formValues) => {
    this.props.editCurrency(this.props.params.id, formValues, this.props.token);

    this.props.handleEditDialogOpenStatus();
  };

  render() {
    return (
      <>
        <AccountUtilityCurrencyTypeEditForm
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
  return { currency: state.currency[ownProps.params.id] };
};

export default connect(mapStateToProps, {
  fetchCurrency,
  editCurrency,
})(AccountUtilityCurrencyTypeEdit);
