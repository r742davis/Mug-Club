import React from "react";
import { connect } from "react-redux";
import { fetchBeers } from "../store/actions/beerActions";
import { fetchCustomers, createCustomer } from "../store/actions/customerActions";
import { readString } from "react-papaparse";


const actions = { fetchBeers, fetchCustomers, createCustomer };
const csvFile = require("./Test.csv");

class LoadExistingDatabase extends React.Component {
  state = {
    existingCustomers: "",
  };

  runConversionAlogrithm = async () => {
    const list = this.props.beers;
    let existingCustomersArray = [];

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

    const populateBeersList = async (headers, customer) => {
      let beerList = [...this.props.beers];
      let map = await this.mapBeers(headers, customer);

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

    this.setState({
      existingCustomers: existingCustomersArray,
    });
    console.table(this.state.existingCustomers);
  }

  mapBeers = (headers, customer) => {
    let map = {};
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
    return map;
  }

  
  saveCustomersToDatabase = (customersArray) => {
    for (let customer of customersArray) {
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
      console.log(newCustomer);
      
      // console.log("Customer created");
    }
  };

  render() {
    const { customers } = this.state;
    return (
      <div>
        <button
          onClick={() =>
            this.runConversionAlogrithm()
          }>
          Run Alogrithm
        </button>
        <button
          onClick={() =>
            this.saveCustomersToDatabase(this.state.existingCustomers)
          }>
          Save Customers
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  beers: state.beers.beers,
  customers: state.customers.customers,
});

export default connect(mapStateToProps, actions)(LoadExistingDatabase);
