import React, { Component } from 'react';
import Button from './Button';
import Customer from './Customer';
import Search from './Search';

class Customers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false,
      customers: null
    }
  };

  componentDidMount() {
    const url = 'http://localhost:5000/customers';
    fetch(url, {
      crossDomain: true
    })
      .then(response => response.json())
      .then(data => this.setState({ customers: data}) )
      .then(() => console.log(this.state.customers))
  }

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked })
    console.log(this.state.clicked)
  }

  render() {
    return (
      <>
        <Button handleClick={this.handleClick} />
        <Search />
        {this.state.clicked
          ? this.state.customers.map((person, index) => {
            return (
              <Customer
                key={index}
                firstName={person.firstName}
                lastName={person.lastName}
              />
            )
          })
          : null}
      </>
    );
  };
};

export default Customers;
