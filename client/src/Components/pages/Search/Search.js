import React from 'react';
import Customer from '../../Customer/Customer';
import { connect } from 'react-redux';

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
      <input
        type='text'
        name='search'
        value={props.search}
        onChange={props.updateSearch} />
    { mappedCustomers }
    </div>
    
    </>
  )
};

const mapStateToProps = (state) => ({
  customers: state.customers.customers,
  toggleEditCustomerModal: state.customers.toggleEditCustomerModal
})


export default connect(mapStateToProps)(Search);
