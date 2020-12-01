import React from 'react';
import ReactDOM from 'react-dom';
import $ from "jquery";
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.css';
import 'tachyons';
import './index.css';
import * as serviceWorker from './serviceWorker';
import App from "./App";
import WorkerCard from "./Components/Worker Card/Worker Card";
import LandingPage from "./Views/Landing Page/Landing Page";
ReactDOM.render(
  <LandingPage/>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
