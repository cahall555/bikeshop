import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/card'
import Header from './components/header'
import './assets/aboutus.jpeg'

class AboutPage extends Component {
  render() {
    return (
      <div className="App">
       
        <Card>
        <h2>Our Story</h2>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </Card>
        
      </div>
    );
  }
}

export default AboutPage;