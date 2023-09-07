import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import parts from "./data/parts.json";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="container py-2">
      <App parts={parts} />
    </div>
  </React.StrictMode>
);
