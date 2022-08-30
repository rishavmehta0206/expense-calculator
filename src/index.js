import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppReducer from "./context/AppReducer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppReducer>
      <App />
    </AppReducer>
  </React.StrictMode>
);
