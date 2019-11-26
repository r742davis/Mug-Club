import React from 'react';
// import Button from '../../components/Button/Button';
import Customer from '../../components/Customer/Customer';
// import Search from '../../components/Search/Search';
// import Home from '../../components/Home/Home';
import BeerModal from '../../components/Beer/BeerModal';
import NewBeerModal from '../../components/Beer/NewBeerModal';
import axios from 'axios';

class Customers extends React.Component {
  state = {
    clicked: false,
    customers: [],
    beers: [],
    value: '',
    active: false
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

  handleInputChange = (event) => {
    const target = event.target;
    const name = target.name;

    this.setState({ [name]: event.target.value})
  }

  handleSubmit = async (event) => {
    await event.preventDefault();
    const newBeer = {
      name: this.state.beerName,
      type: this.state.beerType,
      brewery: this.state.brewery,
      breweryLocation: this.state.breweryLocation,
      finished: false
    }

    // const beersURL = 'http://localhost:5000/beers';
    // return fetch(beersURL, {
    //   method: 'POST',
    //   body: newBeer,
    //   crossDomain: true
    // });

    try {
      const beersURL = 'http://localhost:5000/beers';
      const config = {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Accept': 'application/json'
        }
      };
      await axios.post(beersURL, newBeer, {crossDomain: true}, config);
      console.log(newBeer)
    } catch (e) {
      console.error(e)
    }
  }

  handleNavToggle = () => {
    this.setState({ active: !this.state.active })
    if (this.state.active) {
      console.log('active')
    }
  }

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
        {/*<BeerModal
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          beerName={this.state.beerName}
          beerType={this.state.beerType}
          brewery={this.state.brewery}
          breweryLocation={this.state.breweryLocation}
          />*/}
        <NewBeerModal
          handleSubmit={this.handleSubmit}
          handleInputChange={this.handleInputChange}
          beerName={this.state.beerName}
          beerType={this.state.beerType}
          brewery={this.state.brewery}
          breweryLocation={this.state.breweryLocation}
        />
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
