import React, {Component} from 'react';
import './App.css';
import AppNavBar from './components/AppNavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

import { Route } from 'react-router-dom';

import Home from './components/Home.js';
import About from './components/About.js';
import Contact from './components/Contact.js';
import Subscribe from './components/Subscribe.js';

import {Provider} from 'react-redux';
import store from './store';
import { loadUser} from './actions/authActions';

class App extends Component {

  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavBar/>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Subscribe/>
        </div>
      </Provider>
 
    );
  }
}

export default App;
