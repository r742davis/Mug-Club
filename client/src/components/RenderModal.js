import React, { Component } from "react";
import { connect } from "react-redux";
import EditCustomer from "./EditCustomer";
import NewCustomer from "./NewCustomer";

class RenderModal extends Component {
  render() {
    let renderedModal = this.props.modalType;
    switch (renderedModal) {
      case "EDIT_CUSTOMER":
        return <EditCustomer />;
        break;
      case "NEW_CUSTOMER":
        console.log("New Customer");
        return <NewCustomer />
        break;
      case "EDIT_BEER":
        console.log("Edit Beer");
        return <></>;
        break;
      case "NEW_BEER":
        console.log("New Beer");
        return <></>;
        break;
      case "BEER_LIST":
        console.log("Beer List");
        return <></>;
        break;
      default:
        return <></>;
        break;
    }
  }
}

const mapStateToProps = state => ({
  modalType: state.modal.modalType
});

export default connect(mapStateToProps)(RenderModal);
