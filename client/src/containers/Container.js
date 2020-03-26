import React from "react";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Navigation from "../pages/Navigation";
import BeerDisplay from "../components/BeerDisplay";
import swal from "@sweetalert/with-react";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";

// Redux Imports
import { connect } from "react-redux";
import {
  fetchBeers,
} from "../actions/beerActions";
import {
  fetchCustomers,
  deleteCustomer
} from "../actions/customerActions";
import { closeModal } from "../actions/modalActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { readString } from "react-papaparse";
// const csvFile = require("./Test.csv");

class Container extends React.Component {
  state = {
    search: "",
    customerBeersModalOpen: false,
    displayBeer: false,
    isAuthenticated: false
  };

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
  

  ///// Search Component Functions /////
  handleDisplayBeer = () => {
    this.setState({ displayBeer: !this.state.displayBeer });
  };
  updateSearch = event => {
    this.setState({ search: event.target.value });
  };
  deleteCustomer = person => {
    swal({
      title: `Delete ${person.name.first}?`,
      text: `Do you really want to delete this customer?`,
      buttons: true,
      icon: "warning",
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal(
          `Boom! ${person.name.first} ${person.name.last} has been deleted!`,
          {
            icon: "success"
          }
        );
        this.props.dispatch(deleteCustomer(person._id));
      } else {
        swal(`Phew! ${person.name.first} is safe!`);
      }
    });
  };

  //// TEST SECTION ////
  calculateCompletedBeers = arr => {
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
    return (
      <>
        <Router>
          <div>
            <Navigation
              
              toggleNewBeerModal={this.toggleNewBeerModal}
            />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/searchCustomers">
                <Search
                  search={this.state.search}
                  updateSearch={this.updateSearch}
                  toggleEditCustomerModal={this.toggleEditCustomerModal}
                  toggleCustomerBeersModal={this.toggleCustomerBeersModal}
                  customerBeersModalOpen={this.state.customerBeersModalOpen}
                  handleDisplayBeer={this.handleDisplayBeer}
                  displayBeer={this.state.displayBeer}
                  deleteCustomer={this.deleteCustomer}
                  updateCompletedBeers={this.updateCompletedBeers}
                  calculateCompletedBeers={this.calculateCompletedBeers}
                  createNewUser={this.toggleNewCustomerModal}
                />
              </Route>
              <Route path="/beersList">
                <BeerDisplay
                  toggleModal={this.toggleEditBeerModal}
                  createNewBeer={this.toggleNewBeerModal}
                />
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
  beers: state.beers.beers,
  customers: state.customers.customers,
});

export default connect(mapStateToProps)(Container);
