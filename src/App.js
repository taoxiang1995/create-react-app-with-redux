import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Reducer/index';

import thunkMiddleware from 'redux-thunk'
import createLogger from 'redux-logger'

const loggerMiddleware = createLogger();
const Store = createStore(rootReducer,
  applyMiddleware(
      thunkMiddleware, // lets us dispatch() functions
      loggerMiddleware // neat middleware that logs actions
    ));

class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <div>Hello, World!</div>
      </Provider>
    );
  }
}

export default App;
