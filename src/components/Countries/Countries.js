import React from 'react';

import './Countries.css';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import { Link } from 'react-router-dom';


import { connect } from "react-redux";

// i use redux in this file so i have to import my action
import { updateCountry } from "../../redux/actions";

// endpoint - in graphql there is only 1 endpoint instead of multiple in REST API
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
})

const Countries = (props) => (
   <section>
    <ApolloProvider client={client}>

    {/* GraphQL query - data from endpoint  */}
    <Query query={gql`
       {
        countries {
            currency
            name
            native
         }
        }
    `}>
        {/* sth like in REST - handle loading, handle error and if success access to data */}
        {({loading, error, data}) => {
          if (loading) return <p>Loading data</p>
          if (error) return <p>Ups, Error</p>
          return (
              
              <ul>
                 {data.countries.map(country => (
                    <li key={country.name} onClick={ () =>  props.updateCountry({countryName: country.name, countryNative: country.native, countryCurrency: country.currency}) }><Link to={`/country-info?${country.name}`}>{country.name}</Link></li>
                 ))}
             </ul>
            
          );
        }}
    </Query>
    </ApolloProvider>

   
 </section>
)

const mapStateToProps = state => {
    return {
        myStore: state.myStore
    };
};


// my action creator there: 
const mapDispatchToProps = { updateCountry };


// in App i use <CountriesContainer /> instead of <Countries /> 
const CountriesContainer = connect(
    //if in component i won't use mapStateToProps i can replace it below by null
    mapStateToProps,
    mapDispatchToProps
)(Countries);
  
export default CountriesContainer;