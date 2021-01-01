import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Homepage from './pages/homepage';
import Shortlisted from './pages/shortlisted';
import Rejected from './pages/rejected';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <Homepage />
          </Route>
          <Route path="/shortlisted">
            <Shortlisted />
          </Route>
          <Route path="/rejected">
            <Rejected />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default App;
