import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./styles.css";
import Auth from "./Pages/Auth";
import Home from "./Pages/Home";
import { SidebarProvider } from "./Context/TabContext";

ReactDOM.render(
  <React.StrictMode>
    <div className=" flex bg-white dark:bg-black text-white flex-col w-screen h-screen ">
      <SidebarProvider >
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/dashboard" element={<Home />} />
          </Routes>
          {/* <App /> */}
        </Router>
      </SidebarProvider>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
