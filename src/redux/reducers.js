import { combineReducers } from "redux";

export const myStore = (state = {}, action) => { 
    switch (action.type) { 
      case 'COUNTRY_UPDATE':
        return action.myStore;
      default:
        return state;
    }
  };

  export default combineReducers({
    myStore
  });