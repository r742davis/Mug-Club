import React from "react";
import Grow from "@material-ui/core/Grow";
import classes from "../../../css/Modals.module.css";
import swal from "@sweetalert/with-react";

import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  closeModal,
  createCustomer,
  fetchCustomers,
} from "../../../store/actions/index";

class NewCustomer extends React.Component {
  state = {
    name: {},
    mugClub: {},
    first: "",
    last: "",
    clubId: "",
  };

  static propTypes = {
    customers: PropTypes.array,
  };

  previousIdValidation = (customers) => {
    const enteredValue = this.state.clubId;
    for (let i = 0; i < customers.length; i++) {
      let id = customers[i].mugClub.clubId.toString();
      if (id === enteredValue) {
        return true;
      }
    }
  };

  handleInputChange = (e) => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    let value = this.previousIdValidation(this.props.customers);
    if (value) {
      swal({
        title: `Mug Club Number ${this.state.clubId} is already taken.`,
        text: "Please enter a new number.",
        icon: "info",
        button: "Ok",
      });
    } else {
      const newCustomer = {
        name: {
          first: this.state.first,
          last: this.state.last,
        },
        mugClub: {
          clubId: this.state.clubId,
        },
      };
      try {
        console.log("Saving customer...");
        await this.props.createCustomer(newCustomer);
        swal({
          title: `${this.state.first} has been created!`,
          icon: "success",
          button: "Ok!",
        });
        console.log(`${this.state.first} ${this.state.last} was saved!`);
        this.props.closeModal();
      } catch (e) {
        console.log(e);
        swal({
          title: `Oops! Something went wrong :(`,
          icon: "info",
          button: "Crap!",
        });
      }
    }
  };

  render() {
    return (
      <section className={classes.ModalContainer}>
        <Grow in={true}>
          <div className={classes.Modal}>
            <h2 className={classes.ModalTitle}>New Customer</h2>
            <div className={classes.ModalContent}>
              <form
                className={classes.ModalForm}
                onSubmit={(e) => this.handleSubmit(e)}
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
                    type="number"
                    name="clubId"
                    className={classes.Input}
                    defaultValue={this.state.clubId}
                    onChange={this.handleInputChange}
                    required
                  />
                  <span className={classes.Bar}></span>
                  <label htmlFor="clubId" className={classes.Label}>
                    Mug Club ID (Suggested #: {this.props.customers.length})
                  </label>
                </div>
                <div className={classes.ButtonContainer}>
                  <input
                    type="submit"
                    value="Submit"
                    onClick={(e) => this.handleSubmit(e)}
                    className={classes.EditButton}
                  />
                  <input
                    type="submit"
                    value="Cancel"
                    onClick={() => this.props.closeModal()}
                    className={classes.CancelButton}
                    formNoValidate
                  />
                </div>
              </form>
            </div>
          </div>
        </Grow>
      </section>
    );
  }
}

const mapStateToProps = ({ customers: { customers } }) => ({
  customers: customers,
});

const mapDispatchToProps = {
  closeModal,
  createCustomer,
  fetchCustomers,
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCustomer);
