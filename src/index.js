import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import ImageFinder from "./components/Gallery";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <ImageFinder />
  </React.StrictMode>,
  document.getElementById("root")
);
