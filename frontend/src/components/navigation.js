import * as React from 'react';
//import './header.css';
import { Link } from 'react-router-dom';

class Navigation extends React.Component {
    render() {
      return <div className="absolute top-0 left-0 w-screen overflow-hidden">
        <div className="flex flex-row justify-between">
	<div className = "flex flex-row">
	  <p className="text-3xl font-bold font-carter text-brown">EcoBikes</p>
	</div>
	<div className="flex flex-row gap-6 font-carter text-orange text-xl mr-8">
          <a><Link to="/">Home</Link></a>
          <a><Link to="buyabike">Buy a Bike</Link></a>
          <a><Link to="aboutpage">About Us</Link></a>
	</div>
        </div>
    </div>;
    }
  }
export default Navigation;  
