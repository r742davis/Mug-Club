import React from "react";
import classes from "./Customer.module.css";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "../../UI/Icons/DeleteIcon/DeleteIcon";
import EditIcon from "../../UI/Icons/EditIcon/EditIcon";

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
      <EditIcon edit={openModal} />
      <DeleteIcon delete={deleteCustomer} />
    </span>
  </div>
);

const mapStateToProps = ({ modal: { modalOpen } }) => ({
  modalOpen: modalOpen,
});

export default connect(mapStateToProps)(customer);
