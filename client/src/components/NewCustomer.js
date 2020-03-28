import React, { Component } from "react";
import Grow from "@material-ui/core/Grow";
import classes from "./styles/Modals.module.css";
import swal from "@sweetalert/with-react";

// Redux Imports
import { connect } from "react-redux";
import { closeModal } from "../actions/modalActions";
import { createCustomer, fetchCustomers } from "../actions/customerActions";
const actions = { closeModal, createCustomer, fetchCustomers };

class NewCustomer extends Component {
  state = {};

  static propTypes = {};

  customerIdCheck = customers => {
    const enteredValue = this.state.clubId;
    for (let i = 0; i < customers.length; i++) {
      let id = customers[i].mugClub.clubId.toString();
      if (id === enteredValue) {
        return true;
      }
    }
  };

  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async e => {
    e.preventDefault();

    // Check if the submitted Mug Club Id is currently in the database
    let value = this.customerIdCheck(this.props.customers);
    if (value) {
      swal({
        title: `Mug Club Number ${this.state.clubId} is already taken.`,
        text: "Please enter a new number.",
        icon: "info",
        button: "Ok"
      });
    } else {
      const newCustomer = {
        name: {
          first: this.state.first,
          last: this.state.last
        },
        mugClub: {
          clubId: this.state.clubId
        }
      };
      try {
        console.log("Saing customer...");
        this.props.createCustomer(newCustomer);
        this.props.fetchCustomers();
        swal({
          title: `${this.state.first} has been created!`,
          icon: "success",
          button: "Ok!"
        });
        this.props.closeModal();
        console.log("Customer saved!");
      } catch (e) {
        console.log(e);
        swal({
          title: `Oops! Something went wrong :(`,
          icon: "info",
          button: "Crap!"
        });
      }
    }
  };

  render() {
    return (
      <>
        <section className={classes.ModalContainer}>
          <Grow in={true}>
            <div className={classes.Modal}>
              <h2 className={classes.ModalTitle}>Add New Customer</h2>
              <form
                className={classes.ModalForm}
                onSubmit={e => this.handleSubmit(e)}
              >
                <div className={classes.Group}>
                  <input
                    type="text"
                    name="first"
                    className={classes.Input}
                    defaultValue={this.state.first}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className={classes.Bar}></span>
                  <label htmlFor="first" className={classes.Label}>
                    First Name
                  </label>
                </div>
                <div className={classes.Group}>
                  <input
                    type="text"
                    name="last"
                    className={classes.Input}
                    defaultValue={this.state.last}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className={classes.Bar}></span>
                  <label htmlFor="last" className={classes.Label}>
                    Last Name
                  </label>
                </div>
                <div className={classes.Group}>
                  <input
                    type="text"
                    name="clubId"
                    className={classes.Input}
                    defaultValue={this.state.clubId}
                    onChange={this.handleInputChange}
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

const mapStateToProps = state => ({
  customers: state.customers.customers
});

export default connect(mapStateToProps, actions)(NewCustomer);
