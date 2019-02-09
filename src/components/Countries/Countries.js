import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

import { connect } from "react-redux";

// i use redux in this file so i have to import my action
import { updateCountry } from "../../redux/actions";

// endpoint - in graphql there is only 1 endpoint instead of multiple in REST API
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
})

const Countries = (props) => (
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
                 <li onClick={ () =>  props.updateCountry({country: "test"}) }>Redux</li>
                 {data.countries.map(country => (
                    <li key={country.name} onClick={ () =>  props.updateCountry({countryName: country.name, countryNative: country.native, countryCurrency: country.currency}) }>{country.name}</li>
                 ))}
             </ul>
          );
        }}
    </Query>
    </ApolloProvider>
)

// my action creator there: 
const mapDispatchToProps = { updateCountry };


// in App i use <CountriesContainer /> instead of <Countries /> 
const CountriesContainer = connect(
    // normally there is mapStateToProps but i change it to null - because in this component I don't read any redux state, i just only update it
    null,
    mapDispatchToProps
)(Countries);
  
export default CountriesContainer;