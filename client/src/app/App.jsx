import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Main, Login, SampleComponent, Navigation } from "../components/index";

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Switch>
          <Route path="/sample">
            <SampleComponent />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
