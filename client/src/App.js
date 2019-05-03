import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/all"/>
        <Route exact path="/one/:id"/>
        <Route exact path="/new"/>
        <Route exact path="/update"/>
      </Switch>
    </div>
  );
}

export default App;
