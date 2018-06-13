import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Card from './components/card'
import Gallery from './components/gallery'


class Buyabike extends Component {
  render() {
    return (
      <div className="App">
      <p className="App-intro">
      <Card>
      <h2>Bikes</h2>
            <Gallery>
                  <a target="_blank" href="./assets/forsale.jpeg">
                    <img src="./assets/forsale.jpeg" alt="Forsale" width="600" height="400"></img>
                  </a>
                <div class="desc">$600</div>
            </Gallery>
      </Card>
      </p>
    </div>
    );
  }
}

export default Buyabike;