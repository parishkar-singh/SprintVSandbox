import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import "./styles.css";
import { SidebarProvider } from "./Context/TabContext";
import store, {RootState} from "@/Redux/Store.ts";

const App = () => {
  const theme = useSelector((state: RootState) => state.theme);

  const toggleDarkMode = () => {
    const theme = localStorage.getItem('theme') || 'light';
    document.documentElement.classList.toggle('dark', theme === 'dark');
  };

  useEffect(() => {
    toggleDarkMode();
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  return (
      <div className="flex bg-white dark:bg-black text-white flex-col w-screen h-screen">
        <SidebarProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Home />} />
            </Routes>
          </Router>
        </SidebarProvider>
      </div>
  );
};

ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
