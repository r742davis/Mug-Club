import React from "react";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Navigation from "../pages/Navigation";
import BeerDisplay from "../components/BeerDisplay";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";

// Redux Imports
import { connect } from "react-redux";
import { fetchBeers } from "../actions/beerActions";
import { fetchCustomers } from "../actions/customerActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { readString } from "react-papaparse";
// const csvFile = require("./Test.csv");

class Container extends React.Component {
  state = {};

  async componentDidMount() {
    await this.loadData();
    ///// CSV CONVERSION
    // const results = await readString(csvFile, {
    //   delimiter: ",",
    //   download: true,
    //   complete: function(results) {
    //     // console.log(results.data)
    //     let i = 0;
    //     while (i < results.data.length) {
    //       console.log(results.data[i]);
    //       i++;
    //     }
    //   }
    // })
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

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(Container);
