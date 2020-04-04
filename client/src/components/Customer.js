import React from "react";
import classes from "../css/Customer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import DeleteIcon from "./DeleteIcon";
import EditIcon from "./EditIcon";

// Redux Imports
import { connect } from "react-redux";

const Customer = (props) => {
  return (
    <div className={classes.CustomerCard}>
      <div
        className={
          props.completed
            ? classes.CompletedTitleContainer
            : classes.IncompleteTitleContainer
        }
      >
        <h1 className={classes.CustomerTitle}>
          {props.name.first} {props.name.last}
          {props.completed ? (
            <div className={classes.CheckIcon}>
              <FontAwesomeIcon icon={faCheckCircle} />
            </div>
          ) : null}
        </h1>
        <h2 className={classes.CustomerDetails}>Mug Club #{props.clubId}</h2>
      </div>
      <span className={classes.Span}>
        <h2 className={classes.CustomerDetails}>
          Beers Completed: {props.calculateCompletedBeers(props.beers)} /{" "}
          {props.beers.length}
        </h2>
      </span>
      <span className={classes.ButtonContainer}>
        <EditIcon edit={props.openModal} />
        <DeleteIcon delete={props.deleteCustomer} />
      </span>
    </div>
  );
};

const mapStateToProps = (state) => ({
  modalOpen: state.modal.modalOpen,
});

export default connect(mapStateToProps)(Customer);
