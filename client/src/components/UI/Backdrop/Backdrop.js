import React from "react";
import classes from "../../../css/Backdrop.module.css";

import { connect } from "react-redux";
import { closeModal, closeNav } from "../../../store/actions/index";

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

const mapDispatchToProps = { closeModal, closeNav };
const mapStateToProps = ({ modal: { modalOpen, navOpen } }) => ({
  modalOpen: modalOpen,
  navOpen: navOpen,
});

export default connect(mapStateToProps, mapDispatchToProps)(Backdrop);
