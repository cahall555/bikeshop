import React, { Component } from 'react';
import './header.css';
import { Router, browserHistory } from 'react-router';
import { Link } from 'react-router-dom';
import variables from 'react-css-variables'

class Header extends React.Component {
    render() {
      return <div>
        <div className="header">
        <h1>Bike Rental</h1>
        </div>
    </div>;
    }
  }
export default Header; 
