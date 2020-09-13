import * as React from 'react';
import './header.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
      return <div>
        <div className="topnav">
          <a><Link to="/">Home</Link></a>
          <a><Link to="buyabike">Buy a Bike</Link></a>
          <a><Link to="aboutpage">About Us</Link></a>
        </div>
    </div>;
    }
  }
export default Navigation;  