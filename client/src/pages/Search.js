import React from 'react';
import { connect } from 'react-redux';
import Customer from '../components/Customer';
import classes from './styles/Search.module.css';

const Search = (props) => {
  console.log(props)
    let filteredCustomers = props.customers ? props.customers.filter(
      (customer) => {
        return customer.name.first.toLowerCase().includes(props.search.toLowerCase()) || customer.name.last.toLowerCase().includes(props.search.toLowerCase());
      }
    ) : null

    const mappedCustomers = filteredCustomers ? filteredCustomers.map((person, index) => {
      return (
        <Customer
          key={index}
          name={person.name}
          email={person.email}
          username={person.username}
          clubId={person.mugClub.clubId}
          beers={person.mugClub.beers}
          completed={person.mugClub.completed}
          toggleEditCustomerModal={() => props.toggleEditCustomerModal(person)}
          displayBeer={props.displayBeer}
          handleDisplayBeer={props.handleDisplayBeer}
        />
      )
    }) : null

  return (
    <>
    <div>
      <div className={classes.InputContainer}>
        <label htmlFor='search' className={classes.Label}>Search for Customers</label>
        <input
          type='text'
          name='search'
          className={classes.Input}
          value={props.search}
          onChange={props.updateSearch} />
      </div>
      <div className={classes.CustomerContainer}>
        { mappedCustomers }
      </div>
    </div>
    </>
  )
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers
})


export default connect(mapStateToProps)(Search);
