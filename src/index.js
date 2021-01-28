<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
=======
import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import LandingPage from "./Views/Landing Page/Landing Page";
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 87fb2d5ddf3a40858ce3c99d5599d4df4bf8a2d8
