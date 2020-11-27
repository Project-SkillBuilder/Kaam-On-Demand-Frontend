import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import CustomerProfile from "./Views/Customer Profile/Customer Profile";
ReactDOM.render(
  <CustomerProfile/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
