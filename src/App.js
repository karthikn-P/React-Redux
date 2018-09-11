import React, { Component } from 'react';
import './App.css';
//import AddrContainer from './ReduxReact/AddrContainer';
import ComeIn from './CombReducer/ComeIn';
class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>This is Addr Box</h1>
        <ComeIn /> 
      </div>
    );
  }
}

export default App;
