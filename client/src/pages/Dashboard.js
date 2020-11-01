import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { API_ROUTES, ROUTER_ROUTES } from "../routes";
import { Link } from "react-router-dom";
import { useApi } from "../hooks";

const Home = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();

  const { loading, error, refresh, data } = useApi(
    API_ROUTES.v1.health.checkAuth
  );

  if (isLoading || loading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <>
      <button onClick={refresh}>checkAuth</button>
      <div>{user.email}</div>
      <Link to={ROUTER_ROUTES.ACCOUNTS}>
        <button>Accounts</button>
      </Link>
      <Link to={ROUTER_ROUTES.HOME}>
        <button>Home</button>
      </Link>
      <button
        onClick={() =>
          logout({ returnTo: window.location.origin + ROUTER_ROUTES.HOME })
        }
      >
        Logout
      </button>
    </>
  ) : (
    loginWithRedirect({
      redirectUri: window.location.origin + ROUTER_ROUTES.DASHBOARD,
    })
  );
};

export default Home;
