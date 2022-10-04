import React from "react";
import ReactDOM from "react-dom/client";
import { Pagination } from "./pagination";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="app">
      <Pagination pageCount={30} initialPage={7} onPageChange={console.log} />
    </div>
  </React.StrictMode>
);
