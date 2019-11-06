import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Customer from '../../components/Customer/Customer';
import Search from '../../components/Search/Search';
import NavBar from '../../components/Navigation/NavBar';

class Customers extends Component {
  state = {
    clicked: false,
    customers: [],
    value: '',
    active: false
  };

  async componentDidMount() {
    try {
      const url = 'http://localhost:5000/customers';
      const response = await fetch(url, {crossDomain: true})
      const json = await response.json();
      this.setState({customers: json})
      await console.log(this.state.customers)

    } catch (error) {
        throw new Error('Cannot connect to database. Server may be busy or url unavailable.')
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
    const displayCustomer = (
      this.state.customers.map((person, index) => {
        return (
          <Customer
            key={index}
            firstName={person.firstName}
            lastName={person.lastName}
          />
        )
      })
    );

    return (
      <>
        <NavBar
          active={this.state.active}
          menuToggle={this.handleNavToggle} />
        <Button handleClick={this.handleClick} />
        <Search
          value={this.state.value}
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange} />
        {this.state.clicked ? displayCustomer : null}
      </>
    );
  };
};

export default Customers;
