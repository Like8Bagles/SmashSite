import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import Home from './containers/Home.js';
import NavBar from './components/NavBar';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        SmashSite
      </header>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
      </Switch>
    </div>
  );
}

export default App;
