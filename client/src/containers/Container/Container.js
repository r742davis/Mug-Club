import React from 'react';
// import Button from '../../components/Button/Button';
import NewCustomer from '../../components/Modals/Customer/NewCustomer';
import EditCustomer from '../../components/Modals/Customer/EditCustomer';
import Search from '../../components/pages/Search/Search';
import Home from '../../components/pages/Home/Home';
import Navigation from '../../components/pages/Navigation/Navigation';
import BeerDisplay from '../../components/Beer/BeerDisplay';
import BeerModal from '../../components/Modals/Beer/BeerModal';
import NewBeerModal from '../../components/Modals/Beer/NewBeerModal';
import axios from 'axios';

import { connect } from 'react-redux';
import { fetchBeers } from '../../actions/beerActions';
import { fetchCustomers, createCustomer } from '../../actions/customerActions';

//React Router DOM Import
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Container extends React.Component {
  state = {
    search: '',
    customerId: '',
    firstName: '',
    lastName: '',
    clubId: '',
    beerId: '',
    beerName: '',
    beerType: '',
    brewery: '',
    breweryLocation: '',
    beerUrl: '',
    active: false,
    selectedBeerType: '',
    editModalOpen: false,
    newBeerModalOpen: false,
    newCustomerModalOpen: false,
    editCustomerModalOpen: false,
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

  handleSubmit = async (event) => {
    await event.preventDefault();
    const newBeer = {
      name: this.state.beerName,
      type: this.state.beerType,
      brewery: this.state.brewery,
      breweryLocation: this.state.breweryLocation,
      url: this.state.beerUrl,
      finished: false
    }

    try {
      const beersURL = 'http://localhost:5000/beers';
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      await axios.post(beersURL, newBeer, {crossDomain: true}, config);
      await alert(`${this.state.beerName} has been created 🍺`);
      const beers = 'http://localhost:5000/beers';
      const beersResponse = await fetch(beers, {crossDomain: true});
      const beersJSON = await beersResponse.json();
      await this.setState({
        beers: beersJSON,
        beerName: '',
        beerType: '',
        brewery: '',
        breweryLocation: '',
        beerUrl: '',
        newBeerModalOpen: false
      });
    } catch (e) {
      console.error(e)
    }
  }

  handleEditSubmit = async (event) => {
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
      await alert(`${this.state.beerName} has been updated! 🍺`);
      const beers = 'http://localhost:5000/beers';
      const beersResponse = await fetch(beers, {crossDomain: true});
      const beersJSON = await beersResponse.json();
      await this.setState({
        beers: beersJSON,
        editModalOpen: false
      })
    } catch (e) {
      console.log(e);
    }
  }

  clearCustomerState = () => {
    this.setState({
      customerId: '',
      firstName: '',
      lastName: '',
      clubId: '',
      completed: ''
    })
  }

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

  handleEditCustomerSubmit = async (event) => {
    event.preventDefault();
    const updatedCustomer = {
      name: {
        first: this.state.firstName,
        last: this.state.lastName
      },
      mugClub: {
        clubId: this.state.clubId,
        completed: this.state.completed
      }
    };

    try {
      const customerURL = 'http://localhost:5000/customers/' + this.state.customerId;
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      await axios.put(customerURL, updatedCustomer, {crossDomain: true}, config);
      await alert(`${this.state.firstName} has been updated! :D`);

      await this.clearCustomerState();
      await this.setState({
        editCustomerModalOpen: false
      })
      await this.props.dispatch(fetchCustomers());
    } catch (e) {
      console.log(e);
    }
  }

  toggleEditBeerModal = async (beer) => {
    await this.setState({
      editModalOpen: !this.state.editModalOpen,
    });
    this.state.editModalOpen ?
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

  toggleEditCustomerModal = async (customer) => {
    await this.setState({
      editCustomerModalOpen: !this.state.editCustomerModalOpen
    })

    if (customer.name?.first) {
      await this.setState({
        customerId: customer._id,
        firstName: customer.name.first,
        lastName: customer.name.last,
        clubId: customer.mugClub.clubId,
        completed: customer.mugClub.completed
      })
    }

    if (!this.state.editCustomerModalOpen) {
      this.clearCustomerState();
    }
    console.log(customer)
  }

  //Search Component Functions
  handleDisplayBeer = () => {
    this.setState({
      displayBeer: !this.state.displayBeer
    })
    console.log(this.state.displayBeer)
  }

  updateSearch = (event) => {
    this.setState({
      search: event.target.value
    })
  }

  render() {
    return (
      <>
        <Router>
          <div>
            <Navigation
              toggleNewCustomerModal={this.toggleNewCustomerModal}
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
                  handleDisplayBeer={this.handleDisplayBeer}
                  displayBeer={this.state.displayBeer}
                />
              </Route>
              <Route path="/beersList">
                <BeerDisplay
                  toggleEditBeerModal={this.toggleEditBeerModal}
                  toggleNewBeerModal={this.toggleNewBeerModal}
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
        {this.state.editModalOpen ?
          <BeerModal
            handleEditSubmit={this.handleEditSubmit}
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
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            toggleNewBeerModal={this.toggleNewBeerModal}
            beerName={this.state.beerName}
            selectedBeerType={this.state.selectedBeerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
          />
        : null}
      </>
    );
  };
};

const mapStateToProps = (state) => ({
  beers: state.beers.beers,
  customers: state.customers.customers
});

export default connect(mapStateToProps)(Container);
