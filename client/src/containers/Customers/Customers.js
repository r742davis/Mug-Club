import React from 'react';
// import Button from '../../components/Button/Button';
import Customer from '../../components/Customer/Customer';
import NewCustomer from '../../components/Modals/Customer/NewCustomer';
import Search from '../../components/Search/Search';
import Home from '../../components/Home/Home';
import Navigation from '../../components/Navigation/Navigation';
import BeerDisplay from '../../components/Beer/BeerDisplay';
import BeerModal from '../../components/Modals/Beer/BeerModal';
import NewBeerModal from '../../components/Modals/Beer/NewBeerModal';
import DisplayCustomers from '../../components/Customer/DisplayCustomers';
import axios from 'axios';

//React Router DOM Import
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

class Customers extends React.Component {
  state = {
    clicked: false,
    customers: [],
    firstName: '',
    lastName: '',
    clubId: '',
    beers: [],
    beerId: '',
    beerName: '',
    beerType: '',
    brewery: '',
    breweryLocation: '',
    beerUrl: '',
    active: false,
    selectedBeerType: '',
    editModalOpen: false,
    newModalOpen: false,
    newCustomerModalOpen: false
  };

  async componentDidMount() {
    try {
      const customers = 'http://localhost:5000/customers';
      const beers = 'http://localhost:5000/beers';
      const customersResponse = await fetch(customers, {crossDomain: true});
      const beersResponse = await fetch(beers, {crossDomain: true});
      const customersJSON = await customersResponse.json();
      const beersJSON = await beersResponse.json();

      await this.setState({
        customers: customersJSON,
        beers: beersJSON
      })
      await console.log(this.state.customers, this.state.beers)
    } catch (error) {
        throw new Error('Cannot connect to database. Server may be busy or unavailable.')
    }
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
    console.log(this.state.clicked)
  }

  handleInputChange = async (event) => {
    const target = event.target;
    const name = target.name;

    await this.setState({ [name]: event.target.value})

    console.log(name)
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
      console.log(newBeer);
      await alert(`${this.state.beerName} has been created 🍺`);

      //Retrieve beers and update state after submitting new beer
      const beers = 'http://localhost:5000/beers';
      const beersResponse = await fetch(beers, {crossDomain: true});
      const beersJSON = await beersResponse.json();

      //Reset initial state for beer field values
      await this.setState({
        beers: beersJSON,
        beerName: '',
        beerType: '',
        brewery: '',
        breweryLocation: '',
        beerUrl: '',
        newModalOpen: false
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
      console.log(updatedBeer);
      await alert(`${this.state.beerName} has been updated! 🍺`);

      //Retrieve beers and update state after updating new beer
      const beers = 'http://localhost:5000/beers';
      const beersResponse = await fetch(beers, {crossDomain: true});
      const beersJSON = await beersResponse.json();
      this.setState({
        beers: beersJSON,
        editModalOpen: false
      })
    } catch (e) {
      console.log(e);
    }
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
      const customerURL = 'http://localhost:5000/customers';
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      await axios.post(customerURL, newCustomer, {crossDomain: true}, config);
      console.log(newCustomer);
      await alert(`${this.state.firstName} has been created! :D`);

      //Retrieve customers with new customer added
      const customers = 'http://localhost:5000/customers';
      const customersResponse = await fetch(customers, {crossDomain: true});
      const customersJSON = await customersResponse.json();
      this.setState({
        customers: customersJSON,
        newCustomerModalOpen: false
      })
    } catch (e) {
      console.log(e);
    }
  }

  toggleEditModal = async (beer) => {
    await this.setState({
      editModalOpen: !this.state.editModalOpen,
      beerId: beer._id,
      beerName: beer.name,
      beerType: beer.type,
      brewery: beer.brewery,
      breweryLocation: beer.breweryLocation,
      beerUrl: beer.url
    });
  }

  toggleNewModal = async () => {
    this.setState({
      newModalOpen: !this.state.newModalOpen
    })
  }

  toggleNewCustomerModal = async (event) => {
    this.setState({
      newCustomerModalOpen: !this.state.newCustomerModalOpen
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
                <Search />
                <DisplayCustomers customers={this.state.customers}/>
              </Route>
              <Route path="/beersList">
                <BeerDisplay
                  beers={this.state.beers}
                  toggleEditModal={this.toggleEditModal}
                  toggleNewModal={this.toggleNewModal}
                />
              </Route>
            </Switch>
          </div>
        </Router>

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
            toggleEditModal={this.toggleEditModal}
            handleEdit={this.handleEdit}
            beerName={this.state.beerName}
            beerType={this.state.beerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
            />
          : null}
        {this.state.newModalOpen ?
          <NewBeerModal
            handleSubmit={this.handleSubmit}
            handleInputChange={this.handleInputChange}
            toggleNewModal={this.toggleNewModal}
            beerName={this.state.beerName}
            selectedBeerType={this.state.selectedBeerType}
            brewery={this.state.brewery}
            breweryLocation={this.state.breweryLocation}
            beerUrl={this.state.beerUrl}
          />
        : null}


        {/*<Button handleClick={this.handleClick} />
        <Search
          customers={this.state.customers}
          // value={this.state.value}
          // handleSubmit={this.handleSubmit}
          // handleChange={this.handleChange}
          />
        {this.state.clicked ? displayCustomers : null}*/}
      </>
    );
  };
};

export default Customers;
