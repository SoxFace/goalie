import React, { Component } from 'react';
import logo from '../public/goalie_logo.png'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'

import PlayerCard from './components/PlayerCard';

class App extends Component {
  render() {
    var injectTapEventPlugin = require('react-tap-event-plugin');
    injectTapEventPlugin();
    return (
      <MuiThemeProvider>
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <PlayerCard />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
