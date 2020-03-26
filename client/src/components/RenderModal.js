import React, { Component } from "react";
import { connect } from "react-redux";
import EditCustomer from "./EditCustomer";

class RenderModal extends Component {
  render() {
    let renderedModal = this.props.modalType;
    switch (renderedModal) {
      case "EDIT_CUSTOMER":
        return <EditCustomer />;
        break;
      case "NEW_CUSTOMER":
        console.log(('New Customer'));
        break;
      default:
        return <></>
        break;
    }
  }
}

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

export default connect(mapStateToProps)(RenderModal);
