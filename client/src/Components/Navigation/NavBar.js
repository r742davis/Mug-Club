import React from 'react';

import './NavBar.css';

const navbar = (props) => {
  return (
    <nav className="menu">
      <div className="menu-container">
        <ul className="menu-list">
          <li className="menu-item">
            <a href="#" className="menu-link">Home</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Create New Customer</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Search Customers</a>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link">Edit Beer List</a>
          </li>
        </ul>
      </div>
      <a className="menu-toggle" onClick={props.menuToggle}>
        <span className="menu-hamburger"></span>
      </a>
    </nav>
  )
};

export default navbar;
