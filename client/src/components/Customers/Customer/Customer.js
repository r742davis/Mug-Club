import React from "react";
import classes from "../../../css/Customer.module.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Delete from "../../UI/Icons/Delete/Delete";
import Edit from "../../UI/Icons/Edit/Edit";

const customer = ({
  completed,
  name,
  clubId,
  beers,
  openModal,
  deleteCustomer,
  modalOpen,
  calculateCompletedBeers,
}) => (
  <div className={classes.CustomerCard}>
    <div
      className={
        completed
          ? `${classes.TitleContainer} ${classes.Completed}`
          : classes.TitleContainer
      }
    >
      <h1 className={classes.CustomerTitle}>
        {name.first} {name.last}
        {completed ? (
          <div className={classes.CheckIcon}>
            <FontAwesomeIcon icon={faCheckCircle} />
          </div>
        ) : null}
      </h1>
      <h2 className={classes.CustomerDetails}>Mug Club #{clubId}</h2>
    </div>
    <span className={classes.Span}>
      <h2 className={classes.CustomerDetails}>
        Beers Completed: {calculateCompletedBeers(beers)} / {beers.length}
      </h2>
    </span>
    <span className={classes.ButtonContainer}>
      <Edit edit={openModal} />
      <Delete delete={deleteCustomer} />
    </span>
  </div>
);

const mapStateToProps = ({ modal: { modalOpen } }) => ({
  modalOpen: modalOpen,
});

export default connect(mapStateToProps)(customer);
