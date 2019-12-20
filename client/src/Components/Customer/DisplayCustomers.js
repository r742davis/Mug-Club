import React from 'react';
import Customer from './Customer';

const DisplayCustomers = (props) => (
  props.customers.map((person, index) => {
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
      />
    )
  })
);

export default DisplayCustomers;
