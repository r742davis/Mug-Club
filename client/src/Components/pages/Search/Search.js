import React from 'react';
import Customer from '../../Customer/Customer';

const search = (props) => {
    let filteredCustomers = props.customers.filter(
      (customer) => {
        return customer.name.first.toLowerCase().includes(props.search.toLowerCase()) || customer.name.last.toLowerCase().includes(props.search.toLowerCase());
      }
    );
  
  return (
    <>
    <div>
      <input
        type='text'
        name='search'
        value={props.search}
        onChange={props.updateSearch} />
    {filteredCustomers.map((person, index) => {
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
      })
    }
    </div>
    
    </>
  )
};

export default search;
