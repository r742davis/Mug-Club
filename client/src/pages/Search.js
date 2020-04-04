import React, { Component } from "react";
import classes from "../css/Search.module.css";
import Customer from "../components/Customer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import swal from "@sweetalert/with-react";

// Redux Imports
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { openModal } from "../actions/modalActions";
import { deleteCustomer } from "../actions/customerActions";
const actions = { openModal, deleteCustomer };

const uniqid = require("uniqid");

class Search extends Component {
  state = {
    search: "",
  };

  static propTypes = {
    customers: PropTypes.array.isRequired,
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
    let { search } = this.state;
    let filteredCustomers;
    if (this.props.customers && search) {
      filteredCustomers = this.props.customers.filter((customer) => {
        // Number Search
        let id = customer.mugClub.clubId.toString();
        let number = search === id ? customer : null;

        // Name Search
        let strings =
          customer.name.first.toLowerCase().includes(search.toLowerCase()) ||
          customer.name.last.toLowerCase().includes(search.toLowerCase());

        if (strings) {
          return strings;
        }
        if (number) {
          return number;
        }
      });
    }

    const mappedCustomers = filteredCustomers
      ? filteredCustomers.map((customer, index) => {
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
        <div>
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
            <div className={classes.SearchContainer}>
              <label htmlFor="search" className={classes.InputLabel}>
                Please Enter Name or Mug Club ID
              </label>
              <input
                type="text"
                name="search"
                placeholder="For example: 'Danny' or '12'"
                className={classes.Input}
                value={this.state.search}
                onChange={this.updateSearch}
              />
            </div>

            <div className={classes.CustomerContainer}>
              {search && mappedCustomers}
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
});

export default connect(mapStateToProps, actions)(Search);
