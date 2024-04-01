import React from 'react';
import Navbar from "../Containers/Navbar";
import Sidebar from "../Containers/Sidebar";
import Dashboard from "../Containers/Dashboard";
import {BackgroundGradientAnimationDemo} from "@/Pages/GradientPage.tsx";

const Home: React.FC = React.memo(() => {
    return (
        <div className="flex bg-white dark:bg-black bg flex-col h-full w-full ">
            {/*<Navbar />*/}
            {/*<div className=" bg-white dark:bg-black flex overflow-x-hidden overflow-y-hidden h-full w-full">*/}
            {/*    <Sidebar />*/}
            {/*    <Dashboard />*/}
            {/*</div>*/}
            <BackgroundGradientAnimationDemo/>
        </div>
    );
});

export default Home;
