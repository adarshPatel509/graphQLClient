import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Launches from './Components/Launches';
import Launch from './Components/Launch';

import './App.css';
import logo from '../src/logo.png';


const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Router>
          <div className="container">
            <img 
              src={logo} 
              alt="SpaceX" 
              style={{width: 300, height: 100, display: 'block', margin: "auto"}} 
            />
            <Route exact path="/" component={Launches} />
            <Route exact path="/launch/:flight_number" component={Launch} />
          </div>
        </Router>
      </ApolloProvider>
    );
  }
}

export default App;
