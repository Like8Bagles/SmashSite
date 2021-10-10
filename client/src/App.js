import logo from './logo.svg';
import './App.css';
import React from 'react';
import {Router, NavLink, Link} from 'react-router-dom';
import { Home } from './components/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        SmashSite
      </header>
      <NavLink path="/" component={Home}>Home</NavLink>
    </div>
  );
}

export default App;
