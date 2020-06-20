
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


function App() {
  return (
    <Router>
      <h2>Movie Finder</h2>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about/" component={About} />
        <Route path="/contact/" component={Contact} />
        <Route path="/" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
