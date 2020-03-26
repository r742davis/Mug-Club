import React from "react";
import classes from "./styles/Backdrop.module.css";

// Redux imports
import { connect } from "react-redux";

const backdrop = props =>
  props.modalOpen ? (
    <div className={classes.Backdrop} onClick={props.closeModal}></div>
  ) : null;

const mapStateToProps = state => ({
  modalOpen: state.modal.modalOpen
})

export default connect(mapStateToProps)(backdrop);
