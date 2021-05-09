import React from "react";
import ReactDOM from "react-dom";
import {createStore, compose} from 'redux';
import {Provider} from 'react-redux';
import App from "./javascripts/Components/App";
import reducer from '../client/javascripts/reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("my-react-boilerplate")
);