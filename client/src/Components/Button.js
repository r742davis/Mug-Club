import React from 'react';

const button = (props) => {
  return (
    <div>
      <button onClick={props.setClick}>Hello</button>
    </div>
  )
}

export default button;

// <button onClick={() => {
//     this.setState({ clicked: true })
//   }}
//   >Click to List People
// </button>
