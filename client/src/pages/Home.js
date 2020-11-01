import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ROUTER_ROUTES, API_ROUTES } from "../routes";
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

  //TODO: If user is authenticated, show 'go to app' instead of login button
  return isAuthenticated ? (
    <>
      <div>{user.email}</div>
      <Link to={ROUTER_ROUTES.DASHBOARD}>
        <button>Go To App</button>
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
    <>
      <button onClick={refresh}>checkAuth</button>
      <button
        onClick={() =>
          loginWithRedirect({
            redirectUri: window.location.origin + ROUTER_ROUTES.DASHBOARD,
          })
        }
      >
        Login
      </button>
    </>
  );
};

export default Home;
