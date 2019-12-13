import React from 'react';
// import Button from '../../components/Button/Button';
import Customer from '../../components/Customer/Customer';
// import Search from '../../components/Search/Search';
// import Home from '../../components/Home/Home';
import Navigation from '../../components/Navigation/Navigation';
import BeerDisplay from '../../components/Beer/BeerDisplay';
import BeerModal from '../../components/Beer/BeerModal';
import NewBeerModal from '../../components/Beer/NewBeerModal';
import axios from 'axios';

class Customers extends React.Component {
  state = {
    clicked: false,
    customers: [],
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
    newModalOpen: false
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

  // handleNavToggle = () => {
  //   this.setState({ active: !this.state.active })
  //   if (this.state.active) {
  //     console.log('active')
  //   }
  // }

  render() {
    const displayCustomers = (
      this.state.customers.map((person, index) => {
        return (
          <Customer
            key={index}
            name={person.name}
            email={person.email}
            username={person.username}
            clubId={person.mugClub.clubId}
            beers={person.mugClub.beers}
            completed={person.mugClub.completed}
          />
        )
      })
    );

    return (
      <>
        <Navigation />
        <BeerDisplay
          beers={this.state.beers}
          toggleEditModal={this.toggleEditModal}
          toggleNewModal={this.toggleNewModal}
        />
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

// <NavBar
//   active={this.state.active}
//   menuToggle={this.handleNavToggle} />
