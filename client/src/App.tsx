import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { ROUTER_ROUTES, API_ROUTES } from "./routes";
import { Home, Dashboard, Accounts } from "./pages";
import { useFetch } from "./hooks";

const App = () => {
  const {
    error: statusError,
    loading: statusLoading,
    data: statusData,
  } = useFetch(API_ROUTES.v1.status.status, {}, { fetchWithAuth: false });

  useEffect(() => {
    if (!statusLoading) {
      if (statusError) {
        console.log(statusError);
      } else {
        console.log(statusData);
      }
    }
  }, [statusError, statusLoading, statusData]);

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
