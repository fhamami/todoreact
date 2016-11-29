// index.js: This is the entry point into our src folder. That is, when we run our program, this is the file that will get run (because by convention index.js in javascript works just like index.html in HTML). So this is the file where we import all our components, classes, stylesheets and render our “App” component.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';
import 'font-awesome/css/font-awesome.css';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
