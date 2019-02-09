import React, { Component } from 'react';
import Countries from './components/Countries/Countries'
import './App.css';

class App extends Component {

  state = {
    countryName: null,
    countryNative: null,
    countryCurrency: null
  }

  handleClick = (countryName, countryNative, countryCurrency) => {
    this.setState({
      countryName: countryName,
      countryNative: countryNative,
      countryCurrency: countryCurrency
    })
  }

  render() {
    return (
      <div className="App">
        <Countries handleClick={this.handleClick} />
        {this.state.countryName && <button>Show more information about {this.state.countryName}</button>}
      </div>
    );
  }
}

export default App;
