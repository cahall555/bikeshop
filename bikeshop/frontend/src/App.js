import React, { Component } from 'react';
import logo from './logo.svg';
import symbol from './assets/symbol.jpeg';
import './App.css';
import { Route, BrowserRouter, Switch, IndexRoute } from 'react-router-dom';

import Card from './components/card'
import Header from './components/header'
import Footer from './components/footer'
import Form from './components/form'


import AboutPage from './aboutpage'
import Buyabike from './buyabike'

const Home = () =>  (<p className="App-intro">
<Card>
  <h2>Rent a Bike</h2>
  <h5>$3 Per Hour</h5>
  <Form/>
</Card>
<Card>
  <h2>Rental Policy</h2>
  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
</Card>
<Card>
  <h2>Why Bike</h2>
  <div className="imgcontainer">
    <img src={symbol} width='100%'/>
    <div className="txtblock">
        <i className="fa fa-bicycle"> Convenient</i>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <i className="fa fa-bicycle"> Efficient</i>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <i className="fa fa-bicycle"> Reduces Traffic</i>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        <i className="fa fa-bicycle"> Be Social</i>
        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
    </div>
  </div>
</Card>
</p>);

class App extends Component {
  render() {
    return (
    <BrowserRouter>
      <div className="App">
        <div>
        </div>
        <Header/>
        <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/aboutpage' component={AboutPage} />
        <Route path='/buyabike' component={Buyabike} />
        </Switch>
        <Footer/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
