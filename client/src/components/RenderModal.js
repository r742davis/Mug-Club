import React, { Component } from "react";
import EditCustomer from "./EditCustomer";
import NewCustomer from "./NewCustomer";
import EditBeer from "./EditBeer";
import NewBeer from "./NewBeer";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
const mapStateToProps = (state) => ({
  modalType: state.modal.modalType,
});

class RenderModal extends Component {
  static propTypes = {
    modalType: PropTypes.string,
  };

  render() {
    let renderedModal = this.props.modalType;
    switch (renderedModal) {
      case "EDIT_CUSTOMER":
        return <EditCustomer />;
      case "NEW_CUSTOMER":
        return <NewCustomer />;
      case "EDIT_BEER":
        return <EditBeer />;
      case "NEW_BEER":
        return <NewBeer />;
      case "BEER_LIST":
        console.log("Beer List");
        return <></>;
      default:
        return <></>;
    }
  }
}

export default connect(mapStateToProps)(RenderModal);
