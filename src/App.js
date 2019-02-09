import React, { Component } from 'react';
import CountriesContainer from './components/Countries/Countries';
import CountryInfo from './components/CountryInfo/CountryInfo';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import { connect } from "react-redux";

class App extends Component {

  render() {
    return (
      <div className="App">
       
          <Router>
            <React.Fragment>
              <Route path="/" exact component={CountriesContainer} />
              {this.props.myStore.countryName && <button><Link to="/country-info">Show more information about {this.props.myStore.countryName}</Link></button>}
              <Route path="/country-info" component={CountryInfo} />
            </React.Fragment>
          </Router>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
      myStore: state.myStore
  };
};


export default connect(mapStateToProps)(App);