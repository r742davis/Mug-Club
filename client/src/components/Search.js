import React, { Component } from "react";
import classes from "../css/Search.module.css";
import Customer from "./Customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import swal from "@sweetalert/with-react";
import filterCustomers from "../lib/filterCustomers";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { openModal } from "../actions/modalActions";
import { deleteCustomer } from "../actions/customerActions";
const actions = {
  openModal,
  deleteCustomer,
};
const mapStateToProps = ({ auth, customers: { customers, loading } }) => {
  return {
    customers: customers,
    loading: loading,
    auth: auth,
  };
};
const uniqid = require("uniqid");

class Search extends Component {
  state = {
    search: "",
  };

  static propTypes = {
    customers: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
    auth: PropTypes.object.isRequired,
  };

  updateSearch = (event) => {
    this.setState({ search: event.target.value });
  };

  deleteCustomer = (customer) => {
    swal({
      title: `Delete ${customer.name.first}?`,
      text: `Do you really want to delete this customer?`,
      buttons: true,
      icon: "warning",
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        swal(
          `Boom! ${customer.name.first} ${customer.name.last} has been deleted!`,
          {
            icon: "success",
          }
        );
        this.props.deleteCustomer(customer._id);
      } else {
        swal(`Phew! ${customer.name.first} is safe!`);
      }
    });
  };

  calculateCompletedBeers = (arr) => {
    if (arr) {
      let count = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i].finished === true) {
          count++;
        }
      }
      return count;
    }
  };

  render() {
    const { search } = this.state;
    const customers = this.props.customers;
    const loading = this.props.loading;
    let filteredCustomers;
    if (customers && search && !loading) {
      filteredCustomers = filterCustomers(customers, search);
    }

    const mappedCustomers = filteredCustomers
      ? filteredCustomers.slice(0, 20).map((customer) => {
          return (
            <Customer
              key={uniqid()}
              name={customer.name}
              email={customer.email}
              username={customer.username}
              clubId={customer.mugClub.clubId}
              beers={customer.mugClub.beers}
              completed={customer.mugClub.completed}
              openModal={() => this.props.openModal("EDIT_CUSTOMER", customer)}
              openBeerModal={() =>
                this.props.toggleCustomerBeersModal(customer)
              }
              calculateCompletedBeers={this.calculateCompletedBeers}
              deleteCustomer={() => this.deleteCustomer(customer)}
            />
          );
        })
      : null;
    return (
      <>
        <div className={classes.Background}>
          <div className={classes.InputContainer}>
            <h1 className={classes.SearchTitle}>
              Search Customers
              <div
                className={classes.AddIcon}
                onClick={() => this.props.openModal("NEW_CUSTOMER")}
              >
                <FontAwesomeIcon icon={faPlus} />
              </div>
            </h1>
            <div className={classes.Group}>
              <input
                type="text"
                name="search"
                className={classes.Input}
                defaultValue={this.state.search}
                onChange={this.updateSearch}
                required
              />
              <label htmlFor="search" className={classes.Label}>
                Please Enter Name or Mug Club ID
              </label>
            </div>

            <div className={classes.CustomerContainer}>
              {search && (
                <>
                  <h3>Results:</h3>
                  {mappedCustomers}
                  <h4>Max 20 Results</h4>
                </>
              )}
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default connect(mapStateToProps, actions)(Search);
