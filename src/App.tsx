import React from 'react';
import logo from './logo.svg';
import './App.scss';
import { Counter } from 'components/molecules';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
      </header>
    </div>
  );
}

export default App;
