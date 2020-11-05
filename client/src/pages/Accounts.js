import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { ROUTER_ROUTES } from "../routes";

const Accounts = () => {
  const {
    isAuthenticated,
    loginWithRedirect,
    logout,
    user,
    isLoading,
  } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <>
      <div>Logged in as {user.email}</div>
      <Link to={ROUTER_ROUTES.HOME}>
        <button>Home</button>
      </Link>
      <Link to={ROUTER_ROUTES.DASHBOARD}>
        <button>Dashboard</button>
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

export default Accounts;
