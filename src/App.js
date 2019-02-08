import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import ReactDOM from 'react-dom';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import './App.css';

// endpoint - in graphql there is only 1 endpoint instead of multiple in REST API
const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com',
})

class App extends Component {
  render() {
    return (
      <div className="App">
        
      </div>
    );
  }
}

export default App;
