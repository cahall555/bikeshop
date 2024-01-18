import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Card from './components/card'
import './assets/aboutus.jpeg'

const Home = () =>  (<p className="App-intro">
<Card>
  <h2>testing something</h2>
</Card>
<Card>
  <h2>second paragraph</h2>
  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
</Card>
<Card>
  <h2>Why Bike</h2>
</Card>
</p>);


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
