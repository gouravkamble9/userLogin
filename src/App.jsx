import React from "react";
import AppContextProvider from "./utils/context";
import Navbar from "./components/Navbar";
import Logedin from "./components/Logedin";
import Logedno from "./components/Logedno";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./pages/Home";

const App = () => {
  return (
    <Auth0Provider
      domain="dev-5sv0eimmn5pubhor.us.auth0.com"
      clientId="gcHGOT6OzbYNqV1DiFPPRxLzWeCKrP9j"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <AppContextProvider>
        <Navbar />
        <Home/>
      </AppContextProvider>
    </Auth0Provider>
  );
};

export default App;
