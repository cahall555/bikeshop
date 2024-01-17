import React, { Component } from 'react';
//import './App.css';

import Card from './components/card'
import forsale from './assets/forsale.jpeg';
import Form from './components/form';

class Buyabike extends Component {
  render() {
    return (
      <div className="App">
      
      <Card>
      <h2>Bikes</h2>
    
            <div className="imgcontainer">
              <img src={forsale} alt="For Sale" width="25%" height="25%"></img>
              </div>
                <div>$600</div>
      </Card>
      <Card>
        <div>
        </div>
        
      </Card>
<Form/>
    </div>
    );
  }
}

export default Buyabike;
