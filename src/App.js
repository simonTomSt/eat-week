import React from "react";
import LandingPage from "./components/landingComponents/LandingPage";
import Dashboard from "./components/dashboardComponents/Dashboard";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route>
            <Dashboard path="/dashboard" />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
