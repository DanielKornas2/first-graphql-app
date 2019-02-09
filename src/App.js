import React, { Component } from 'react';
import CountriesContainer from './components/Countries/Countries';
import CountryInfo from './components/CountryInfo/CountryInfo';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import { connect } from "react-redux";
import { updateCountry } from "./redux/actions";

class App extends Component {

  render() {

    return (
      <div>
       
          <Router>
            <React.Fragment>
            <nav><Link to="/" onClick={this.handleClick}>React Router, Redux and GraphQL demo app</Link></nav>
            <Switch>
              <Route path="/" exact component={CountriesContainer} />
              <Route path="/country-info" component={CountryInfo} />
            </Switch>    
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

const mapDispatchToProps = {updateCountry};


export default connect(mapStateToProps, mapDispatchToProps)(App);