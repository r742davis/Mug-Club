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
import { fetchCustomers } from "../actions/customerActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { readString } from "react-papaparse";
const csvFile = require("./Test.csv");

class Container extends React.Component {
  state = {};

  async componentDidMount() {
    await this.loadData();
    ///// CSV CONVERSION

    const populateBeersArray = (headers, customer) => {
      let list = this.props.beers;
      let map = {};
      // Mapping the customer's array of completed beers
      for (let i = 5; i < customer.length; i++) {
        const beer = headers[i];
        if (customer[i]) {
          map[beer] = true;
        } else {
          map[beer] = false;
        }
      };
      console.log(map, list)

      for (let beer in map) {
        if (map[beer]) {          
          for (let m = 0; m < list.length; m++) {
            const name = list[m].name.toLowerCase();
            const beerName = beer.toLowerCase();
            if (name.includes(beerName)) {
              list[m].finished = true;
            }
          }
        } 
      }
      
      // Compare the map with the list of beers and then change the values according to map values

      

      return list;
    }


    const results = await readString(csvFile, {
      delimiter: ",",
      download: true,
      complete: function(results) {
        // console.log(results.data)
        let customerArr = [];
        let headers = results.data[0];
        let i = 1;
        while (i < results.data.length) {
          let customer = results.data[i];
          let temp = {
            name: {
              first: customer[1],
              last: customer[2]
            },
            mugClub: {
              completed: null,
              clubId: parseInt(customer[0]),
              beers: populateBeersArray(headers, customer)
            }
          };

          if (customer[3] >= 30) {
            temp.mugClub.completed = true;
          } else {
            temp.mugClub.completed = false;
          }

          customerArr.push(temp);
          i++;
        }
        return console.log(customerArr);
      }
    })
  
    
  }
  




  loadData = async () => {
    try {
      await this.props.dispatch(fetchBeers());
      await this.props.dispatch(fetchCustomers());
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
          </div>
        </Router>
      {/* Modal Displays */}
        <Backdrop></Backdrop>
        <RenderModal />
      </>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers.beers
});

export default connect(mapStateToProps)(Container);
