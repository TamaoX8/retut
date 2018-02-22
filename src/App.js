import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Panel from './lektionen/2.Komponenten/Panel';
import ClickCounter from './lektionen/2.Komponenten/ClickCounter.js';
import TodoList from './lektionen/3.To-Do-List/to-do-list';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React!!!</h2>
        </div>

        <br/>
        <Panel className="Panel" label="Panel 1" text="Hallo Panel 1 hier"></Panel>
        <br/>
        <Panel className="Panel" label="Panel 2" text="Hallo Panel 2 hier"></Panel>
        <br/>

        <ClickCounter></ClickCounter>
        <TodoList></TodoList>
        
      </div>
    );
  }
}

export default App;
