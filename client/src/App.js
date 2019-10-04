import React from 'react';
import './App.css';
import { Switch, Route } from "react-router-dom";
import Home from './components/Home/Home'
import One from './components/Home/One'



function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/one" component={One}/>
      </Switch>
    </div>
  );
}

export default App;
