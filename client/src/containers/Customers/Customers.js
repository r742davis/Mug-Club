import React, { Component } from 'react';
import Button from '../../components/Button/Button';
import Customer from '../../components/Customer/Customer';
import Search from '../../components/Search/Search';
import NavBar from '../../components/Navigation/NavBar';

class Customers extends Component {
  state = {
    clicked: false,
    customers: [],
    value: ''
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

  handleChange = (event) => {
    this.setState({ value: event.target.value})
    console.log(this.state.value);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.value)
  }

  handleNavToggle = () => {


    const menu = document.querySelectorAll('.menu');
    menu.classList.add('active');
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
          menuToggle={this.handleNavToggle}/>

        <main>
        </main>

        <footer>
        </footer>
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
