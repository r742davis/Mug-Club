import React from 'react';

export const filterCustomers = (customers, search) => {
  customers.filter((customer) => {
    // Number Search
    let id = customer.mugClub.clubId.toString();
    let number = search === id ? customer : null;

    // Name Search
    let strings =
      customer.name.first.toLowerCase().includes(search.toLowerCase()) ||
      customer.name.last.toLowerCase().includes(search.toLowerCase());

    if (strings) {
      return strings;
    }
    if (number) {
      return number;
    }
  });
}