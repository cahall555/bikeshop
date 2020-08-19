import React, { Component } from 'react';
import './App.css';

import Card from './components/card'
import Gallery from './components/gallery'
import forsale from './assets/forsale.jpeg';

class Buyabike extends Component {
  render() {
    return (
      <div className="App">
      
      <Card>
      <h2>Bikes</h2>
            <Gallery>
            <div className="imgcontainer">
              <img src={forsale} alt="For Sale" width="25%" height="25%"></img>
              </div>
                <div class="desc">$600</div>
            </Gallery>
      </Card>
      
    </div>
    );
  }
}

export default Buyabike;