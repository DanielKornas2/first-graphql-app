import { combineReducers } from "redux";

export const country = (state = [], action) => { 
    switch (action.type) { 
      case 'COUNTRY_UPDATE':
        return [
           action.country
        ]
      default:
        return state
    }
  }

  export default combineReducers({
    country
  });