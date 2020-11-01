import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ROUTES from "../routes";

const Home = () => {
  const { loginWithRedirect, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  //TODO: If user is authenticated, show 'go to app' instead of login button
  return (
    <button
      onClick={() =>
        loginWithRedirect({
          redirectUri: window.location.origin + ROUTES.DASHBOARD,
        })
      }
    >
      Login
    </button>
  );
};

export default Home;
