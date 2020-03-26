import React from "react";
import NewCustomer from "../components/NewCustomer";
import EditCustomer from "../components/EditCustomer";
import Search from "../pages/Search";
import Home from "../pages/Home";
import Navigation from "../pages/Navigation";
import BeerDisplay from "../components/BeerDisplay";
import EditBeerModal from "../components/EditBeerModal";
import NewBeerModal from "../components/NewBeerModal";
import axios from "axios";
import swal from "@sweetalert/with-react";
import Backdrop from "../components/Backdrop";

import { connect } from "react-redux";
import {
  fetchBeers,
  createBeer,
  updateBeer
} from "../actions/beerActions";
import {
  fetchCustomers,
  createCustomer,
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
    first: "",
    last: "",
    cludId: "",
    customerId: "",
    firstName: "",
    lastName: "",
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
    newBeerModalOpen: false,
    newCustomerModalOpen: false,
    editCustomerModalOpen: false,
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
  handleInputChange = e => {
    const target = e.target;
    const name = target.name;
    this.setState({ [name]: e.target.value });
  };

  // Reset Beer or Customer State
  clearBeerState = () => {
    this.setState({
      beerName: "",
      beerType: "",
      brewery: "",
      breweryLocation: "",
      beerUrl: "",
      newBeerModalOpen: false
    });
  };
  clearCustomerState = () => {
    this.setState({
      customerId: "",
      firstName: "",
      lastName: "",
      clubId: "",
      completed: "",
      customerBeers: []
    });
  };

  ///// Beer Submissions ////
  handleNewBeerSubmit = async event => {
    event.preventDefault();
    try {
      const newBeer = {
        name: this.state.beerName,
        type: this.state.beerType,
        brewery: this.state.brewery,
        breweryLocation: this.state.breweryLocation,
        url: this.state.beerUrl,
        finished: false
      };
      await this.props.dispatch(createBeer(newBeer));
      await this.props.dispatch(fetchBeers());
      swal({
        title: `${this.state.beerName} has been created!`,
        icon: "success",
        button: "Cool!"
      });
      await this.clearBeerState();
    } catch (e) {
      console.error(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!"
      });
    }
  };

  handleEditBeerSubmit = async e => {
    e.preventDefault();
    const updatedBeer = {
      name: this.state.beerName,
      type: this.state.beerType,
      brewery: this.state.brewery,
      breweryLocation: this.state.breweryLocation,
      url: this.state.beerUrl
    };

    try {
      const beerURL = "http://localhost:5000/beers/" + this.state.beerId;
      await axios.put(beerURL, updatedBeer, { crossDomain: true });
      await this.props.dispatch(updateBeer());
      swal({
        title: `You've updated the ${this.state.beerName} Beer`,
        icon: "success",
        button: "Sweet!"
      });
      this.clearBeerState();
      this.setState({
        editBeerModalOpen: false
      });
    } catch (e) {
      console.log(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!"
      });
    }
  };

  // Customer creation and edit functions ////
  handleNewCustomerSubmit = async e => {
    e.preventDefault();
    const newCustomer = {
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      mugClub: {
        clubId: this.state.clubId
      }
    };
    try {
      console.log("Saing customer...");
      this.props.dispatch(createCustomer(newCustomer));
      this.props.dispatch(fetchCustomers());
      swal({
        title: `${this.state.firstName} has been created!`,
        icon: "success",
        button: "Ok!"
      });
      this.clearCustomerState();
      this.setState({
        newCustomerModalOpen: false
      });
    } catch (e) {
      console.log(e);
      swal({
        title: `Oops! Something went wrong :(`,
        icon: "fail",
        button: "Crap!"
      });
    }
  };
  

  //// Toggle Modals ////
  toggleNewBeerModal = async () => {
    await this.setState({
      newBeerModalOpen: !this.state.newBeerModalOpen
    });
  };
  toggleNewCustomerModal = async event => {
    await this.setState({
      newCustomerModalOpen: !this.state.newCustomerModalOpen
    });
  };
  toggleEditBeerModal = async beer => {
    await this.setState({
      editBeerModalOpen: !this.state.editBeerModalOpen
    });
    this.state.editBeerModalOpen
      ? await this.setState({
          beerId: beer._id,
          beerName: beer.name,
          beerType: beer.type,
          brewery: beer.brewery,
          breweryLocation: beer.breweryLocation,
          beerUrl: beer.url
        })
      : await this.setState({
          beerId: "",
          beerName: "",
          beerType: "",
          brewery: "",
          breweryLocation: "",
          beerUrl: ""
        });
  };
  toggleEditCustomerModal = customer => {
    this.props.dispatch(openModal(customer));
  };
  toggleCustomerBeersModal = async customer => {
    await this.setState({
      customerBeersModalOpen: !this.state.customerBeersModalOpen
    });

    if (customer.name?.first) {
      const { name, mugClub } = customer;
      await this.setState({
        customerId: customer._id,
        firstName: name.first,
        lastName: name.last,
        clubId: mugClub.clubId,
        completed: mugClub.completed,
        customerBeers: mugClub.beers
      });
    }
    if (!this.state.customerBeersModalOpen) {
      this.clearCustomerState();
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
    let modalOpen = false;
    if (
      this.state.editBeerModalOpen ||
      this.state.editCustomerModalOpen ||
      this.state.newCustomerModalOpen ||
      this.state.newBeerModalOpen ||
      this.props.modalOpen
    ) {
      modalOpen = true;
    }
    return (
      <>
        <Router>
          <div>
            <Navigation
              toggleNewCustomerModal={this.toggleNewCustomerModal}
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
        {this.props.modalOpen && <EditCustomer />}
        {this.state.newCustomerModalOpen ? (
          <NewCustomer
            handleSubmit={this.handleNewCustomerSubmit}
            toggleModal={this.toggleNewCustomerModal}
            handleInputChange={this.handleInputChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            clubId={this.state.clubId}
          />
        ) : null}
        {this.state.editBeerModalOpen ? (
          <EditBeerModal
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
        ) : null}
        {this.state.newBeerModalOpen ? (
          <NewBeerModal
            handleSubmit={this.handleNewBeerSubmit}
            handleInputChange={this.handleInputChange}
            toggleModal={this.toggleNewBeerModal}
            beerName={this.state.beerName}
            selectedBeerType={this.state.selectedBeerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
          />
        ) : null}
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
