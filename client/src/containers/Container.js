import React from 'react';
import NewCustomer from '../components/NewCustomer';
import EditCustomer from '../components/EditCustomer';
import Search from '../pages/Search';
import Home from '../pages/Home';
import Navigation from '../pages/Navigation';
import BeerDisplay from '../components/BeerDisplay';
import EditBeerModal from '../components/EditBeerModal';
import NewBeerModal from '../components/NewBeerModal';
import axios from 'axios';

import { connect } from 'react-redux';
import { 
  fetchBeers, 
  createBeer,
  deleteBeer } from '../actions/beerActions';
import { 
  fetchCustomers, 
  createCustomer,
  deleteCustomer } from '../actions/customerActions';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CustomerBeersModal from '../components/CustomerBeersModal';

class Container extends React.Component {
  state = {
    search: '',
    customer: '',
    first: '',
    last: '',
    cludId: '',
    customerId: '',
    firstName: '',
    lastName: '',
    customerBeers: [],
    beerId: '',
    beerName: '',
    beerType: '',
    brewery: '',
    breweryLocation: '',
    beerUrl: '',
    selectedBeerType: '',
    editBeerModalOpen: false,
    newBeerModalOpen: false,
    newCustomerModalOpen: false,
    editCustomerModalOpen: false,
    customerBeersModalOpen: false,
    displayBeer: false
  };

  async componentDidMount() {
    await this.loadData();
  }
  loadData = async () => {
    try {
      await this.props.dispatch(fetchBeers());
      await this.props.dispatch(fetchCustomers());
    } catch (error) {
      throw new Error('Cannot connect to database. Server may be busy or unavailable.')
    }
  }
  handleInputChange = async (event) => {
    const target = event.target;
    const name = target.name;
    await this.setState({ [name]: event.target.value})
  }
  clearBeerState = () => {
    this.setState({
      beerName: '',
      beerType: '',
      brewery: '',
      breweryLocation: '',
      beerUrl: '',
      newBeerModalOpen: false
    });
  }
  clearCustomerState = () => {
    this.setState({
      customerId: '',
      firstName: '',
      lastName: '',
      clubId: '',
      completed: '',
      customerBeers: []
    })
  }

  ///// Beer Submissions ////
  handleNewBeerSubmit = async (event) => {
    event.preventDefault();
    try {
      const newBeer = {
        name: this.state.beerName,
        type: this.state.beerType,
        brewery: this.state.brewery,
        breweryLocation: this.state.breweryLocation,
        url: this.state.beerUrl,
        finished: false
      }
      await this.props.dispatch(createBeer(newBeer));
      await this.props.dispatch(fetchBeers());
      await this.clearBeerState();
    } catch (e) {
      console.error(e)
    }
  }

  handleEditBeerSubmit = async (event) => {
    event.preventDefault();
    const updatedBeer = {
      name: this.state.beerName,
      type: this.state.beerType,
      brewery: this.state.brewery,
      breweryLocation: this.state.breweryLocation,
      url: this.state.beerUrl
    };

    try {
      const beerURL = 'http://localhost:5000/beers/' + this.state.beerId;
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      await axios.put(beerURL, updatedBeer, {crossDomain: true}, config);
      await this.props.dispatch(fetchBeers());
      await this.setState({
        editBeerModalOpen: false
      })
    } catch (e) {
      console.log(e);
    }
  }

  //// Customer creation and edit functions ////
  handleNewCustomerSubmit = async (event) => {
    event.preventDefault();
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
      await this.props.dispatch(createCustomer(newCustomer))
      await this.props.dispatch(fetchCustomers());
      await this.clearCustomerState();
      await this.setState({
        newCustomerModalOpen: false
      })
    } catch (e) {
      console.log(e);
    }
  }

  handleEditCustomerSubmit = async (e) => {
    e.preventDefault();
    const updatedCustomer = {
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      mugClub: {
        clubId: this.state.clubId,
        completed: this.state.completed,
        beers: this.state.customerBeers
      }
    };

    try {
      await this.props.dispatch(updatedCustomer(updatedCustomer, this.state.customerId))
      await this.props.dispatch(fetchCustomers())
      await alert(`${this.state.firstName} has been updated! :D`);
      await this.clearCustomerState();
      await this.setState({
        editCustomerModalOpen: false
      })
    } catch (e) {
      console.log(e);
    }
  }

  //// Toggle Modals ////
  toggleNewBeerModal = async () => {
    await this.setState({
      newBeerModalOpen: !this.state.newBeerModalOpen
    })
  }
  toggleNewCustomerModal = async (event) => {
    await this.setState({
      newCustomerModalOpen: !this.state.newCustomerModalOpen
    })
  }
  toggleEditBeerModal = async (beer) => {
    await this.setState({
      editBeerModalOpen: !this.state.editBeerModalOpen,
    });
    this.state.editBeerModalOpen ?
    await this.setState ({
      beerId: beer._id,
      beerName: beer.name,
      beerType: beer.type,
      brewery: beer.brewery,
      breweryLocation: beer.breweryLocation,
      beerUrl: beer.url
    })
    : await this.setState({
      beerId: '',
      beerName: '',
      beerType: '',
      brewery: '',
      breweryLocation: '',
      beerUrl: ''
    })
  }
  toggleEditCustomerModal = async (customer) => {
    await this.setState({
      editCustomerModalOpen: !this.state.editCustomerModalOpen
    })

    if (customer.name?.first) {
      const { name, mugClub } = customer;
      await this.setState({
        customerId: customer._id,
        firstName: name.first,
        lastName: name.last,
        clubId: mugClub.clubId,
        completed: mugClub.completed,
        customerBeers: mugClub.beers
      })
    }
    if (!this.state.editCustomerModalOpen) {
      this.clearCustomerState();
    }
  }
  toggleCustomerBeersModal = async (beers) => {
    await this.setState({
      customerBeersModalOpen: !this.state.customerBeersModalOpen
    })
    if (!this.state.customerBeersModalOpen) {
      this.clearCustomerState();
    }
  }

  ///// Search Component Functions /////
  handleDisplayBeer = () => {
    this.setState({ displayBeer: !this.state.displayBeer })
  }
  updateSearch = (event) => {
    this.setState({ search: event.target.value })
  }
  deleteCustomer = (person) => {
    this.props.dispatch(deleteCustomer(person._id));
  }
  deleteBeer = (id) => {
    this.props.dispatch(deleteBeer(id));
  }
  
  render() {
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
            />
          </Route>
          <Route path="/beersList">
            <BeerDisplay
              toggleEditBeerModal={this.toggleEditBeerModal}
            />
          </Route>
          </Switch>
          </div>
        </Router>
        {this.state.editCustomerModalOpen ?
          <EditCustomer
            toggleEditCustomerModal={this.toggleEditCustomerModal}
            handleEditCustomerSubmit={this.handleEditCustomerSubmit}
            handleInputChange={this.handleInputChange}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            clubId={this.state.clubId}
            beers={this.state.customerBeers}
          /> : null}
        {this.state.newCustomerModalOpen ?
          <NewCustomer
            toggleNewCustomerModal={this.toggleNewCustomerModal}
            handleInputChange={this.handleInputChange}
            handleNewCustomerSubmit={this.handleNewCustomerSubmit}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            clubId={this.state.clubId}
            /> : null}
        {this.state.editBeerModalOpen ?
          <EditBeerModal
            handleEditBeerSubmit={this.handleEditBeerSubmit}
            deleteBeer={this.deleteBeer}
            handleInputChange={this.handleInputChange}
            toggleEditBeerModal={this.toggleEditBeerModal}
            handleEdit={this.handleEdit}
            beerName={this.state.beerName}
            beerType={this.state.beerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
            />
          : null}
        {this.state.newBeerModalOpen ?
          <NewBeerModal
            handleNewBeerSubmit={this.handleNewBeerSubmit}
            handleInputChange={this.handleInputChange}
            toggleNewBeerModal={this.toggleNewBeerModal}
            beerName={this.state.beerName}
            selectedBeerType={this.state.selectedBeerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
          />
        : null}
        {/* {this.state.customerBeersModalOpen ?
          <CustomerBeersModal 
            toggleModal={this.toggleCustomerBeersModal}
          />
        : null} */}
      </>
    );
  };
};

const mapStateToProps = (state) => ({
  beers: state.beers.beers,
  customers: state.customers.customers
});

export default connect(mapStateToProps)(Container);
