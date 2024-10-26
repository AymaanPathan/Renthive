import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-w4dzu652binjv7r3.us.auth0.com"
        clientId="URXkz06VW55R40hVQR7kkM0awQBfTBrj"
        authorizationParams={{
          redirect_uri: "http://localhost:5173/",
        }}
      >
        <App />
      </Auth0Provider>
    </BrowserRouter>
  </StrictMode>
);
