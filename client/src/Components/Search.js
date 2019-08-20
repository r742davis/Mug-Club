import React from 'react';

const search = (props) => {
  return (
    <>
      <input
        type="text"
        value={props.value}
        onChange={props.handleChange} />
      <input
        type="submit"
        value="Submit"
        onSubmit={props.handleSubmit} />
    </>
  )
};

export default search;
