import { createStore, compose } from 'redux';
import reducers from './reducers';
const enhancers = compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  );
export const store = createStore(reducers, enhancers);