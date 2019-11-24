import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Customer from '../../components/Customer/Customer';
import Search from '../../components/Search/Search';
import Home from '../../components/Home/Home';
import EditBeer from '../../components/Beer/EditBeer';

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

  handleChange = (event) => {
    this.setState({ value: event.target.value})
    console.log(this.state.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value)
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
        <EditBeer />
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
