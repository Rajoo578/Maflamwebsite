import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import FocusManager from "./Component/FocusManager.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { LastUrlProvider } from "./store/LastUrlContext.jsx";


createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <FocusManager>
    <GoogleOAuthProvider clientId="1072974891186-uf14adi6c93bed8v005g6podmebfruk8.apps.googleusercontent.com">
      <LastUrlProvider>
      <App />
      </LastUrlProvider>
    </GoogleOAuthProvider>
    </FocusManager>
  </BrowserRouter>
);

