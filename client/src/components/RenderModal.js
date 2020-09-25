import React from "react";
import EditCustomer from "./EditCustomer";
import NewCustomer from "./NewCustomer";
import EditBeer from "./EditBeer";
import NewBeer from "./NewBeer";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
const mapStateToProps = ({ modal: { modalType } }) => ({
  modalType: modalType,
});

const RenderModal = (props) => {
  let renderedModal = props.modalType;
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
};

RenderModal.propTypes = {
  modalType: PropTypes.string,
};

export default connect(mapStateToProps)(RenderModal);
