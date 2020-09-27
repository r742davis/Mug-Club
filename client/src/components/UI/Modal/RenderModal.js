import React from "react";
import EditCustomer from "../../Customers/EditCustomer/EditCustomer";
import NewCustomer from "../../Customers/NewCustomer/NewCustomer";
import EditBeer from "../../Beers/EditBeer/EditBeer";
import NewBeer from "../../Beers/NewBeer/NewBeer";

import { connect } from "react-redux";
import PropTypes from "prop-types";

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
    default:
      return <></>;
  }
};

RenderModal.propTypes = {
  modalType: PropTypes.string,
};

const mapStateToProps = ({ modal: { modalType } }) => ({
  modalType: modalType,
});

export default connect(mapStateToProps)(RenderModal);
