import React, { Component } from 'react';
import logo from '../public/goalie_logo.png'
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin'
import PlayerCard from './components/PlayerCard';
import Footer from './components/Footer';
import GoalSetting from './components/GoalSetting';

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
        {<PlayerCard />}
        {/*<GoalSetting />*/}
        <Footer />
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
