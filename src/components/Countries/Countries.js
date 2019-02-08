import React from 'react';

import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';


// endpoint - in graphql there is only 1 endpoint instead of multiple in REST API
const client = new ApolloClient({
    uri: 'https://countries.trevorblades.com',
})

const Countries = () => (
    <ApolloProvider client={client}>

    {/* GraphQL query - data from endpoint  */}
    <Query query={gql`
       {
        countries {
           name
         }
        }
    `}>
        {/* sth like in REST - handle loading, handle error and if success access to data */}
        {({loading, error, data}) => {
          if (loading) return <p>Load</p>
          if (error) return <p>Ups, Error</p>
          return (
              <React.Fragment>
                 {data.countries.map(country => (
                    <div>{country.name}</div>
                 ))}
             </React.Fragment>
          );
        }}
    </Query>
    </ApolloProvider>
)

export default Countries;