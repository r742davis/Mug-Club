import React from 'react';



const search = (props) => {
  let filteredCustomers = props.customers;
  return (
    <>
    <form>
      <input
        type='text'
        name='search'
        value={props.value}
        onChange={props.handleChange} />
    </form>
    </>
  )
};

export default search;
