import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import classes from "./styles/Modals.module.css";

// Redux Imports
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
const actions = { closeModal };

class NewCustomer extends Component {
  render() {
    return (
      <>
        <section className={classes.ModalContainer}>
          <Grow in={true}>
            <div className={classes.Modal}>
              <h2 className={classes.ModalTitle}>Add New Customer</h2>
              <form
                className={classes.ModalForm}
                onSubmit={e => this.props.handleSubmit(e)}
              >
                <div className={classes.Group}>
                  <input
                    type="text"
                    name="firstName"
                    className={classes.Input}
                    value={this.props.firstName}
                    onChange={this.props.handleInputChange}
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
                    value={this.props.lastName}
                    onChange={this.props.handleInputChange}
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
                    value={this.props.clubId}
                    onChange={this.props.handleInputChange}
                    required
                  />
                  <span className={classes.Bar}></span>
                  <label htmlFor="clubId" className={classes.Label}>
                    Mug Club ID
                  </label>
                </div>
                <button type="submit" className={classes.EditButton}>
                  Create New Customer
                </button>
                <button
                  type="button"
                  onClick={() => this.props.closeModal()}
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
  }
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps, actions)(NewCustomer);
