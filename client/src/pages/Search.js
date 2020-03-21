import React from 'react';
import { connect } from 'react-redux';
import Customer from '../components/Customer';
import classes from './styles/Search.module.css';

const Search = (props) => {
    let filteredCustomers = props.customers ? props.customers.filter(
      (customer) => {
        let strings = customer.name.first.toLowerCase().includes(props.search.toLowerCase()) || customer.name.last.toLowerCase().includes(props.search.toLowerCase());
        // let numbers = customer.mugClub.cludId.includes(Number(props.search));
        return (
          strings
        )
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
          toggleCustomerBeersModal={() => props.toggleCustomerBeersModal(person)}
          customerBeersModalOpen={props.customerBeersModalOpen}
          deleteCustomer={() => props.deleteCustomer(person)}
          displayBeer={props.displayBeer}
          handleDisplayBeer={props.handleDisplayBeer}
          updateCompletedBeers={props.updateCompletedBeers}
          calculateCompletedBeers={props.calculateCompletedBeers}
        />
      )
    }) : null

  return (
    <>
    <div>
      <div className={classes.InputContainer}>
        <h1 className={classes.SearchTitle}>Search Customers</h1>
        <input
          type='text'
          name='search'
          className={classes.Input}
          value={props.search}
          onChange={props.updateSearch} />
      
      <div className={classes.CustomerContainer}>
        { props.search ? mappedCustomers : null }
      </div>
      </div>
      
    </div>
    </>
  )
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers
})


export default connect(mapStateToProps)(Search);
