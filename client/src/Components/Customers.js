import React, { Component } from 'react';
import Button from './Button';

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

  handleClick() {
    this.setState({ clicked: true })
  }

  render() {
    return (
      <div>
        <Button
          setClicked={this.handleClick}
        />
      </div>
    );
  };
};

export default Customers;

// {this.state.clicked ?
//   this.state.customers.map((person, index) => {
//     return (
//       <Customer
//         firstName={}
//       />
//     )
//   })
//   : null}
