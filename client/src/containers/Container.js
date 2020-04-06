import React from "react";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Navigation from "../pages/Navigation";
import BeerDisplay from "../pages/BeerDisplay";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";

// Redux Imports
import { connect } from "react-redux";
import { fetchBeers } from "../actions/beerActions";
import { fetchCustomers, createCustomer } from "../actions/customerActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { readString } from "react-papaparse";
import BeersList from "../components/BeersList";
const actions = { fetchBeers, fetchCustomers, createCustomer };
const csvFile = require("./Test.csv");

class Container extends React.Component {
  state = {
    existingCustomers: "",
  };

  async componentDidMount() {
    await this.loadData();
    ///// CSV CONVERSION
    const list = this.props.beers;
    let existingCustomersArray = [];

    const populateBeersList = (headers, customer) => {
      let map = {};
      let beerList = [...list];

      // Mapping the customer's array of completed beers
      for (let i = 5; i < customer.length; i++) {
        const beer = headers[i];
        if (customer[i] === "1") {
          map[beer] = {
            finished: true,
          };
        } else {
          map[beer] = {
            finished: false,
          };
        }
      }

      let temp = [];
      for (let [key, value] of Object.entries(map)) {
        for (let beer in beerList) {
          if (beerList[beer].name === key && value.finished === true) {
            const merged = { ...beerList[beer], ...value };
            temp.push(merged);
          } else if (beerList[beer].name === key) {
            temp.push(beerList[beer]);
          }
        }
      }
      return temp;
    };

    const results = readString(csvFile, {
      delimiter: ",",
      download: true,
      complete: function (results) {
        let headers = results.data[0];
        let i = 1;
        while (i < results.data.length) {
          let customer = results.data[i];
          let temp = {
            name: {
              first: customer[1],
              last: customer[2],
            },
            mugClub: {
              completed: null,
              clubId: parseInt(customer[0]),
              beers: populateBeersList(headers, customer),
            },
            beersCompleted: parseInt(customer[3]),
          };

          if (customer[3] >= list.length) {
            temp.mugClub.completed = true;
          } else {
            temp.mugClub.completed = false;
          }
          existingCustomersArray.push(temp);
          i++;
        }
      },
    });

    this.setState({
      existingCustomers: existingCustomersArray,
    });
    console.table(this.state.existingCustomers);
  
  }

  saveCustomersToDatabase = (customersArray) => {
    for (let customer of customersArray) {
      console.table(customer);
      
      const newCustomer = {
        name: {
          first: customer.name.first,
          last: customer.name.last,
        },
        mugClub: {
          completed: customer.mugClub.completed,
          clubId: customer.mugClub.clubId,
          beers: customer.mugClub.beers,
        },
      };
      this.props.createCustomer(newCustomer);
      console.log("Customer created");
    }
  };

  loadData = async () => {
    try {
      await this.props.fetchBeers();
      await this.props.fetchCustomers();
    } catch (error) {
      throw new Error(
        "Cannot connect to database. Server may be busy or unavailable."
      );
    }
  };

  render() {
    return (
      <>
        {/* Router Navigation */}
        <Router>
          <div>
            <Navigation />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/searchCustomers">
                <Search />
              </Route>
              <Route path="/beersList">
                <BeerDisplay />
              </Route>
            </Switch>
            {/* <button
              onClick={() =>
                this.saveCustomersToDatabase(this.state.existingCustomers)
              }
            >
              Save Customers
            </button> */}
          </div>
        </Router>
        {/* Modal Displays */}
        <Backdrop></Backdrop>
        <RenderModal />
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  beers: state.beers.beers,
  customers: state.customers.customers,
});

export default connect(mapStateToProps, actions)(Container);
