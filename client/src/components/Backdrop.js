import React from "react";
import classes from "../css/Backdrop.module.css";

// Redux imports
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { closeNav } from "../actions/navActions";
const actions = { closeModal, closeNav };
const mapStateToProps = (state) => ({
  modalOpen: state.modal.modalOpen,
  navOpen: state.modal.navOpen,
});

const Backdrop = (props) => (
  <>
    {props.modalOpen && (
      <div
        className={`${classes.Backdrop} ${classes.Modal}`}
        onClick={() => props.closeModal()}
      ></div>
    )}
    {props.navOpen && (
      <div
        className={`${classes.Backdrop} ${classes.Nav}`}
        onClick={() => props.closeNav()}
      ></div>
    )}
  </>
);

export default connect(mapStateToProps, actions)(Backdrop);
