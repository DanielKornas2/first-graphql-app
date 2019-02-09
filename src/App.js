import React, { Component } from 'react';
import Countries from './components/Countries/Countries';
import CountryInfo from './components/CountryInfo/CountryInfo';
import Homepage from './components/Homepage/Homepage';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

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
          <Router>
            <React.Fragment>
              <Route path="/" exact component={Homepage} />
              {this.state.countryName && <button><Link to="/country-info">Show more information about {this.state.countryName}></Link></button>}
              <Route path="/country-info" component={CountryInfo} />
            </React.Fragment>
          </Router>
      </div>
    );
  }
}

export default App;
