import React from 'react';

import './NavBar.module.css';

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
    </nav>
  )
};

export default navbar;
