// This is the entry point of the React application. It renders the App component inside the root element of the HTML.

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Rendering the root component
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* The App component is wrapped with React.StrictMode to help identify potential problems in the application */}
    <App />
  </React.StrictMode>,
);

