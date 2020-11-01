import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ROUTES from "./routes";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Accounts from "./pages/Accounts";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("/api/v1/say-something");
      const json = await res.json();
      console.log(json);
    };

    fetchData();
  });

  return (
    <Router>
      <Switch>
        <Route path={ROUTES.DASHBOARD}>
          <Dashboard />
        </Route>
        <Route path={ROUTES.ACCOUNTS}>
          <Accounts />
        </Route>
        <Route path={ROUTES.HOME}>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
