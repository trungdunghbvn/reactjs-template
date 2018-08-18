import React, { Component } from 'react';
import Main from './routers/Main';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div id="wrap-main-site">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
