import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTER_ROUTES, API_ROUTES } from "./routes";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";

const App = () => {
  useEffect(() => {
    (async () => {
      const res = await fetch(API_ROUTES.v1.health.status);
      const { body } = await res.json();
      console.log(body);
    })();
  });

  return (
    <Router>
      <Switch>
        <Route path={ROUTER_ROUTES.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path={ROUTER_ROUTES.ACCOUNTS}>
          <Accounts />
        </Route>
        <Route path={ROUTER_ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
