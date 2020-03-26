import React, { Component } from "react";
import EditCustomer from "./EditCustomer";
import NewCustomer from "./NewCustomer";
import EditBeer from "./EditBeer";
import NewBeer from "./NewBeer";

// Redux Imports
import { connect } from "react-redux";

class RenderModal extends Component {
  render() {
    let renderedModal = this.props.modalType;
    switch (renderedModal) {
      case "EDIT_CUSTOMER":
        return <EditCustomer />;
        break;
      case "NEW_CUSTOMER":
        return <NewCustomer />;
        break;
      case "EDIT_BEER":
        return <EditBeer />;
        break;
      case "NEW_BEER":
        return <NewBeer />;
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
