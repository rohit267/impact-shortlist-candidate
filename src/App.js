import React from "react";
import CandidateDataStore from "./store/store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Homepage from "./pages/homepage";
import Shortlisted from "./pages/shortlisted";
import Rejected from "./pages/rejected";
import Candidate from "./pages/candidate";

const App = () => {
  let CandidateData = CandidateDataStore.useContainer();
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Homepage store={CandidateData} />
        </Route>
        <Route  exact path="/shortlisted">
          <Shortlisted store={CandidateData} />
        </Route>
        <Route  exact path="/rejected">
          <Rejected store={CandidateData} />
        </Route>
        <Route  path="/:id">
          <Candidate />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
