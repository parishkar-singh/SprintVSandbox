import React from 'react';
import Navbar from "../Containers/Navbar";
import Sidebar from "../Containers/Sidebar";
import Dashboard from "../Containers/Dashboard";
import {BackgroundGradientAnimationDemo} from "@/Pages/GradientPage.tsx";
import EmployeesTab from "@/Tabs/EmployeesTab.tsx";
import {cn} from "@/Utils/cn.ts";
import DarkModeButton from "@/Components/Buttons/DarkModeButton.tsx";
import Header from "@/Containers/Animation/Header.tsx";

const Home: React.FC = React.memo(() => {
    return (
        <div className="flex bg-white dark:bg-black overflow-x-hidden bg flex-col h-full w-full ">

            <EmployeesTab/>
            {/*<Header/>*/}
            {/*<Header/>*/}

            {/*<Header/>*/}
            {/*<Header/>*/}
            {/*<Navbar />*/}
            {/*<div className=" bg-white dark:bg-black flex overflow-x-hidden overflow-y-hidden h-full w-full">*/}
            {/*    <Sidebar />*/}
            {/*    <Dashboard />*/}
            {/*</div>*/}

            {/*<EmployeesTab/>*/}
            {/*<BackgroundGradientAnimationDemo/>*/}
        </div>
    );
});

export default Home;
