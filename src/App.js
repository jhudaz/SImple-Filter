import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Description from "./containers/description"
import Filter from "./containers/filter" 

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Filter} />
            <Route path="/Description/:coinId" component={Description} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
