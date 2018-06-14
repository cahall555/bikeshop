import React, { Component } from 'react';
import './header.css';
import { Router, browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import variables from 'react-css-variables'

class Header extends React.Component {
    render() {
      return <div>
        <div className="topnav">
          <a><Link to="/">Home</Link></a>
          <a><Link to="buyabike">Buy a Bike</Link></a>
          <a><Link to="aboutpage">About Us</Link></a>
        </div>
        <div className="header">
        <h1>Bike Rental</h1>
        </div>
    </div>;
    }
  }
export default Header;  