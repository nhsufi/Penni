import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ROUTES from "../routes";

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
          logout({ returnTo: window.location.origin + ROUTES.HOME })
        }
      >
        Logout
      </button>
    </>
  ) : (
    loginWithRedirect({
      redirectUri: window.location.origin + ROUTES.DASHBOARD,
    })
  );
};

export default Accounts;
