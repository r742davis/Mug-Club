import React from "react";
// import NewCustomer from "../components/NewCustomer";
// import EditCustomer from "../components/EditCustomer";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Navigation from "../pages/Navigation";
import BeerDisplay from "../components/BeerDisplay";
import EditBeer from "../components/EditBeer";
// import NewBeer from "../components/NewBeer";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Backdrop from "../components/Backdrop";
import RenderModal from "../components/RenderModal";

// Redux Imports
import { connect } from "react-redux";
import {
  fetchBeers,
  createBeer,
  updateBeer
} from "../actions/beerActions";
import {
  fetchCustomers,
  deleteCustomer
} from "../actions/customerActions";
import { openModal, closeModal } from "../actions/modalActions";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// import { readString } from "react-papaparse";
// const csvFile = require("./Test.csv");

class Container extends React.Component {
  state = {
    search: "",
    customer: "",
    customerBeers: [],
    completed: "",
    beerId: "",
    beerName: "",
    beerType: "",
    brewery: "",
    breweryLocation: "",
    beerUrl: "",
    selectedBeerType: "",
    editBeerModalOpen: false,
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

  closeModal = () => {
    this.setState({
      editBeerModalOpen: false,
      newBeerModalOpen: false,
      newCustomerModalOpen: false,
      editCustomerModalOpen: false,
      customerBeersModalOpen: false
    });
    this.props.dispatch(closeModal());
  };

  render() {
    // let modalOpen = false;
    // if (
    //   this.state.editBeerModalOpen ||
    //   this.state.editCustomerModalOpen ||
    //   this.state.newCustomerModalOpen ||
    //   this.state.newBeerModalOpen ||
    //   this.props.modalOpen
    // ) {
    //   modalOpen = true;
    // }
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
        <Backdrop modalOpen={this.props.modalOpen} closeModal={this.closeModal}></Backdrop>
        {/* {this.props.modalOpen && <EditCustomer />} */}
        <RenderModal />
        {/* {this.state.newCustomerModalOpen ? (
          <NewCustomer
            handleSubmit={this.handleNewCustomerSubmit}
            toggleModal={this.toggleNewCustomerModal}
            handleInputChange={this.handleInputChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            clubId={this.state.clubId}
          />
        ) : null} */}
        {/* {this.state.editBeerModalOpen ? (
          <EditBeer
            handleSubmit={this.handleEditBeerSubmit}
            deleteBeer={this.deleteBeer}
            handleInputChange={this.handleInputChange}
            toggleModal={this.toggleEditBeerModal}
            handleEdit={this.handleEdit}
            id={this.state.beerId}
            beerName={this.state.beerName}
            beerType={this.state.beerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
          />
        ) : null} */}
        {/* {this.state.newBeerModalOpen ? (
          <NewBeer
            handleSubmit={this.handleNewBeerSubmit}
            handleInputChange={this.handleInputChange}
            toggleModal={this.toggleNewBeerModal}
            beerName={this.state.beerName}
            selectedBeerType={this.state.selectedBeerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
          />
        ) : null} */}
      </>
    );
  }
}

const mapStateToProps = state => ({
  beers: state.beers.beers,
  customers: state.customers.customers,
  modalOpen: state.modal.modalOpen
});

export default connect(mapStateToProps)(Container);
