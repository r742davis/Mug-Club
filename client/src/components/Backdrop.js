import React from "react";
import classes from "../css/Backdrop.module.css";

// Redux imports
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
const actions = { closeModal };

const Backdrop = props =>
  props.modalOpen && <div className={classes.Backdrop} onClick={() => props.closeModal()}></div>;

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen
});

export default connect(mapStateToProps, actions)(Backdrop);
