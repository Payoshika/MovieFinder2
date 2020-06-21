
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Movie from "./Movie"
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

const NotFound = () => {
  return <h2>404 not Found</h2>
}

function App() {
  return (
    <Router>
      <nav class="navbar d-flex justify-content-center">
        <h2>Movie Finder2</h2>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component= {NotFound} />
      </Switch>
    </Router>
  )
}

export default App;
