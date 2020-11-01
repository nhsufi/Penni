import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { ROUTER_ROUTES } from "../routes";

const Accounts = () => {
  const { isAuthenticated, loginWithRedirect, logout, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return isAuthenticated ? (
    <>
      <div>Accounts</div>
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

export default Accounts;
