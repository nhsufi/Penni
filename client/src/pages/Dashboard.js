import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { ROUTER_ROUTES, API_ROUTES } from "../routes";
import { useFetch } from "../hooks";

const Home = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();

  const {
    error: statusError,
    loading: statusLoading,
    data: statusData,
  } = useFetch(API_ROUTES.v1.health.status);

  useEffect(() => {
    if (!statusLoading) {
      if (statusError) {
        console.log(statusError);
      } else {
        console.log(statusData);
      }
    }
  }, [statusError, statusLoading, statusData]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <>
      <div>Logged in as {user.email}</div>
      <Link to={ROUTER_ROUTES.HOME}>
        <button>Home</button>
      </Link>
      <Link to={ROUTER_ROUTES.ACCOUNTS}>
        <button>Accounts</button>
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
      <div>Logged out</div>
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
