import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ROUTES from "../routes";
import { Link } from "react-router-dom";

const Home = () => {
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
      <div>{user.email}</div>
      <Link to={ROUTES.ACCOUNTS}>
        <button>Accounts</button>
      </Link>
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

export default Home;
