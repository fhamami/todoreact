// App.test.js: We won’t go into testing for now, but just know that C.R.A. supports testing and for every component we create, we can create the corresponding test file using this convention “test.js”. I think one advantage of C.B.A is that it forces you to split your application into independent components that can be tested in an isolated way.
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});
