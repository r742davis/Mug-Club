import React from "react";
import Grow from "@material-ui/core/Grow";
import classes from "./styles/Modals.module.css";

const NewCustomer = props => {
  return (
    <>
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>Add New Customer</h2>
            <form
              className={classes.ModalForm}
              onSubmit={props.handleNewCustomerSubmit}
              method="POST"
            >
              <div className={classes.Group}>
                <input
                  type="text"
                  name="firstName"
                  className={classes.Input}
                  value={props.firstName}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="firstName" className={classes.Label}>
                  First Name
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="lastName"
                  className={classes.Input}
                  value={props.lastName}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="lastName" className={classes.Label}>
                  Last Name
                </label>
              </div>
              <div className={classes.Group}>
                <input
                  type="text"
                  name="clubId"
                  className={classes.Input}
                  value={props.clubId}
                  onChange={props.handleInputChange}
                  required
                />
                <span className={classes.Bar}></span>
                <label htmlFor="clubId" className={classes.Label}>
                  Mug Club ID
                </label>
              </div>
              <button
                type="submit"
                onClick={props.handleNewCustomerSubmit}
                className={classes.EditButton}
              >
                Create New Customer
              </button>
              <button
                type="button"
                onClick={props.toggleNewCustomerModal}
                className={classes.CancelButton}
              >
                Cancel
              </button>
            </form>
          </div>
        </Grow>
      </section>
    </>
  );
};

export default NewCustomer;
