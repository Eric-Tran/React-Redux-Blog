import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import App from './components/app';
//working with react-router now. Will render app elsewhere.
//browser history is an object to tell react router what to do with changes in url.
import { Router, browserHistory } from 'react-router';
import reducers from './reducers';
//import routes.js
import routes from './routes';
//importing promise
import promise from 'redux-promise';

//use promise here to make sure all actions flow through promise middleware before reaching reducers.
const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history ={browserHistory} routes={routes} />
  </Provider>
  , document.querySelector('.container'));
