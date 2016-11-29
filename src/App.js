// App.js: React uses a component-based-architecture (C.B.A.), so every element on your User Interface can be thought of as a component. That means the main container of your app is the main component. Which has children components which have children components and so on. So this App.js is the component class for our “App” component.
import React, { Component } from 'react';
import TaskList from './TaskList.js';
import Date from './Date.js';
import Avatar from './Avatar.js';
import AddButton from './AddButton.js';

import './App.css';

class App extends Component {
  render() {
    return (
      <div style={{padding: '30px 30px'}}>
          <Avatar />
          <br />
          <Date />
          <br />
          <TaskList />
          <br />
          <AddButton />
      </div>
    );
  }
}

export default App;
