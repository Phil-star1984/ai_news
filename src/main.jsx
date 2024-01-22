import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter basename={"/ai_news/"}>
    <AuthProvider>
      {/* <React.StrictMode> */}
      <App />
      {/* </React.StrictMode> */}
    </AuthProvider>
  </BrowserRouter>
);
