import React from 'react';

// in this component I only want to show some data from store, but is necessary to use connect there - watch state changes
import { connect } from "react-redux";


// in props I have access to redux store, because i use mapstatetoprops
const CountryInfo = (props) => (
    <ul>
        <li><strong>Name:</strong> {props.differentName.countryName}</li>
        <li><strong>Native name:</strong> {props.differentName.countryNative}</li>
        <li><strong>Currency:</strong> {props.differentName.countryCurrency}</li>
    </ul>
)


//In this component I only read some data so there's no need to use mapDispatchProps - i don't need any action
const mapStateToProps = state => {
    return {

        // i can change props name there , for test pupropses i use differentName and app works 
        differentName: state.myStore
    };
  };


export default connect(mapStateToProps)(CountryInfo);