import './App.css';

import React, { Component } from 'react';

import { Background } from './components/Background';
import TitleContainer  from './containers/TitleContainer';

class App extends Component {

  render() {
    return (
        <div className="clickb4it">
          <Background />
          <TitleContainer />
        </div>
    );
  }
}

export default App;
