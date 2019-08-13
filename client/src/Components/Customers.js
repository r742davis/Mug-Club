import React, { Component } from 'react';

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

  render() {
    return (
      <div>
        <h1>Customers Component</h1>
        <button onClick={() => {
          this.setState({ clicked: true })
        }}
        >Click to List People</button>
        {this.state.clicked ?
          this.state.customers.map((person, index) => {
            return (
              <div>
                <h1>{person._id}</h1>
                <h3>{person.firstName}</h3>
                <h3>{person.lastName}</h3>
              </div>
            )
          })
          : null}
      </div>
    );
  };
};

export default Customers;
