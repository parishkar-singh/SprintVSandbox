import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider, useSelector } from "react-redux";
import Home from "./Pages/Home";
import Auth from "./Pages/Auth";
import "./styles.css";
import { SidebarProvider } from "./Context/TabContext";
import store, {RootState} from "@/Redux/Store.ts";
import DarkModeButton from "@/Components/Buttons/DarkModeButton.tsx";
import Lenis from "@studio-freight/lenis";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {gsap} from 'gsap'
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
    useEffect(() => {
        const lenis = new Lenis()
        lenis.on('scroll', ScrollTrigger.update)

        gsap.ticker.add((time:any)=>{
            lenis.raf(time * 1000)
        })
        gsap.ticker.lagSmoothing(0)

        return () => {
        };
    }, []);
  return (
      <div className="flex bg-white dark:bg-black text-white flex-col min-w-screen min-h-screen">
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
          {/*<DarkModeButton/>*/}
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);
