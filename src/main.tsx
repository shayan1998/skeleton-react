import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.scss";
import Skeleton from "./Skeleton";

if (import.meta.env.DEV) {
  ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
}

export default Skeleton;
